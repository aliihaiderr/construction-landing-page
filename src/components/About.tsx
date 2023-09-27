import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'


const About = () => {
  return (
    <div className='flex h-screen'>

      {/* Left side Panel */}
      <div className='w-2/5 p-12 flex flex-col items-baseline bg-gray-800'>
        <div className='pt-12 pl-8 pr-8 flex flex-col'>
            <h2 className="scroll-m-20 pb-2 font-bold text-4xl text-gray-200 tracking-wide leading-10 transition-colors first:mt-0">
              We&#39;ve Been Building For Over 09 Years.
            </h2>
            <div className='flex gap-8 mt-12'>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-2 mb-6 text-gray-200 font-light text-sm tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia optio sapiente iusto dolore harum! Repellat magni, optio eaque maxime recusandae voluptatem earum consectetur laboriosam quia vel tempora tempore velit?
                </p>
                <Button variant="outlineorng">ABOUT US</Button>
              </div>
            </div>
        </div>
      </div>

      {/* Right Side Panel  */}
      <div className='w-3/5 bg-ceo-bg bg-cover'>
        {/* <div className='flex justify-center rounded-full'>
          
        </div> */}
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="w-72 h-72 rounded-full overflow-hidden">
            <Image src='/assets/ceo.png' width={320} height={320}  alt='ceo-image' className="object-cover w-full h-full"/>
          </div>
          <div className='mt-8'>
            <h2 className="scroll-m-20 font-semibold text-2xl text-white tracking-wider leading-8 transition-colors first:mt-0"><span className='text-[#F5AA0E]'>C.E.O </span>CH SHAHID ABBAS ARAIN</h2>
          </div>
        </div>
        <div className='flex mt-[163px]'>
            <div className='flex flex-col justify-center items-center bg-[#F5AA0E] text-gray-800 p-5 flex-auto'>
              <h2 className="scroll-m-20 pb-2 font-bold text-3xl tracking-wide leading-10 transition-colors first:mt-0">Call For a Quote</h2>
              <h3 className='scroll-m-20 font-semibold text-xl tracking-wide leading-6 transition-colors first:mt-0'>+92 323-6854958</h3>
            </div>
            <div className='flex justify-center items-center bg-gray-300 p-5 flex-auto'>
              <Button variant="outline">ABOUT US</Button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default About