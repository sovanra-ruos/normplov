'use client'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@//components/ui/accordion"

type props = {
    jobTitle: string;
    jobDesc: string;
    majors: string[];
    unis: string[];
}

export const RecommendationCard = ({ jobTitle, jobDesc, majors, unis }: props) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded); // Toggle between expanded and collapsed
    };

    return (
        <div className="rounded-xl bg-[#FDFDFB] w-full h-auto mt-10 relative text-textprimary">
            {/* Instruction Label */}
            <span className="absolute left-4 -top-4 inline-flex items-center bg-primary px-4 py-1 text-lg md:text-xl font-semibold text-white rounded-xl">
                {jobTitle}
            </span>

            {/* How it Works Section */}
            <div className="px-6 pt-8 pb-6 rounded-b-lg">

                <p
                    className={`text-md md:text-lg  overflow-hidden text-textprimary ${!isExpanded ? 'line-clamp-3' : ''}`}
                    title={isExpanded ? '' : jobDesc} // Tooltip shows full text when truncated
                >
                    {jobDesc}
                </p>


                {/* Button to toggle between truncated and full text */}
                <button
                    onClick={handleToggle}
                    className="text-primary"
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>

                <Accordion type="single" collapsible>
                    <AccordionItem className='border-none' value="item-1">
                        <AccordionTrigger className='text-lg md:text-xl font-semibold pb-2'>Recommended Majors</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 text-lg list-disc pl-6">
                                {majors.map((major, index) => (
                                    <li key={index}>{major}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem className='border-none' value="item-1">
                        <AccordionTrigger className='text-lg md:text-xl font-semibold pb-2'>Universities</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-2 text-base md:text-lg list-disc pl-6">
                                {unis.map((uni, index) => (
                                    <li key={index}>{uni}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>




            </div>

        </div>

    )
}
