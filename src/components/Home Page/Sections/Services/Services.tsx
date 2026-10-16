"use client"

import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
import Image from 'next/image';
import Tabs from './Tabs'

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div  className='bg-[#f6f6f6]'>
      <div  className='services-section pt-28 px-0 md:px-4 max-w-screen-xl  mx-auto '>
        <div className='heading-description justify-between text-left'>
          <div className=' text-[25px] md:text-left  relative font-semibold md:text-[40px] mb-5 font-semibold text-center'>
            <div className='border border-dashed text-[14px] our_service border-black absolute py-2 px-6 bg-white text-center w-38 rounded-md'>Our Services *</div>
            <h2 className=' text-center md:text-left text-[30px] md:text-[50px] font-normal '>What <span className='text-orange-500'>Software</span> <br />
            development service <br/> <Image width={500}
                                    height={500} className='servicearrow1' src="/servicearrow1.png" alt="" />
              do we <span className='text-[#61b9e2]'>offer</span>? <Image width={500}
                                    height={500} className='servicearrow2' src="/servicearrow2.png" alt="" />
              <div    className='border border-dashed text-[14px] our_technologies border-black absolute py-2 px-4 bg-white text-center w-38 rounded-md'>Our Technologies *</div>
            </h2></div>
     
         
          <div    className='description my-auto text-[16px]'>
            Explore our comprehensive software development services tailored to your needs. From web and mobile app development to custom software solutions, we deliver excellence in every line of code.
          </div>
        </div>
        <div   >
         <Tabs />
        </div>
       
      </div>
    </div>
  )
}

export default Services

