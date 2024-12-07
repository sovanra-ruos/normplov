import React from 'react'
import QuizHeader from './QuizHeader'
import { QuizInstructContainer } from './QuizInstructContainer'

type props = {
  introTitle: string;
  introHightlight: string;
  introDesc: string;
  instructLabel: string;
  howItWorkTitle: string;
  howItWorkStep: string[];
  RepresentedImageTitle: string;
  emojiLabels: string[];
}

export const QuizIntroContainer = ({introTitle, introHightlight, introDesc, instructLabel, howItWorkTitle, howItWorkStep, RepresentedImageTitle, emojiLabels}: props) => {

  return (
    <div className='w-full h-auto md:h-[700px] lg:h-[500px] md:mb-44 lg:mb-12'>
      <div className='h-auto sm:h-80 md:h-[800px] lg:h-[400px] p-4 md:p-10 lg:p-12 w-full bg-primary rounded-b-4 md:rounded-b-[24px] mb-6'>
        <div className='max-w-7xl mx-auto'>
          <QuizHeader title={introTitle} highlight={introHightlight} description={introDesc} size='md' />
          <QuizInstructContainer
            instructionLabel={instructLabel}
            howItWorksTitle={howItWorkTitle}
            howItWorksSteps={howItWorkStep}
            representedImageTitle={RepresentedImageTitle}
            emojiLabels={emojiLabels}
          />
        </div>

      </div>
    </div>

  )
}
