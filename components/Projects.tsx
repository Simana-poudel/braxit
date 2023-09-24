import React from 'react'

const Projects = () => {
  return (
    <div className='flex min-h-screen items-end '
    style={{ backgroundImage: 'url(/icons/section1.png)' }}
    >
      <div className='  max-w-5xl mx-auto w-full flex flex-col items-end'>
        <div className='w-[100%] grid grid-cols-3 gap-1'>
          
          <div className=''>
            <div className='bg-white pt-8 pr-9 pb-7 pl-5'>
              <span className='text-xl mb-5  font-light text-gray'>01</span>
              <h1 className='mb-5 font-medium	uppercase text-xl	text-blue'>Building yead</h1>
              <p className='text-gray text-base'>We collect and analyze information about your general usage of the website to the products services and courses.</p>
            </div>
            <div className='bg-green py-8 flex items-center justify-center '>
              <a className='text-white  ' href="#">View More</a>
            </div>
          </div>

        <div className=" relative group post">
          <div className='absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <div className="bg-white pt-8 pr-9 pb-7 pl-5 ">
              <span className="text-xl mb-5 font-light text-gray">01</span>
              <h1 className="mb-5 font-medium uppercase text-xl text-blue">Building yead</h1>
              <p className="text-gray text-base ">We collect and analyze information about your general usage of the website to the products services and courses.</p>
            </div>
            <div className="bg-green py-8 flex items-center justify-center "> 
              <a className="text-white" href="#">View More</a>
            </div>
          </div>
        </div>
        <div className=" relative group post">
          <div className='absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <div className="bg-white pt-8 pr-9 pb-7 pl-5 ">
              <span className="text-xl mb-5 font-light text-gray">01</span>
              <h1 className="mb-5 font-medium uppercase text-xl text-blue">Building yead</h1>
              <p className="text-gray text-base ">We collect and analyze information about your general usage of the website to the products services and courses.</p>
            </div>
            <div className="bg-green py-8 flex items-center justify-center "> 
              <a className="text-white" href="#">View More</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Projects
