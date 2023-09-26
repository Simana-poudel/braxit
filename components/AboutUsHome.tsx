import Image from 'next/image';
import React from 'react';
const AboutUsHome = () => {
  
  return (
    <div data-aos="fade-up" className=' flex min-h-screen items-center bg-[#FFF7F5] p-4 md:p-24'>
      <div className=' md:flex hidden max-w-5xl items-center justify-between text-sm context w-full mx-auto'>
        {/* Left Division */}
        <div className='md:w-1/2 md:pr-4'>
          {/* Nested Divisions */}
          <div className=''>
            {/* (i) Rectangle with "About Us" */}
            <div className='px-4 py-1.5 inline-block bg-gradient-to-r from-gradient-1 to-gradient-2 text-lg	font-bold	mb-6 text-white'>
              About Us
            </div>
            {/* (ii) Title */}
            <div className=' text-4xl text-[#072366] leading-snug	 font-extrabold mt-4 md:mt-8'>
              We have all your needs, from micro to macro
            </div>
            {/* (iii) Description */}
            <div className='mt-4 md:mt-8 text-base text-[#64676c] leading-6	pr-12 mb-14'>
              We collect and analyze information about your general usage of
              the website, products, services, and courses. We might track your
              usage patterns to see what features of the website you commonly
              use, website traffic volume, frequency of visits, type and time of
              transactions, type of browser, browser language.
            </div>
          </div>
          <div className='flex'>
            <div className='w-1/2'>
              <span className='text-gradient-1 text-6xl	font-medium'>454 m</span>
              <p className='text-[#10285d] text-base leading-8	mb-4 font-normal	'>Delivery Packages</p>
            </div>
            <div className='w-1/2'>
            <span className='text-gradient-1 text-6xl	font-medium	'>127</span>
              <p className='text-[#10285d] text-base leading-8	mb-4 font-normal'>Countries Covered</p>
            </div>

          </div>
        </div>

        {/* Right Division with Image */}
        <div className='md:w-1/2 justify-center mt-4 md:mt-0 md:ml-4 flex relative'>
          <Image
            src='/icons/about1.png.webp' // Replace with your image URL
            alt='About Us'
            className='w-full  md:w-[80%] h-[470px] object-cover'
          />

          {/* Text Overlay */}
          <div className=' absolute bottom-0 left-0 bg-gradient-to-r from-gradient-1 to-gradient-2 p-2 h-44'>
            <div className='mt-[30%]'>
            <div className='flex items-center justify-center text-white text-5xl	'>20</div>
            <p className='flex items-center justify-center text-white text-base'>Years of experience</p>
          </div>
            </div>
          <div className='bg-green about-low-area about-right-cap img-cap'></div>

        </div>
      </div>

      {/* mobile  navigation*/}
      <div className=' md:hidden flex-col items-center justify-between text-sm context mx-3'>
        {/* Left Division */}
        <div className='md:w-1/2 md:pr-4'>
          {/* Nested Divisions */}
          <div className=''>
            {/* (i) Rectangle with "About Us" */}
            <div className='px-4 py-1.5 inline-block bg-gradient-to-r from-gradient-1 to-gradient-2 text-lg	font-bold	mb-6 text-white'>
              About Us
            </div>
            {/* (ii) Title */}
            <div className=' text-2xl text-[#072366] leading-snug	 font-extrabold mt-4 md:mt-8'>
              We have all your needs, from micro to macro
            </div>
            {/* (iii) Description */}
            <div className='mt-4 md:mt-8 text-base text-[#64676c] leading-6	pr-12 mb-14'>
              We collect and analyze information about your general usage of
              the website, products, services, and courses. We might track your
              usage patterns to see what features of the website you commonly
              use, website traffic volume, frequency of visits, type and time of
              transactions, type of browser, browser language.
            </div>
          </div>
          <div className='flex-col'>
            <div className='w-1/2'>
              <span className='text-gradient-1 text-5xl	font-medium'>454 m</span>
              <p className='text-[#10285d] text-base leading-8	mb-4 font-normal	'>Delivery Packages</p>
            </div>
            <div className='w-1/2'>
            <span className='text-gradient-1 text-5xl	font-medium	'>127</span>
              <p className='text-[#10285d] text-base leading-8	mb-4 font-normal'>Countries Covered</p>
            </div>

          </div>
        </div>

        {/* Right Division with Image */}
        <div className='md:w-1/2 justify-center mt-4 md:mt-0 md:ml-4 flex relative'>
          <Image
            src='/icons/about1.png.webp' // Replace with your image URL
            alt='About Us'
            className='w-full  md:w-[80%] h-[470px] object-cover'
          />

          {/* Text Overlay */}
          <div className=' absolute bottom-0 left-0 bg-gradient-to-r from-gradient-1 to-gradient-2 p-2 h-44'>
            <div className='mt-[30%]'>
            <div className='flex items-center justify-center text-white text-5xl	'>20</div>
            <p className='flex items-center justify-center text-white text-base'>Years of experience</p>
          </div>
            </div>
          <div className='bg-green about-low-area about-right-cap img-cap'></div>

        </div>
      </div>
      
    </div>
  );
};

export default AboutUsHome;
