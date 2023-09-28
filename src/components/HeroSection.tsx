import React from 'react'
import { Button } from "@/components/ui/button"
import {GiPaintBucket} from "react-icons/gi"
import {BiSolidBuildingHouse} from "react-icons/bi"
import {LuLampFloor} from "react-icons/lu"
import {MdFoundation} from "react-icons/md"


const HeroSection = () => {
  return (
    <div className='flex h-screen'>

      {/* Left side Panel */}
      <div className='w-2/3 p-48 flex flex-col items-baseline bg-hero-image bg-cover'>
        <h2 className="scroll-m-20 pb-2 font-bold tracking-wide leading-8 transition-colors first:mt-0">
          <span className='text-6xl text-[#F5AA0E]'>Baba Fareed</span> <br/> <span className='text-3xl text-white'> Construction & Developers Company</span>
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-2 mb-6 text-gray-200 font-normal tracking-wide">
          Transforming Visions into Reality, Your Trusted Partner in Construction Excellence.
        </p>
        <Button>VIEW OUR WORK</Button>
      </div>

      {/* Right Side Panel  */}
      <div className='w-1/3 p-12 flex flex-col items-baseline bg-[#F5AA0E]'>
        <h2 className="scroll-m-20 pb-6 text-3xl font-extrabold tracking-normal transition-colors first:mt-16">
          Our Services
        </h2>

        {/* Design & Build */}

        <div className='flex ml-6 gap-8 mt-10'>
          <div className='text-6xl font-normal text-white'>
            <BiSolidBuildingHouse />
          </div>
          <div>
            <h4 className="scroll-m-20 text-lg font-bold tracking-wide">
              Design & Build
            </h4>
            <p className="leading-5 [&:not(:first-child)]:mt-3 text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ullam.
            </p>
          </div>
        </div>

        {/* Foundation Work */}

        <div className='flex ml-6 gap-8 mt-10'>
          <div className='text-6xl font-normal text-white'>
            <MdFoundation />
          </div>
          <div>
            <h4 className="scroll-m-20 text-lg font-bold tracking-wide">
              Foundation Work
            </h4>
            <p className="leading-5 [&:not(:first-child)]:mt-3 text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ullam.
            </p>
          </div>
        </div>

        {/* Renovation */}

        <div className='flex ml-6 gap-8 mt-10'>
          <div className='text-6xl font-normal text-white'>
            <GiPaintBucket />
          </div>
          <div>
            <h4 className="scroll-m-20 text-lg font-bold tracking-wide">
              Renovation
            </h4>
            <p className="leading-5 [&:not(:first-child)]:mt-3 text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ullam.
            </p>
          </div>
        </div>

        {/* Interior & Flooring */}

        <div className='flex ml-6 gap-8 mt-10'>
          <div className='text-6xl font-normal text-white'>
            <LuLampFloor />
          </div>
          <div>
            <h4 className="scroll-m-20 text-lg font-bold tracking-wide">
              Interior & Flooring
            </h4>
            <p className="leading-5 [&:not(:first-child)]:mt-3 text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ullam.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection