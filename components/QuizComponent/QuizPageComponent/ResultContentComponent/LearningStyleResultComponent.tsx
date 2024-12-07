import React from 'react'
import { QuizLearningStyleResultCard } from '../../QuizLearningStyleResultCard'
import QuizHeader from '../../QuizHeader'
import { QuizOptHorizontalContainer } from '../../QuizOptHorizontalContainer'
import { StaticImageData } from 'next/image'


import mind from '@/public/Quiz/learningStyle/mind-mapping.png'
import feyn from '@/public/Quiz/learningStyle/feynman.png'
import vis from '@/public/Quiz/learningStyle/visualization.png'
import promo from '@/public/Quiz/learningStyle/promodoro.png'



import learningStyleJson from '@//app/(user)/json/learningStyleKh.json'


export const LearningStyleResultComponent = () => {

    const { result } = learningStyleJson;

    const images: { [key: string]: StaticImageData } = {
        "Feynman Technique": feyn,
        Visualization: vis,
        "Pomodoro Technique": promo,
        "Mind Mapping":mind 
    };


    return (
        <div>
            <div className=' max-w-7xl mx-auto '>

                <div className='p-4 md:p-10 lg:p-12 space-y-4 lg:space-y-8'>
                    <QuizHeader title="របៀបនៃការរៀនដែលអ្នកគួរជ្រើសរើសនិងមិនគួរ" description="Learning Style you should choose or avoid" size='sm' type='result' />

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {result.learningStyleCard.map((style, index) => (
                            <QuizLearningStyleResultCard
                                key={index}
                                title={style.title}
                                desc={style.desc}
                                label={style.label}
                            />
                        ))}

                    </div>
                </div>


                <div className='p-4 md:p-10 lg:p-12 space-y-4 lg:space-y-8'>
                    <QuizHeader title="ពួកយើងណែនាំវិធីសាស្រ្តខាងក្រោមដើម្បីជាជំនួយដល់ការសិក្សារបស់អ្នក" description="We recommend you to use these techniques for your studies" size='sm' type='result' />

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {result.learningStyleTechnique.map((item, index) => (
                            <QuizOptHorizontalContainer
                                key={index}
                                title={item.title}
                                desc={item.desc}
                                type='learninigStyle'
                                image={images[item.title]} 
                            />

                        ))}

                    </div>
                </div>



            </div>
        </div>
    )
}
