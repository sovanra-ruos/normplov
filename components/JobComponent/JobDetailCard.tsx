'use client'
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import placeholderImage from '@/public/Quiz/placeholder.jpg'
import { QuizButton } from '../QuizComponent/QuizButton';


type props = {
    jobTitle: string;
    jobCompany: string;
    image: StaticImageData | string;
    time?: string;
    location?: string;
    category?: string;
    exp?: string;
    jobDesc?: string;
    website?: string;
    social?: string;
    jobDescLabel?: string;
    aboutCompanyLabel?: string;
    buttonText?: string;
    categorylabel?: string;
    salary?: string
    salaryLabel?: string;
    timeLabel?: string;
    expLabel?: string;
    locationLabel?: string;
    socialLabel?: string;
    websiteLabel?: string;

}

export const JobDetailCard = ({ jobTitle, jobCompany, image, time, location, category, exp, jobDesc, website, social, jobDescLabel, aboutCompanyLabel, buttonText, categorylabel, salary, salaryLabel, timeLabel, expLabel, locationLabel, socialLabel, websiteLabel }: props) => {

    const [imgSrc, setImgSrc] = useState(image);

    return (
        <div className='w-full bg-white p-4 md:p-6 space-y-4 rounded-xl'>
            <div className="grid md:grid-cols-4  w-full md:gap-4 rounded-xl ">
                {/* Image Section */}
                <div className="col-span-1 h-[100px] flex items-center justify-between md:col-span-1  md:place-items-center">
                    <Image
                        src={imgSrc}
                        alt="Technique Illustration"
                        className="object-cover"
                        onError={() => setImgSrc(placeholderImage)}
                    />
                    <div className='block md:hidden'>
                        <QuizButton title={buttonText ? buttonText : 'ដាក់ពាក្យ'} rounded='xl' type='rightIcon' />
                    </div>


                </div>

                {/* Text Section */}
                <div className="col-span-1 md:col-span-3 space-y-2 md:flex md:justify-between md:place-items-center ">
                    <div>
                        <h2 className="text-lg lg:text-2xl font-semibold text-primary ">{jobTitle ? jobTitle : 'Job Title'}</h2>
                        <p className="text-sm lg:text-base text-gray-500">{jobCompany ? jobCompany : 'Unknown'}</p>
                    </div>

                    <div className='hidden md:block'>
                        <QuizButton title={buttonText ? buttonText : 'ដាក់ពាក្យ'} rounded='xl' type='rightIcon' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-6'>
                <div>
                    <p className='text-secondary text-base  md:text-md'>{categorylabel ? categorylabel : 'ប្រភេទការងារ'}</p>
                    <p className='text-textprimary text-lg md:text-xl'>{category ? category : 'Unavailable'}</p>
                </div>
                <div>
                    <p className='text-secondary text-base  md:text-md'>{salaryLabel ? categorylabel : 'ប្រាក់ខែ'}</p>
                    <p className='text-textprimary text-lg md:text-xl'>{salary ? salary : 'Unavailable'}</p>
                </div>
                <div>
                    <p className='text-secondary text-base  md:text-md'>{timeLabel ? timeLabel : 'ប្រភេទនៃការបំពេញការងារ'}</p>
                    <p className='text-textprimary text-lg md:text-xl'>{time ? time : 'Unavailable'}</p>
                </div>
                <div>
                    <p className='text-secondary text-base  md:text-md'>{expLabel ? expLabel : 'បទពិសោធន៍'}</p>
                    <p className='text-textprimary text-lg md:text-xl'>{exp ? exp : 'Unavailable'}</p>
                </div>

            </div>


            <div className=" rounded-xl bg-bgPrimaryLight w-full h-auto  relative text-textprimary">
                <span className=" absolute left-4 -top-4 inline-flex items-center bg-primary px-2 md:px-4 py-1 text-md md:text-lg font-medium text-white rounded-xl">
                    {jobDescLabel ? jobDescLabel : 'ការណែនាំពីការងារ'}
                </span>

              
                <div className="px-4 pt-8 pb-6 rounded-b-lg">

                    <p
                        className={`text-base md:text-lg  overflow-hidden text-textprimary text-opacity-90 `}
                   
                    >
                        {jobDesc}
                    </p>



                </div>

            </div>


            <div className=" rounded-xl bg-secondary bg-opacity-10 w-full h-auto  relative text-textprimary">
               
                <span className=" absolute left-4 -top-4 inline-flex items-center bg-secondary px-2 md:px-4 py-1 text-md md:text-lg font-medium text-white rounded-xl">
                    {aboutCompanyLabel ? aboutCompanyLabel : 'អំពីក្រុមហ៊ុន'}
                </span>

                
                <div className="px-6 pt-8 pb-6 rounded-b-lg space-y-4">

                    <div>
                        <p className='text-textprimary text-base  md:text-md'>{locationLabel ? locationLabel : 'អាស័យដ្ឋាន'}</p>
                        <p className='text-primary text-sm md:text-base'>{location ? location : 'Unavailable'}</p>
                    </div>

                    <div>
                        <p className='text-textprimary text-base  md:text-md'>{websiteLabel ? websiteLabel : 'គេហទំព័រ'}</p>
                        <p className='text-primary text-sm md:text-base'>{website ? website : 'Unavailable'}</p>
                    </div>

                    <div>
                        <p className='text-textprimary text-base  md:text-md'>{socialLabel ? socialLabel : 'បណ្តាញសង្គម'}</p>
                        <p className='text-primary text-sm md:text-base'>{social ? social : 'Unavailable'}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
