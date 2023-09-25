import React from 'react'
import { Button } from './ui/button'

const Copyright = () => {
  return (
    <div className='bg-blue py-4 px-6'>
      <div className=' max-w-5xl text-white mx-auto justify-between w-full flex-col md:flex items-center'>
        <p>Copyright ©2020 All rights reserved</p>
        <div className='mt-4'>
        <div className="flex justify-start md:justify-end space-x-2">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/youtube.png"  // Replace with the actual path to your YouTube icon
            alt="YouTube"
            className="w-5 h-5 hover:opacity-75 transition-opacity"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/facebook.png"  // Replace with the actual path to your Facebook icon
            alt="Facebook"
            className="w-5 h-5 hover:opacity-75 transition-opacity"
          />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/linkedin.png"  // Replace with the actual path to your LinkedIn icon
            alt="LinkedIn"
            className="w-5 h-5 hover:opacity-75 transition-opacity"
          />
        </a>
      </div>
        </div>
        <p></p>
      </div>
    </div>
  )
}

export default Copyright