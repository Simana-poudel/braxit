import ContactImage from '@/components/ContactImage'
import Copyright from '@/components/Copyright'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import Map from '@/components/Map'
import React from 'react'

const Contact = () => {
  return (
    <div className=''>
      <ContactImage />
      <GetInTouch />
      <div className='mx-[10%] 2xl:mb-44 mb-0'>
      <Map />
      </div>
      <Footer />
      <Copyright />
    </div>
  )
}

export default Contact