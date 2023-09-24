import React from 'react'
import { Button } from './ui/button'

const Offer = () => {
  return (
    <div className='bg-[#f7f7fd] py-14'>
      <div className=' max-w-5xl mx-auto w-full flex items-center'>
        
        <div className='flex grid grid-cols-3 flex-col items-center text-left mb-8'>
          <div className='col-span-2'>

          <div className='py-1.5 text-4xl font-bold	mb-5 text-blue'>
            Up to 30% off
          </div>
          <p className='text-gray text-base'>We collect and analyze information about your general usage of the website, products, services, and courses.</p>
          </div>
        <div className='flex item-center justify-center'>
        <Button className=' z-1 relative group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30   rounded-none	px-8 bg-gradient-to-r from-green to-white-200 hover:from-white hover:to-green' variant="secondary">
              Learn More{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
            </Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Offer