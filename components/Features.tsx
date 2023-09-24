import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (  //relative z-10 flex bg-white drop-shadow-4xl max-h-[91px] flex-col items-center justify-between
    <div className='flex min-h-screen items-center bg-white py-24'>
      
      <div className=' max-w-5xl mx-auto w-full flex flex-col items-center'>
        <div className='flex flex-col items-center w-[60%] text-center mb-24'>
          <div className='px-4 py-1.5 inline-block	 bg-green text-lg	font-bold	mb-6 text-white'>
            Features
          </div>
          <div className=' text-4xl md:text-2xl text-blue leading-snug	 font-extrabold mt-4 md:mt-8'>
          To increase productivity and cost effectiveness on the market.
          </div>                
        </div>
        <div className='w-[100%] grid grid-cols-4 gap-0'>
          <div>
            <Image 
            className='mb-8'
            src='/icons/icon1.png'
            width={61}
            height={61}
            alt='Quality Image'
             />
          <div className=''>
            <h1 className='mb-2 font-medium	uppercase text-xl	text-blue'>Quality</h1>
            <p className='text-gray text-base'>We collect and analyze information about your general usage of the website, products, services, and courses.</p>
          </div>
          </div>
          <div>
            <Image 
            className='mb-8'
            src='/icons/icon2.png'
            width={61}
            height={61}
            alt='Quality Image'
             />
          <div className=''>
            <h1 className='mb-2 font-medium	uppercase text-xl	text-blue'>Reliability</h1>
            <p className='text-gray text-base'>We collect and analyze information about your general usage of the website, products, services, and courses.</p>
          </div>
          </div>
          <div>
            <Image 
            className='mb-8'
            src='/icons/icon3.png'
            width={61}
            height={61}
            alt='Quality Image'
             />
          <div className=''>
            <h1 className='mb-2 font-medium	uppercase text-xl	text-blue'>Experience</h1>
            <p className='text-gray text-base'>We collect and analyze information about your general usage of the website, products, services, and courses.</p>
          </div>
          </div>
          <div>
            <Image 
            className='mb-8'
            src='/icons/icon4.png'
            width={61}
            height={61}
            alt='Quality Image'
             />
          <div className=''>
            <h1 className='mb-2 font-medium	uppercase text-xl	text-blue'>Manufacturing</h1>
            <p className='text-gray text-base'>We collect and analyze information about your general usage of the website, products, services, and courses.</p>
          </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Features