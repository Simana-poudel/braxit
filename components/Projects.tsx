import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className='md:flex hidden min-h-[600px] items-end '
      style={{  backgroundImage: 'url(/icons/section1.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}
      >
        <div className='  max-w-5xl mx-auto w-full flex flex-col items-end '>
        <div className='w-[100%] grid grid-cols-3 gap-1'>
          
          <div className='hover:cursor-pointer'>
            <div className='bg-white pt-8 pr-9 pb-7 pl-5'>
              <span className='text-xl mb-5  font-light text-gray'>01</span>
              <h1 className='mb-5 font-medium	uppercase text-xl	text-blue'>Building yead</h1>
              <p className='text-gray text-base'>We collect and analyze information about your general usage of the website to the products services and courses.</p>
            </div>
            <div className='bg-gradient-to-r from-gradient-1 to-gradient-2 py-8 flex items-center justify-center '>
              <a className='text-white  ' href="#">View More</a>
            </div>
          </div>

          <div className=''>
            <div className='bg-white pt-8 pr-9 pb-7 pl-5'>
              <span className='text-xl mb-5  font-light text-gray'>02</span>
              <h1 className='mb-5 font-medium	uppercase text-xl	text-blue'>Building yead</h1>
              <p className='text-gray text-base'>We collect and analyze information about your general usage of the website to the products services and courses.</p>
            </div>
            <div className='bg-gradient-to-r from-gradient-1 to-gradient-2 py-8 flex items-center justify-center '>
              <a className='text-white  ' href="#">View More</a>
            </div>
          </div>

          <div className=''>
            <div className='bg-white pt-8 pr-9 pb-7 pl-5'>
              <span className='text-xl mb-5  font-light text-gray'>03</span>
              <h1 className='mb-5 font-medium	uppercase text-xl	text-blue'>Building yead</h1>
              <p className='text-gray text-base'>We collect and analyze information about your general usage of the website to the products services and courses.</p>
            </div>
            <div className='bg-gradient-to-r from-gradient-1 to-gradient-2 py-8 flex items-center justify-center '>
              <a className='text-white  ' href="#">View More</a>
            </div>
          </div>

      </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div className='md:hidden items-end flex-col text-center bg-bg-1 py-16'>
          <div className='justify-center px-4 py-1.5 inline-block bg-gradient-to-r from-gradient-1 to-gradient-2 text-lg	font-bold	mb-6 text-white'>
            our projects
          </div>
        <div className='flex flex-col items-end'>
        <div className='w-[100%] grid grid-cols-1 gap-1'>
          
          <div className=''>
            <div className='pt-8 pr-9 pb-7 pl-5'>
              <span className='text-xl mb-5  font-light text-gray'>01</span>
              <h1 className='mb-5 font-medium	uppercase text-xl	text-blue'>Building yead</h1>
              <p className='text-gray text-base'>We collect and analyze information about your general usage of the website to the products services and courses.</p>
            </div>
            <div className='bg-gradient-to-r from-gradient-1 to-gradient-2 py-8 flex items-center justify-center '>
              <a className='text-white  ' href="#">View More</a>
            </div>
          </div>

          <div className=''>
            <div className='pt-8 pr-9 pb-7 pl-5'>
              <span className='text-xl mb-5  font-light text-gray'>02</span>
              <h1 className='mb-5 font-medium	uppercase text-xl	text-blue'>Building yead</h1>
              <p className='text-gray text-base'>We collect and analyze information about your general usage of the website to the products services and courses.</p>
            </div>
            <div className='bg-gradient-to-r from-gradient-1 to-gradient-2 py-8 flex items-center justify-center '>
              <a className='text-white  ' href="#">View More</a>
            </div>
          </div>

          <div className=''>
            <div className='pt-8 pr-9 pb-7 pl-5'>
              <span className='text-xl mb-5  font-light text-gray'>03</span>
              <h1 className='mb-5 font-medium	uppercase text-xl	text-blue'>Building yead</h1>
              <p className='text-gray text-base'>We collect and analyze information about your general usage of the website to the products services and courses.</p>
            </div>
            <div className='bg-gradient-to-r from-gradient-1 to-gradient-2 py-8 flex items-center justify-center '>
              <a className='text-white  ' href="#">View More</a>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
