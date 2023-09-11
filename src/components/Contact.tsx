import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {BiSolidMap, BiSolidPhone,BiLogoYoutube, BiLogoFacebook} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'


const Contact = () => {
  return (
    <>
      <div className='flex h-screen'>

        {/* Left Side Panel  pt-12 pl-24 pr-16 */}
        <div className='w-2/3 bg-[#F5AA0E]'>
          <div className='flex flex-col justify-center p-24 space-y-8'>
            <h2 className="scroll-m-20 pb-2 font-bold text-3xl w-3/4 text-gray-800 tracking-wider leading-10 transition-colors first:mt-0">
              Get In Touch
            </h2>
            <div className='space-y-8'>
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Type your message here." />
              <div className='flex justify-end'>
                <Button variant="outlinewhite">SEND MESSAGE</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side Panel */}
        <div className='w-1/3 flex flex-col items-baseline'>
          <div className='flex w-full p-4 justify-center text-3xl bg-gray-800 text-white gap-5'>
            <span className='hover:text-red-600 cursor-pointer'><BiLogoYoutube /></span>
            <span className='hover:text-blue-600 cursor-pointer'><BiLogoFacebook /></span>
          </div>
          <div className='space-y-10 p-24 flex flex-col items-baseline'>
            <h2 className="scroll-m-20 pb-2 font-bold text-3xl w-3/4 text-gray-800 tracking-wider leading-10 transition-colors first:mt-0">
              Reach Us
            </h2>
            <div className='flex items-center font-medium tracking-wide gap-5 hover:text-blue-600 cursor-default'>
              <span><BiSolidMap /></span>
              <p>Main Market Phase II Ajwa City Sahiwal.</p>
            </div>
            <div className='flex items-center font-medium tracking-wide gap-5 hover:text-blue-600 cursor-default'>
              <BiSolidMap />
              <p>20 K.M. Paijan Stop, Raiwind Road Lahore.</p>
            </div>
            <div className='flex items-center font-medium tracking-wide gap-5 hover:text-green-600 cursor-default'>
              <BiSolidPhone />
              <p>+92-323-685-4958</p><br/>
            </div>
            <div className='flex items-center font-medium tracking-wide gap-5 hover:text-blue-600 cursor-default'>
              <MdEmail/>
              <p>babafaridconstructiondevel4007@gmail.com</p>
            </div>
            <div className='flex text-4xl gap-4'>
              <span className='hover:text-red-600 cursor-pointer'><BiLogoYoutube /></span>
              <span className='hover:text-blue-600 cursor-pointer'><BiLogoFacebook /></span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact