import React from 'react'
import CircularProgress from './CircularProgressBar/CircularProgress'

type props = {
  title: string;
  desc: string;
  progress: number;
  color?: string;
}

export const QuizCircularProgress = ({title, desc, progress, color}: props) => {
  return (
    <div className='flex items-center gap-4'>
        <CircularProgress progress={progress} color={color} />
        <div>
          <p className='text-lg md:text-xl lg:text-2xl text-textprimary '>{title}​</p>
          <p className='text-secondary text-sm md:text-md lg:text-based font-medium'>{desc}</p>
        </div>
      </div>
  )
}
