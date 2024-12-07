import React from 'react'
import QuizHeader from '../../QuizHeader'
import { QuizInterestResultCard } from '../../QuizInterestResultCard'

// Import image
import creativityImage from '@/public/Quiz/interest/creativity.png'
import enterprising from '@/public/Quiz/interest/enterprising.png'

// Import json
import interestJson from '@//app/(user)/json/interestKh.json'
import { StaticImageData } from 'next/image'

export const InterestResultComponent = () => {

    const { result } = interestJson;

    const images: { [key: string]: StaticImageData } = {
        Artistic: creativityImage,
        Enterprising: enterprising,
    };

    return (

        <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto p-4 md:p-10 lg:p-12' >
            <QuizHeader title="បុគ្គលដែលមានចំណាប់អារម្មណ៍លើផ្នែកនេះមានទំនោរទៅខាង" description="Individuals with an interest in this area tend to be" size='sm' type='result' />

            <div className='flex flex-wrap gap-4 justify-center'>
                {result.interestCard.map((item, index) => (
                    <QuizInterestResultCard
                        key={index}
                        title={item.title}
                        desc={item.desc}
                        image={images[item.title]} 
                    />
                ))}
            </div>


        </div>

    )
}
