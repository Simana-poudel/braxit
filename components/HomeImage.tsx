'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { motion } from "framer-motion";


const HomeImage = () => {

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
    <div className='flex items-center p-24'>
       
       <div className='md:flex hidden max-w-6xl items-center justify-between text-sm'>
          <div>
            <Image 
            className='h-[500px] z-0'
            src='/hero.png'
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
                  Market Leading <br /> Manufacturer 
                  </motion.span>
                </motion.h1>
                <motion.p 
                className='z-1 text-2xl mb-12 relative text-white'
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                >
                  The right candidate may exist, but talented people
                </motion.p>
                <Button className=' z-1 relative group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30   rounded-none	px-8 bg-gradient-to-r from-gradient-1 to-gradient-2 hover:from-gradient-2 hover:to-gradient-1' variant="secondary">
                  Free Quotes{' '}
                    <span className=" ml-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                </Button>
              </motion.div>
          </div>
       </div>

      {/* mobile navigation */}
      <div className='md:hidden max-w-5xl items-center text-sm'>
          <div
          >
            <Image 
            className='z-0 brightness-50'
            src='/hero.png'
            alt='Background picture of homepage'
            fill
            />
              <motion.div 
              variants={container}
              initial= "hidden"
              animate="visible"
              >
                <motion.h1 
                className='gradient z-1 relative mb-7 text-white  font-bold text-5xl '
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                > 
                  <motion.span
                    >
                  Market Leading <br /> Manufacturer 
                  </motion.span>
                </motion.h1>
                <motion.p 
                className='z-1 text-2xl mb-12 relative text-white'
                variants={descriptionVariants}
                initial="hidden"
                animate="visible"
                >
                  The right candidate may exist, but talented people
                </motion.p>
                <Button className=' z-1 relative group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30   rounded-none	px-8 bg-gradient-to-r from-gradient-1 to-gradient-2 hover:from-gradient-2 hover:to-gradient-1' variant="secondary">
                  Free Quotes{' '}
                    <span className=" ml-2 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                </Button>
              </motion.div>
          </div>
       </div>
    </div>
  )
}

export default HomeImage