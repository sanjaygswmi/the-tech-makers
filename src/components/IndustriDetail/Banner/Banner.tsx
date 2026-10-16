"use client"
import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
import Image from 'next/image'
interface IndustryBannerProps {
    heading: string;
    introduction: string;
}

const Banner = ({ heading, introduction }: IndustryBannerProps) => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (

      <div>
      <div className='mt-20 max-w-screen-xl mx-auto px-3'>
      <div className='md:flex justify-between'>
        <div className='md:w-1/2 my-auto text-center md:text-left'>
          {/* <button className='border-dashed border-black border rounded p-2 my-3 md:my-0'>non-profit & education *</button> */}
          <h1 className='md:text-[40px] text-[25px] my-3 md:my-0 font-bold'>{heading}</h1>
        </div>
        <div className='md:w-1/2'>
          <Image width={500} height={500} src="/IndustryDetailPage/banner.png" alt="" />
        </div>
      </div>
      </div>
      <div className='text-center py-16 bg-[#F6F6F6]'>
        <p    className='max-w-screen-xl mx-auto px-3'>
          {introduction}
        </p>
      </div>
      </div>
  )
}

export default Banner
