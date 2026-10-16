"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from "aos"
import 'aos/dist/aos.css';

const EndToEnd = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div  className='endtoend-section '>
            <div className='max-w-screen-xl  px-4  mx-auto py-16'>
                <div className='content'>
                    <div className='heading-des  mx-auto'>
                        <h2 className='heading mb-8 text-[50px] font-normal text-center'>
                            <div   >End-to-end Software</div>
                            <div    >development</div>
                        </h2>
                        <div    className='description my-4 text-center'>
                            <div className='text-[14px] md:w-1/2 text-center mx-auto'>Experience end-to-end software development excellence. From ideation to deployment our seasoned  
                            team brings your vision to life, providing comprehensive solutions for your software development needs.
                            </div>
                           
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto'>
                        <div    className='box transition ease-in-out delay-130   hover:-translate-y-1 hover:scale-110   duration-300 text-center'>
                            <Image width={100} height={100} src="/Strategy.png" className='mx-auto' alt='' />
                            <h3 className='heading my-4'>Strategy</h3>
                            <p className='text-center text-[14px]'>Craft a winning technology strategy with our expertise. We help you define clear objectives chart a roadmap and execute your vision ensuring your business stays ahead in the digital landscape.</p>
                        </div>
                        <div    className='box transition ease-in-out delay-130   hover:-translate-y-1 hover:scale-110   duration-300 text-center'>
                            <Image width={100} height={100} src="/Design.png" className='mx-auto' alt='' />
                            <h3 className='heading my-4'>Design</h3>
                            <p className='text-center text-[14px]'>Elevate your digital presence with our design mastery. Our creative team transforms ideas into captivating visuals and user-friendly interfaces ensuring your brand and products shine in the digital world.</p>
                        </div>
                        <div    className='box transition ease-in-out delay-130   hover:-translate-y-1 hover:scale-110   duration-300 text-center'>
                            <Image width={100} height={100} src="/Engineering.png" className='mx-auto' alt='' />
                            <h3 className='heading my-4'>Engineering</h3>
                            <p className='text-center text-[14px]'>Engineer excellence with our technical prowess. Our skilled engineering team brings innovation to life, building robust solutions that drive performance and efficiency in your projects and products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EndToEnd
