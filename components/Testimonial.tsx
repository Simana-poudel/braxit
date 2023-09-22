import Image from 'next/image'
import React from 'react'
import CardWithForm from './Suscribe'

const Testimonial = () => {
  return (
    <div className='flex items-center bg-white py-24'>
      <div className=' max-w-5xl mx-auto w-full flex flex-col items-center'>
        <div className='flex flex-col items-center w-[48%] text-center mb-24'>
          {/* (i) Rectangle with "About Us" */}
          <div className='px-4 py-1.5 inline-block	 bg-orange text-lg	font-bold	mb-6 text-white'>
            Testimonial

          </div>
          {/* (ii) Title */}
          <div className=' text-4xl text-blue leading-snug	 font-extrabold mt-4 md:mt-8'>
          Some amazing words from our clients          </div>                
        </div>

        <div className='grid grid-cols-2 gap-0 w-[100%]'>
        <div className='pt-24 pb-5 px-14 bg-sky-blue'>
          <p className='mb-9 text-[#140C40] text-2xl leading-8'>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering through.</p>
          <div className='mb-8'>

          <span>-Simon Gates,</span>
          <p className='text-gray'>Business Man</p>
          </div>
        </div> 
        <div className=''
        style={{ backgroundImage: 'url(/icons/people1.png)' }}
        >
        </div> 
        
        <div>
        <div
          className='h-[650px] flex flex-col justify-center items-center text-white'
          style={{ backgroundImage: 'url(/icons/gallery1.png.webp)' }}
        >
            <span className='uppercase text-2xl font-extrabold	mb-7'>Need to make an enquiry?</span>
            <p className='text-base px-20 text-center mb-4'>We collect and analyze information about your general usage of the website, products, services.</p>
            <a href="#">Learn More</a>
        </div>

        </div> 
        <div>
          <CardWithForm />
        </div>         
        </div>
      </div>
    </div>
  )
}

export default Testimonial