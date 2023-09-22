import Image from 'next/image'
import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='flex items-center bg-sky-blue py-24'>
      <div className=' max-w-5xl mx-auto w-full flex flex-col items-center'>
      <div className='grid grid-cols-4 gap-4 w-[100%]'>
        <div className=''>
          <h1 className='text-blue text-xl mb-7 font-bold'>Company</h1>
          <div className='font-light text-gray'>
            <a className='block mb-3' href="#">Why choose us</a>
            <a className='block mb-3' href="#">Review</a>
            <a className='block mb-3' href="#">Customers</a>
            <a className='block mb-3' href="#">Blog</a>
            <a className='block mb-3' href="#">Carrier</a>
          </div>
        </div>
        <div className=''>
          <h1 className='text-blue text-xl mb-7 font-bold'>Production</h1>
          <div className='font-light text-gray'>
            <a className='block mb-3' href="#">Technology</a>
            <a className='block mb-3' href="#">Products</a>
            <a className='block mb-3' href="#">Quality</a>
            <a className='block mb-3' href="#">Sales geography</a>
          </div>
        </div>
        <div className=''>
          <h1 className='text-blue text-xl mb-7 font-bold'>Contact Us</h1>
          <div className='font-light text-gray'>
            <p className='block mb-3'>Address: 726/B green</p>
            <p className='block mb-6'>avenue Kaski, Pokhara</p>
            <p className='block mb-4'>Phone: +23 333 4444 555</p>
            <p className='block mb-3'>Email: company@gmail.com</p>
          </div>
        </div>
        <div className=''>
          <h1 className='text-blue text-xl mb-7 font-bold'>Newsletter</h1>
          <div className='font-light text-gray'>
            <p className='block mb-6'>Subscribe our newsletter to get updates about our services</p>
            <form>
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Your Email" />
              <Button className="bg-orange">Subscribe</Button>

            </div>
            </form>
          </div>
        </div>

         

       

        <div>
        </div>         
        </div>
      </div>
    </div>
  )
}

export default Footer