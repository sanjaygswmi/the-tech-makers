"use client"

import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';

import Image from 'next/image'
import Link from 'next/link'
import Tabs from './Tabs'

const WhatWeDo = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='what-we-do bg-[#f6f6f6] pt-[100px] md:pt-[150px]'>
      <div className='max-w-screen-xl px-4 content'>
        <div className='top-section'>
          <div className=' text-center relative md:text-left text-[38px] font-semibold'>
            <div className='border-dashed our_core_value text-[10px] border border-black bg-white w-[147px] text-center rounded-md px-2 py-1'>Our core value *</div>
            <div className='whatwedoarrow'><Image width={500} height={500} src="/whatwedoarrow.png" alt="" /></div>
            <h2 className='font-medium leading-8'>What we</h2>
            <div className='font-medium'>can do for you</div>
          </div>
          <div className='description mb-8 md:mb-0 text-[15px]'>
            Discover Our Expertise: Elevate your digital presence with our comprehensive range of services. From seamless UI/UX design and robust web/app development to strategic digital marketing, technical support, and rigorous quality assurance – we are your all-in-one solution for a thriving digital journey.</div>
        </div>
        <div   >
          <Tabs />
        </div>
      </div>
    </div>
  )
}
export default WhatWeDo
