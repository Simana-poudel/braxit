import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';


const ProjectImage = () => {
  return (
    <div className='flex items-center justify-start justify-between p-24'>
       <div className=' max-w-5xl items-end justify-between text-sm'>
            <Image 
            className='h-[500px] z-0 brightness-50'
            src='/icons/hero3.png.webp'
            alt='Background picture of homepage'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            />
            <h1 className='z-1 relative mb-56 pt-12 text-white font-normal text-5xl'>Our Projects </h1>
       </div>
    </div>
  )
}

export default ProjectImage