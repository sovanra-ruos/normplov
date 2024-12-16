import React from 'react'
import Image from 'next/image'
import { Textarea } from "@/components/ui/textarea"
import { QuizButton } from '../QuizComponent/QuizButton';

type props = {
    title: string;
    desc: string;
    highlight: string;
    buttonTitle: string;
    placeholder: string;
}

export const Feedback = ({ title, desc, highlight, buttonTitle , placeholder}: props) => {
    return (
        <div className='bg-bgPrimaryLight'>
            <div className='max-w-7xl mx-auto p-4 md:p-10 lg:p-12  grid grid-cols-1 lg:grid-cols-12 gap-4'>

                {/* Image Section: Full width for screens 1024px and lower, spans 3 columns on larger screens */}
                <div className="col-span-1 lg:col-span-5 ">
                    <div className=" w-full hidden lg:block">
                        <Image
                            src="/Quiz/feedback2.png"
                            alt="Stepup"
                            width={400}
                            height={400}
                            className="object-cover"
                            priority={true}
                        />
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-7 lg:pt-10">
                    <div>
                        <p className="text-md lg:text-xl text-primary mb-1 lg:mb-4">{highlight}</p>
                        <h2 className=" text-2xl lg:text-4xl font-bold mb-2 lg:mb-5 text-textprimary ">{title}</h2>
                        <p className="text-[14px] lg:text-lg text-gray-500 mb-4">
                            {desc}
                        </p>
                    </div>
                    <Textarea className='bg-white border border-gray-200 pl-2 rounded-xl outline-none focus:border-gray-300 text-sm text-textprimary h-24 mb-4' placeholder={placeholder} />
                    <div className=' flex justify-end'>
                        <QuizButton title={buttonTitle} full={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}
