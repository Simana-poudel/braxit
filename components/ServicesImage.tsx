'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { motion } from "framer-motion";


const ServiceImage = () => {

  const container = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  }

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y:20,
      transition: {
        type: "spring",
        duration: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='relative flex items-center p-24 flex-col'>
       {/* desktop navigation */}
       <div className='md:flex hidden w-full max-w-5xl items-center justify-between text-sm'>
          <div>
            <Image 
            className='h-[500px] z-0'
            src='/icons/hero3.png.webp'
            alt='Background picture of homepage'
            fill
            style={{objectFit:"cover"}}
            />
              <motion.div 
              variants={container}
              initial= "hidden"
              animate="visible"
              >
                <motion.h1 
                className='gradient z-1 relative mb-7 text-white  font-bold text-7xl '
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                > 
                  <motion.span>
                  Our Services
                  </motion.span>
                </motion.h1>
                
              </motion.div>
          </div>
       </div>

      {/* mobile navigation */}
      <div className='md:hidden flex w-full max-w-5xl items-center justify-between text-sm'>
          <div className=''>
            <Image 
            className='z-0 brightness-50'
            src='/icons/hero3.png.webp'
            alt='Background picture of homepage'
            fill
            />
              <motion.div 
              variants={container}
              initial= "hidden"
              animate="visible"
              >
                <motion.h1 
                className='gradient z-1 relative mb-7 text-white  font-bold text-3xl '
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                > 
                  <motion.span
                    >
                  Our Services
                  </motion.span>
                </motion.h1>
              </motion.div>
          </div>
       </div>
    </div>
  )
}

export default ServiceImage;