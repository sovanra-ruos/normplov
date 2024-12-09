'use client'
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { QuizIntroContainer } from '@/components/QuizComponent/QuizIntroContainer';
import { Progress } from "@/components/ui/progress";
import { QuizQuestionContainer } from '@/components/QuizComponent/QuizQuestionContainer';
import { QuizButton } from '@/components/QuizComponent/QuizButton';
import { ArrowRight, ArchiveRestore } from "lucide-react";
import { toast } from 'react-toastify';


// Import JSON data
import generalTestJson from '@/app/(user)/json/testGeneralKh.json';
import personalityJson from '@/app/(user)/json/personalityKh.json';
import skillJson from '@/app/(user)/json/skillKh.json';
import interestJson from '@/app/(user)/json/interestKh.json';
import valueJson from '@/app/(user)/json/valueKh.json';
import learningStyleJson from '@/app/(user)/json/learningStyleKh.json';
// import allTestJson from '@/app/(user)/json/allTest.json';
import { usePredictAssessmentMutation } from '@/redux/feature/assessment/quiz';



type QuizData = {
  questions: { question: string; category: string }[];
  introKh: {
    title: string;
    highlight: string;
    description: string;
  };
};



const quizDataMap: Record<string, QuizData> = {
  'personality': personalityJson,
  'skill': skillJson,
  'interest': interestJson,
  'value': valueJson,
  'learningStyle': learningStyleJson,
  // 'all': allTestJson
};

type QuizQuestion = {
  question: string;
  questionIndex: number;
};

type QuizResponse = { [question: string]: number };

export default function QuizDynamicComponent() {
  const [predictAssessment, { isLoading, error }] = usePredictAssessmentMutation();
  const { testType } = useParams(); // Get the dynamic route parameter
  const router = useRouter();

  // Always call hooks
  const [userResponses, setUserResponses] = useState<QuizResponse>({});
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  // Get the quiz data and total questions
  const quizData = Array.isArray(testType) ? null : quizDataMap[testType];
  const totalQuestions = quizData?.questions?.length || 0;

  // Calculate progress
  const progress = totalQuestions > 0 ? Math.round((completedQuestions.length / totalQuestions) * 100) : 0;


  const processResponsesFromModifiedJSON = (
    userResponses: { [key: string]: number },
    questions: { question: string; category: string }[]
  ) => {
    const responses: { [key: string]: number } = {};

    questions.forEach(({ question, category }) => {
      if (userResponses[question] !== undefined) {
        responses[category] = userResponses[question];
      }
    });

    return { responses };
  };


  if (!quizData) {
    console.error("Quiz data is null");
    return;
  }

  const assessmentType = Array.isArray(testType) ? testType[0] : testType;

  const handleResultClick = async () => {
    if (completedQuestions.length < totalQuestions) {
      toast.error("Please answer all the questions to see the result.");
      return;
    }

    if (!quizData || !quizData.questions) {
      console.error("Quiz data or questions are missing.");
      return;
    }

    const processedResponses = processResponsesFromModifiedJSON(userResponses, quizData.questions);

    try {
      const result = await predictAssessment({
        assessmentType: assessmentType, // Use the normalized `assessmentType` here
        body: processedResponses,
      }).unwrap();

      console.log("API Response:", result);
      toast.success("Responses submitted successfully!");
      router.push(`/test-result/${assessmentType}`); // Use `assessmentType` here too
    } catch (err) {
      console.error("API Error:", err);
      toast.error("Failed to submit responses. Please try again.");
    }
  };


  const handleDraftClick = () => {
    toast.success("Your progress has been saved. You can continue later from your profile.", {
      icon: <span>📂</span>,
      className: "Toastify__toast",
    });
    router.push(`/test`);
  };


  const { instructKh, quizButtonKh } = generalTestJson;
  const { questions, introKh } = quizData;


  const handleAnswer = (question: string, response: number) => {
    setUserResponses((prev) => ({ ...prev, [question]: response })); // Update responses
  };


  return (
    <div className="w-full">
      {/* Intro Section */}
      <div className="bg-bgPrimaryLight pb-6">
        <QuizIntroContainer
          introTitle={introKh.title}
          introHightlight={introKh.highlight}
          introDesc={introKh.description}
          instructLabel={instructKh.instructionLabel}
          howItWorkTitle={instructKh.howItWorksTitle}
          howItWorkStep={instructKh.howItWorksSteps}
          emojiLabels={instructKh.emojiLabels}
          RepresentedImageTitle={instructKh.representedImageTitle}
        />

        {/* Progress Bar */}
        <div className="max-w-7xl mx-auto my-4 md:my-6 px-4">
          <p className="font-semibold mb-2 text-based md:text-lg">{progress} %</p>
          <Progress value={progress} className="h-2 md:h-4" />
        </div>
      </div>

      {/* Questions Section */}
      <div className="max-w-7xl mx-auto my-4 md:my-6 px-4">
        {questions.map((questionData, index) => (
          <QuizQuestionContainer
            key={index}
            question={questionData.question}
            questionIndex={index} // Dynamically add index as questionIndex
            updateCompletedQuestions={(index: number) => {
              if (!completedQuestions.includes(index)) {
                setCompletedQuestions((prev) => [...prev, index]);
              }
            }}
            handleAnswer={handleAnswer}
          />
        ))}


      </div>

      {/* Footer Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-2 justify-end">
        <QuizButton
          title={quizButtonKh.draft}
          rounded="xl"
          icon={<ArchiveRestore />}
          type="leftIcon"
          outline="true"
          onClick={handleDraftClick}
        />
        <QuizButton
          title={quizButtonKh.result}
          rounded="xl"
          icon={<ArrowRight />}
          type="rightIcon"
          onClick={handleResultClick}
        />
      </div>
    </div>
  );
}
