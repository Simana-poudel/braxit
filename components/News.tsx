import Image from 'next/image'
import React from 'react'

const News = () => {
  return (
    <div className='flex items-center bg-white md:py-8 xl:py-24'>
      {/* desktop navigation */}
      <div className='md:flex hidden max-w-5xl mx-auto w-full flex flex-col items-center'>
      <div className='grid grid-cols-3 gap-4 w-[100%]'>
      <div className=''>
            {/* (i) Rectangle with "About Us" */}
            <div className='px-4 py-1.5 inline-block	bg-gradient-to-r from-gradient-1 to-gradient-2 text-lg	font-bold	mb-6 text-white'>
              From News
            </div>
            {/* (ii) Title */}
            <div className=' text-4xl text-[#072366] leading-snug	 font-extrabold mt-4 md:mt-8'>
              News & Media Center
            </div>
            {/* (iii) Description */}
            <div className='mt-4 md:mt-8 text-base text-[#64676c] leading-6	pr-12 mb-14'>
              We collect and analyze information about your general usage of
              the website, products, services, and courses.
            </div>
            <a href="#">View all</a>
        </div>

        <div className='pt-8 pb-5 px-10 bg-sky-blue'>
        <div className="gallery">
            <Image src="/icons/news1.png" alt="a lioness" />
            <Image src="/icons/news2.webp" alt="a wolf" />
          </div>
          {/* <Image 
          src='/icons/news1.png'
          width={500}
          height={250}
          alt='News1'
          /> */}
          <div className='mb-8 mt-8'>

          <p className='text-gray'>22 Apr 2020</p>
          <span>We Might Track Your Usage Patterns To See</span>
          </div>
        </div> 

        <div className='pt-8 pb-5 px-10 bg-sky-blue'>
          <div className="gallery">
            <Image src="/icons/news2.webp" alt="a wolf" />
            <Image src="/icons/news1.png" alt="a lioness" />
          </div>
          {/* <Image 
          src='/icons/news2.webp'
          width={500}
          height={250}
          alt='News1'
          /> */}
          <div className='mb-8 mt-8'>

          <p className='text-gray'>22 Apr 2020</p>
          <span>
          The Massive Stadium Screens At The MCG          
          </span>
          </div>
        </div> 

        <div>
        </div>         
        </div>
      </div>

      {/* mobile navigation */}

      <div className='md:hidden  max-w-5xl mx-auto w-full flex flex-col items-center'>
      <div className='grid grid-cols-1 gap-4 w-[100%]'>
      <div className=' text-center mb-4'>
            {/* (i) Rectangle with "About Us" */}
            <div className='px-4 py-1.5 inline-block	bg-gradient-to-r from-gradient-1 to-gradient-2 text-lg	font-bold	mb-6 text-white'>
              From News
            </div>
            {/* (ii) Title */}
            <div className=' text-2xl text-[#072366] leading-snug	 font-extrabold mt-4 md:mt-8'>
              News & Media Center
            </div>
            {/* (iii) Description */}
            <div className='mt-4 md:mt-8 text-base text-[#64676c] leading-6	pr-12 mb-8'>
              We collect and analyze information about your general usage of
              the website, products, services, and courses.
            </div>
            <a href="#">View all</a>
        </div>

        <div className='pt-8 pb-5 px-10 bg-sky-blue'>
        <div className="gallery">
            <Image src="/icons/news1.png" alt="a lioness" />
            <Image src="/icons/news2.webp" alt="a wolf" />
          </div>
          {/* <Image 
          src='/icons/news1.png'
          width={500}
          height={250}
          alt='News1'
          /> */}
          <div className='mb-8 mt-8'>

          <p className='text-gray'>22 Apr 2020</p>
          <span className='text-sm'>We Might Track Your Usage Patterns To See</span>
          </div>
        </div> 

        <div className='pt-8 pb-5 px-10 bg-sky-blue'>
          <div className="gallery">
            <Image src="/icons/news2.webp" alt="a wolf" />
            <Image src="/icons/news1.png" alt="a lioness" />
          </div>
          {/* <Image 
          src='/icons/news2.webp'
          width={500}
          height={250}
          alt='News1'
          /> */}
          <div className='mb-8 mt-8'>

          <p className='text-gray'>22 Apr 2020</p>
          <span className='text-sm'>
          The Massive Stadium Screens At The MCG          
          </span>
          </div>
        </div> 

        <div>
        </div>         
        </div>
      </div>
    </div>
  )
}

export default News