'use client';

import React from 'react';
import { useParams } from 'next/navigation';

// Import Components
import { QuizResultIntroContainer } from '../QuizResultIntroContainer';


// Import JSON data
import personalityJson from '@//app/(user)/json/personalityKh.json';
import skillJson from '@//app/(user)/json/skillKh.json';
import interestJson from '@//app/(user)/json/interestKh.json';
import valueJson from '@//app/(user)/json/valueKh.json';
import learningStyleJson from '@//app/(user)/json/learningStyleKh.json';
import allTestJson from '@//app/(user)/json/allTest.json';
import { QuizLinkAndChatContainer } from '../QuizLinkAndChatContainer';
import { Feedback } from '../../General/Feedback';
import { RecommendationCard } from '../RecommendationCard';
import QuizHeader from '../QuizHeader';
import { SkillResultComponent } from './ResultContentComponent/SkillResultComponent';
import { InterestResultComponent } from './ResultContentComponent/InterestResultComponent';
import { LearningStyleResultComponent } from './ResultContentComponent/LearningStyleResultComponent';

type IntroKh = {
    title: string;
    highlight: string;
    description: string;
  };
  
  type Recommendation = {
    jobTitle: string;
    jobdesc: string;
    majors: string[]; // Array of related majors
    unis: string[];   // Array of related universities
  };
  
  type QuizData = {
    introKh: IntroKh;              // Introductory data for the result
    Recommendation: Recommendation; // Career recommendations
  };

const resultDataMap: Record<string, QuizData> = {
    'personality': personalityJson,
    'skill': skillJson,
    'interest': interestJson,
    'value': valueJson,
    'learningStyle': learningStyleJson,
    'all': allTestJson
};

export default function ResultDynamicComponent() {
    const { resultType } = useParams();

    // Ensure resultType is valid
    if (!resultType || Array.isArray(resultType)) {
        return <p>Invalid result type</p>;
    }

    const resultData = resultDataMap[resultType];

    // Handle invalid result types
    if (!resultData) {
        return (
            <div className="w-full text-center py-10">
                <h1 className="text-2xl font-bold">Result Not Found</h1>
                <p>The test result you are looking for does not exist.</p>
            </div>
        );
    }

    const { introKh, Recommendation } = resultData;

    console.log('resultType:', resultType);

    const renderResultContent = () => {
        switch (resultType) {
            case 'personality':
                return (
                    <div>
                        
                    </div>
                );
            case 'skill':
                return (
                    <SkillResultComponent/>
                );
            case 'interest':
                return (
                    <InterestResultComponent/>
                );
            case 'value':
                return (
                    <div>
                        
                    </div>
                );
            case 'learningStyle':
                return (
                    <LearningStyleResultComponent/>
                );
            default:
                return <p>Unknown result type</p>;
        }
    };

    return (
        <div className='w-full '>

            {/* Introduction container */}
            <QuizResultIntroContainer
                title={introKh.title}
                highlight={introKh.highlight}
                description={introKh.description}
                size="md"
                type="result"
            />

            <div >
                {renderResultContent()}
            </div>


            <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto p-4 md:p-10 lg:p-12 '>

                <QuizHeader title="ការងារទាំងនេះអាចនឹងសាកសមជាមួយអ្នក" description="These career may suitable for you" size='sm' type='result' />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <RecommendationCard jobTitle={Recommendation.jobTitle} jobDesc={Recommendation.jobdesc} majors={Recommendation.majors} unis={Recommendation.unis} />
                    <RecommendationCard jobTitle={Recommendation.jobTitle} jobDesc={Recommendation.jobdesc} majors={Recommendation.majors} unis={Recommendation.unis} />
                </div>

            </div>


            {/* Share Link and chat with ai section */}
            <QuizLinkAndChatContainer chatTitle='សន្ទនាជាមួយ AI' chatDesc='ស្វែងយល់បន្ថែមពីលទ្ធផលរបស់អ្នក' chatButton='សន្ទនាឥឡូវនេះ' linkTitle='ចែករំលែកលទ្ធផលតេស្តរបស់អ្នក' linkDesc='អនុញ្ញាតឱ្យគ្រួសារនិងមិត្តភក្តិរបស់អ្នកអាចមើលឃើញពីលទ្ធផលរបស់អ្នកដោយការចែករំលែកតំណភ្ជាប់នេះ' linkValue='http://example.com/link/to/document' />

            {/* Feedback section */}
            <Feedback title='មតិកែលម្អអ្នក, ជាការរីកចម្រើនយើង' desc='អរគុណសម្រាប់ការចូលរួមធ្វើតេស្តជាមួយនាំផ្លូវ សូមចែករំលែកគំនិតរបស់អ្នកលើលទ្ធផលសំណួរ និងអ្វីដែលយើងអាចកែលម្អបាន។' highlight='ពួកយើងរីករាយនឹងការផ្តល់មតិរបស់អ្នក' buttonTitle='ផ្ញើ' placeholder='សំណូមពរណាមួយសម្រាប់ការកែលម្អ' />

        </div>
    );

}
