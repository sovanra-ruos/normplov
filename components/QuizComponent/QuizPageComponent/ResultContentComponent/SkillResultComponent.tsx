import React from 'react'
import { QuizCircularProgress } from '../../QuizCircularProgress'
import QuizHeader from '../../QuizHeader'
import { QuizResultListing } from '../../QuizResultListing'
import checkIcon from '@/public/Quiz/skill-icon/check.png'
import upIcon from '@/public/Quiz/skill-icon/up.png'
import xIcon from '@/public/Quiz/skill-icon/x.png'
import { useFetchAssessmentDetailsQuery } from '@/redux/feature/assessment/result'
import { useParams } from 'next/navigation'

type Skill = {
  skill: string;
  description: string;
}


export const SkillResultComponent = () => {

  const params = useParams();

  // Normalize the values
  const resultType = Array.isArray(params.resultType) ? params.resultType[0] : params.resultType;
  const uuid = Array.isArray(params.uuid) ? params.uuid[0] : params.uuid;
  const { data: response } = useFetchAssessmentDetailsQuery(uuid);

  // Handle invalid or missing parameters
  if (!resultType || !uuid) {
    return <p>Loading...</p>;
  }

  console.log("data from skill:", response?.[0])

  const skillCategory = response?.[0]?.categoryPercentages

  if (!skillCategory) {
    return <p>Loading...</p>;
  }

  const strongSkill = response?.[0].skillsGrouped["Strong"]

  const averageSkill = response?.[0].skillsGrouped["Average"]

  const weakSkill = response?.[0].skillsGrouped["Weak"]

  console.log("strongSkill: ", strongSkill)


  return (
    <div>
      {/* skill category  container */}
      <div className='bg-white'>
        <div className='space-y-6 lg:space-y-16 max-w-7xl mx-auto p-4 md:p-10 lg:p-12 '>
          <p className='text-lg md:text-xl lg:text-2xl text-textprimary'>
            <span className='text-primary font-semibold'>Cognitive Skills</span> is your domain skill refer to the mental abilities that individuals use to acquire knowledge, understand concepts, reason, and solve problems. These skills are essential for processing information, thinking critically, and making informed decisions. They involve the application of logic, creativity, and critical thinking to various tasks and situations.
          </p>

          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6  '>
            <QuizCircularProgress title='ជំនាញក្នុងការយល់ដឹង​' desc='Cognitive Skill' progress={skillCategory["Cognitive Skills"] || 0} />
            <QuizCircularProgress title='ជំនាញអន្តរបុគ្គល​ ' desc='Interpersonal Skill' progress={skillCategory["Interpersonal Skills"] || 0} color="#FFA500" />
            <QuizCircularProgress title='ជំនាញក្នុងការយល់ដឹង​' desc='Self-Management Skill' progress={skillCategory["Self-Management Skills"] || 0} color="#F5C449" />
            <QuizCircularProgress title='ជំនាញក្នុងការយល់ដឹង​' desc='Cognitive Skill' progress={skillCategory["Communication Skills"] || 0} color="#F88787" />

          </div>
        </div>

      </div>

      {/* Strength */}
      <div className='bg-bgPrimaryLight'>
        <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto p-4 md:p-10 lg:p-12'>
          <QuizHeader title="ចំណុចខ្លាំងរបស់អ្នក" description="Strength" size='sm' type='result' />

          <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6  '>

            {strongSkill.map((skill: Skill, index: number) => (
              <QuizResultListing
                key={index}
                title={skill.skill}
                desc={skill.description}
                image={checkIcon}
              />
            ))}

          </div>

        </div>
      </div>


      {/* Growth */}
      <div className='bg-bgPrimaryLight'>
        <div className=' space-y-8 max-w-7xl mx-auto p-4 md:p-10 lg:p-12'>
          <QuizHeader title="ចំណុចដែលអ្នកត្រូវអភិវឌ្ឍបន្ថែម" description="Growth Focus" size='sm' type='result' titleColor='text-secondary' />

          <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6  '>
          
            {averageSkill.map((skill: Skill, index: number) => (
              <QuizResultListing
                key={index}
                title={skill.skill}
                desc={skill.description}
                image={upIcon}
              />
            ))}

          </div>

        </div>
      </div>


      {/* weakness */}
      <div className='bg-bgPrimaryLight'>
        <div className=' space-y-8 max-w-7xl mx-auto p-4 md:p-10 lg:p-12'>
          <QuizHeader title="ចំណុចខ្សោយរបស់អ្នក" description="Your Weakness" size='sm' type='result' titleColor='text-danger' />

          <div className=' grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-6 '>
      
            {weakSkill.map((skill: Skill, index: number) => (
              <QuizResultListing
                key={index}
                title={skill.skill}
                desc={skill.description}
                image={xIcon}
              />
            ))}

          </div>

        </div>
      </div>
    </div>
  )
}
