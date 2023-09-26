import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const GetInTouch = () => {
  return (
    <div className='flex items-center bg-white py-4'>
      <div className='md:flex hidden max-w-5xl mx-auto w-full flex-col items-center'>
        <div className='grid grid-cols-4 gap-0 w-[100%]'>
          <div className='col-span-3 w-[100%] justify-self-start'>
            <Card className="w-full h-full	flex flex-col">
              <CardHeader>
                <CardTitle className="text-blue">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col">
                      <Textarea placeholder="Enter Message" />
                    </div>
                    <div className='flex justify-between'>
                      <div className="flex flex-col space-y-1.5">
                        <Input id="name" placeholder="Name of your project" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Input id="email" placeholder="Write Your Email" />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Input id="subject" placeholder="Enter Subject" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button className="bg-gradient-to-r from-gradient-1 to-gradient-2">Send</Button>
              </CardFooter>
            </Card>
          </div>
          <div className='flex-col pl-4'>
            <div className='flex mb-4'>
              <HomeOutlinedIcon sx={{ fontSize: 40 }} color="disabled"/>
              <div className='ml-4'>
                <span className='text-base'>Newyork, USA</span>
                <p className='text-gray text-base	mb-3'>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className='flex mb-4'>
              <CallOutlinedIcon sx={{ fontSize: 40 }} color="disabled"/>
              <div className='ml-4'>
                <span className='text-base'>+1 253 565 2365</span>
                <p className='text-gray text-base	mb-3'>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className='flex mb-4'>
              <EmailOutlinedIcon sx={{ fontSize: 40 }} color="disabled"/>
              <div className='ml-4 '>
                <span className='text-base'>companyname@gmail.com</span>
                <p className='text-gray text-base	mb-3'>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch