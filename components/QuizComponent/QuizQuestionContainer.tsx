import React, { useRef, useState } from 'react'
import Image from 'next/image'

type Props = {
    question: string;
    lang?: 'en' | 'kh';
    onSelectionComplete?: () => void; // Callback to signal when a selection is made
    questionIndex: number; // The index of the current question in the quiz
    updateCompletedQuestions: (index: number) => void; // Function to update the completion status
}

export const QuizQuestionContainer = ({ question, lang = 'en', onSelectionComplete, questionIndex, updateCompletedQuestions }: Props) => {
    const [selected, setSelected] = useState<string | null>(null);
    const questionRef = useRef<HTMLDivElement>(null); // Reference to scroll to this question


    const handleOptionClick = (option: string) => {
        setSelected(option);  // Mark this question as selected
        updateCompletedQuestions(questionIndex); // Mark the question as completed

        if (onSelectionComplete) {
            onSelectionComplete(); // Trigger scroll to next question
        }

        // Auto-scroll to next question after a small delay to wait for the transition
        setTimeout(() => {
            questionRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' });
        }, 300);  

    }

    return (
        <div
            ref={questionRef}
            className={`flex flex-col items-center gap-2 lg:gap-4 px-2 py-6 lg:px-6 lg:py-12 rounded-lg space-y-6 border-b border-gray-200
        ${selected ? 'bg-[#fdfdfd92] text-gray-500' : 'bg-white text-textprimary'} 
        transition-all duration-300 ease-in-out`}
        >
            {/* Question */}
            <p className={`text-lg md:text-3xl font-medium text-center ${selected ? 'text-gray-400' : 'text-textprimary'}`}>
                {question}
            </p>

            {/* Emojis and Labels */}
            <div className="flex justify-between items-center w-full">
                {/* Disagree Label */}
                <span className={`hidden lg:block text-md md:text-xl lg:text-2xl font-semibold ${selected ? 'text-danger opacity-30' : 'text-danger'}`}>
                    {lang === 'en' ? 'Disagree' : 'មិនឯកភាពទាំងស្រុង'}
                </span>

                {/* Emoji Scale */}
                <div className="flex justify-center gap-2 lg:gap-6 w-full">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/Quiz/emoji/veryDisagree.png"
                            alt="Strongly Disagree"
                            width={100}
                            height={100}
                            onClick={() => handleOptionClick('veryDisagree')}
                            className={`cursor-pointer ${selected === 'veryDisagree' ? 'rounded-full ring-2 ring-primary ring-opacity-30' : ''} ${selected ? 'opacity-60' : ''}`}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/Quiz/emoji/disagree.png"
                            alt="Disagree"
                            width={100}
                            height={100}
                            onClick={() => handleOptionClick('disagree')}
                            className={`cursor-pointer ${selected === 'disagree' ? 'rounded-full ring-2 ring-primary ring-opacity-30' : ''} ${selected ? 'opacity-60' : ''}`}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/Quiz/emoji/neutral.png"
                            alt="Neutral"
                            width={100}
                            height={100}
                            onClick={() => handleOptionClick('neutral')}
                            className={`cursor-pointer ${selected === 'neutral' ? 'rounded-full ring-2 ring-primary ring-opacity-30' : ''} ${selected ? 'opacity-60' : ''}`}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/Quiz/emoji/agree.png"
                            alt="Agree"
                            width={100}
                            height={100}
                            onClick={() => handleOptionClick('agree')}
                            className={`cursor-pointer ${selected === 'agree' ? 'rounded-full ring-2 ring-primary ring-opacity-30' : ''} ${selected ? 'opacity-60' : ''}`}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/Quiz/emoji/veryAgree.png"
                            alt="Strongly Agree"
                            width={100}
                            height={100}
                            onClick={() => handleOptionClick('veryAgree')}
                            className={`cursor-pointer ${selected === 'veryAgree' ? 'rounded-full ring-2 ring-primary ring-opacity-30' : ''} ${selected ? 'opacity-60' : ''}`}
                        />
                    </div>
                </div>

                {/* Agree Label */}
                <span className={`hidden lg:block text-md md:text-xl lg:text-2xl font-semibold ${selected ? 'text-primary opacity-30' : 'text-primary'}`}>
                    {lang === 'en' ? 'Agree' : 'ឯកភាពទាំងស្រុង'}
                </span>
            </div>
        </div>
    )
}
