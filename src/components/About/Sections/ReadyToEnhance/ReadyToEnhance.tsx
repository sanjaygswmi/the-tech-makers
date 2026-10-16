"use client"

import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
import Link from 'next/link'
import Image from 'next/image'
import MainPopup from '@/src/components/MainPopup';
const ReadyToEnhance = () => {

        useEffect(() => {
            AOS.init();
          }, [])
    return (
        <div    className='ready-to-enhance-section bg-[#F6F6F6] mb-10 py-10 '>
            <div className='max-w-screen-xl mx-auto px-4 '>
                <div className='text-[25px] font-bold md:text-[40px]'>
                    <div>So, Are You <span className='text-[#E05A32]'>Ready</span> To Enhance</div>
                    <div>Your <span className='text-[#1B76FF]'>Business</span></div>
                    <div>With Us?</div>
                </div>
                <div className='enhance-section relative'>
                     <div className='enchancarrow'>
                        <Image
                            src="/enchancarrow.png"
                            alt=""
                            width={200}
                            height={200}
                            style={{ width: 200, height: 200 }}
                        />
                    </div>
                    <div className='border our_team_text border-dashed border-black px-4 py-1 rounded-lg bg-white'>Our Team *</div>
                    <div className='md:flex justify-between space-x-5'>
                        <div className='first-image'>
                            <Image width={500}
                                    height={500} src="/about-enhance2.png" alt="" className="w-full h-auto" />
                        </div>
                        <div className='second-image hidden md:block'>
                            <Image width={500}
                                    height={500} src="/about-enhance1.png" alt="" className="w-full h-auto" />
                        </div>
                    </div>
                    <div className='absolute w-48 hidden md:block middle_img'><Image width={500}
                                    height={500} src="/middle.png" alt="" /></div>
                    <div className='md:flex mt-5 space-x-5'>
                        <div className='third-image mx-auto hidden md:block' ><Image width={500}
                                    height={500} src="/about-enhance3.png" alt="" /></div>
                        <div className='third-image mx-auto block md:hidden' ><Image width={500}
                                    height={500} src="/about-enhance3_mobile.png" alt="" /></div>
                        <div className='description text-center md:text-left'>Our chief aim is to educate clients in relation to the most recent technologies in website development, which facilitates them to promote their business model accordingly. With help from latest technologies, superior quality, and a wide-ranging service portfolio, we endeavor towards complete customer satisfaction.
                        
                        
                        <div className='my-5 relative md:my-10'>
                            <div className='get_started'>
                                <Image
                                    src="/get_started.png"
                                    alt=""
                                    width={160}
                                    height={160}
                                    style={{ width: 160, height: 160 }}
                                />
                            </div>
                                <MainPopup title="Get Started Now!"/></div>
                        </div>
                       
                    </div>
                </div>
 
            </div>
        </div>
    )
}

export default ReadyToEnhance
