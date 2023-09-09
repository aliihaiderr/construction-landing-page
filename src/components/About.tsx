import React from 'react'
import { Button } from "@/components/ui/button"


const About = () => {
  return (
    <div className='flex h-screen'>

      {/* Left side Panel */}
      <div className='w-2/5 p-12 flex flex-col items-baseline bg-gray-800'>
        <div className='pt-12 pl-8 pr-8 flex flex-col'>
            <h2 className="scroll-m-20 pb-2 font-bold text-4xl w-3/4 text-gray-200 tracking-wide leading-10 transition-colors first:mt-0">
              We,ve Been Building For Over 10 Years.
            </h2>
            <div className='flex gap-8 mt-12'>
              <div>
                <p className="leading-7 [&:not(:first-child)]:mt-2 mb-6 text-gray-200 font-normal tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia optio sapiente iusto dolore harum! Repellat magni, optio eaque maxime recusandae voluptatem earum consectetur laboriosam quia vel tempora tempore velit?
                </p>
                <Button variant="outlineorng">ABOUT US</Button>
              </div>
            </div>
        </div>
      </div>

      {/* Right Side Panel  */}
      <div className='w-3/5 bg-gray-200'>
        <div className='pt-12 pl-24 pr-16 flex flex-col'>
          <h2 className="scroll-m-20 pb-2 font-bold text-4xl w-3/4 text-gray-800 tracking-wide leading-10 transition-colors first:mt-0">
            We Value Your Trust & Build Your Dream Since 2013.
          </h2>
          <div className='flex gap-8 mt-16'>
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-2 mb-6 text-gray-700 font-normal tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia optio sapiente iusto dolore harum! Repellat magni, optio eaque maxime recusandae voluptatem earum consectetur laboriosam quia vel tempora tempore velit?
              </p>
            </div>
            <div>
              <p className="leading-7 [&:not(:first-child)]:mt-2 mb-6 text-gray-700 font-normal tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia optio sapiente iusto dolore harum! Repellat magni, optio eaque maxime recusandae voluptatem earum consectetur laboriosam quia vel tempora tempore velit?
              </p>
              <Button variant="outline">LEARN MORE</Button>
            </div>
          </div>
        </div>
        <div className='flex mt-[163px]'>
            <div className='bg-[#F5AA0E] text-gray-800 p-5 flex-auto'>
              <h2 className="scroll-m-20 pb-2 font-bold text-3xl tracking-wide leading-10 transition-colors first:mt-0">Call For A Quote</h2>
              <h3 className='scroll-m-20 font-normal text-sm tracking-wide leading-6 transition-colors first:mt-0'>+92-323-6854-958</h3>
            </div>
            <div className='bg-gray-300 p-5 flex-auto'>
              <div className='flex justify-center'>
                <Button variant="outline">ONLINE FORM</Button>
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default About