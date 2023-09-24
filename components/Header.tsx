import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='z-10 relative flex bg-[#140C40] max-h-[44px] flex-col items-center justify-between'>
      {/* desktop navigation */}
      <div className=' md:flex hidden z-20 max-w-5xl text-white w-full flex items-center justify-between font-mono text-sm lg:flex'>
        <div className='text-white flex'>
          <div className='flex mr-6' >
            <Image 
            className='mr-4'
            src={'/icons/call.png'}
            width={20}
            height={20}
            alt='Call Us'
            />
            <p>+880 345 555 345</p>
          </div>
          <div className='flex'>
          <Image 
            className='mr-4'
            src={'/icons/mail.png'}
            width={20}
            height={20}
            alt='Mail Us'
            />
            <p>Companyname@gmail.com</p>
          </div>
        </div>
        
        <div>
          <Button className='  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30   rounded-none	px-8 bg-gradient-to-r from-gradient-1 to-gradient-2 hover:from-gradient-2 hover:to-gradient-1' variant="secondary">
            Free Quotes{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
          </Button>
        </div>
      </div>

      {/* mobile navigation */}
      <div className=' md:hidden z-20 max-w-5xl text-white w-full flex items-center justify-between font-mono text-sm lg:flex'>
        <div className='text-white flex px-2 py-4'>
          <div className='flex mr-6' >
            <Image 
            className='mr-2'
            src={'/icons/call.png'}
            width={15}
            height={5}
            alt='Call Us'
            />
            <p>+880 345 555 345</p>
          </div>
          <div className='flex'>
          <Image 
            className='mr-4'
            src={'/icons/mail.png'}
            width={15}
            height={5}
            alt='Mail Us'
            />
            <p>Companyname@gmail.com</p>
          </div>
        </div>
        
        {/* <div>
          <Button className='  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30   rounded-none	px-8 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-400 hover:to-yellow-500' variant="secondary">
            Free Quotes{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default Header