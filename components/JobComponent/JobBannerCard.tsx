'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { ArrowRight } from "lucide-react";
import placeholderImage from '@/public/Quiz/placeholder.jpg'
import { QuizButton } from '../QuizComponent/QuizButton';

type props = {
    title: string;
    desc: string;
    image: StaticImageData | string;
    buttonText: string;
}

export const JobBannerCard = ({ title, desc, image, buttonText }: props) => {

    const [imgSrc, setImgSrc] = useState(image);

    return (
        <div className="w-full flex-none md:flex md:items-center md:flex-row lg:flex-col bg-white p-4 md:p-6 gap-4 rounded-xl">

            {/* Image Section */}
            <div className="flex justify-center items-center overflow-hidden">
                <Image
                    src={imgSrc}
                    alt="Quiz Illustration"
                    width={350}
                    height={350}
                    className="object-cover"
                    onError={() => setImgSrc(placeholderImage)}
                />
            </div>

            <div className=' lg:flex-none' >
                <h2 className="text-lg md:text-xl font-bold mb-2 text-textprimary">{title}</h2>
                <p className=" text-md md:text-base text-textprimary mb-4">
                    {desc}
                </p>

                <QuizButton title={buttonText ? buttonText : 'Start Quiz'} rounded='full' icon={<ArrowRight />} type='rightIcon' full={true}/>

            </div>

           
                
            



        </div>
    )
}
