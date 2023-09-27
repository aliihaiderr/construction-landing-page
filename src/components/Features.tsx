import React from 'react'
import { Button } from "@/components/ui/button"


const Features = () => {
  return (
    <div className='flex h-screen'>

      {/* Left side Panel */}
      <div className='w-2/5 p-12 flex flex-col items-baseline bg-detail-image bg-cover'></div>

      {/* Right Side Panel  */}
      <div className='w-3/5'>
        <div className='pt-12 pl-24 pr-16 flex flex-col'>
          <h2 className="scroll-m-20 pb-2 font-bold text-4xl w-3/4 text-gray-800 tracking-wide leading-10 transition-colors first:mt-0">
            We Value Your Trust & Build Your Dream Since 2014.
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
            <div className='flex flex-col justify-center items-center bg-[#F5AA0E] text-gray-800 p-5 flex-auto'>
              <h2 className="scroll-m-20 pb-2 font-bold text-3xl tracking-wide leading-10 transition-colors first:mt-0">09</h2>
              <h3 className='scroll-m-20 font-medium text-xs tracking-wide leading-6 transition-colors first:mt-0'>YEARS ESTABLISHED</h3>
            </div>
            <div className='flex flex-col justify-center items-center bg-black text-gray-300 p-5 flex-auto'>
              <h2 className="scroll-m-20 pb-2 font-bold text-3xl tracking-wider leading-10 transition-colors first:mt-0">175+</h2>
              <h3 className='scroll-m-20 font-font-medium text-xs tracking-wider leading-6 transition-colors first:mt-0'>PROJECTS</h3>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Features