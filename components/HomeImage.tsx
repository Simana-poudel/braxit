import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';


const HomeImage = () => {
  return (
    <div className='flex items-center justify-start justify-between p-24'>
       <div className=' max-w-5xl items-center justify-between text-sm'>
          <div>
            <Image 
            className='h-[500px] z-0'
            src='/hero.png'
            alt='Background picture of homepage'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            />
            <h1 className='gradient z-1 relative mb-7 text-white  font-bold text-7xl '> 
              <span>
              Market Leading <br /> Manufacturer 
              </span>
            </h1>
            <p className='z-1 text-2xl mb-12 relative text-white'>The right candidate may exist, but talented people</p>
            <Button className=' z-1 relative group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30   rounded-none	px-8 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-400 hover:to-yellow-500' variant="secondary">
              Free Quotes{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
            </Button>
          </div>
       </div>
    </div>
  )
}

export default HomeImage