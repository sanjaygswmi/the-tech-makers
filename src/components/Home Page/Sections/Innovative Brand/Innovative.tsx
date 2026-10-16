"use client"

import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
import Image from 'next/image';
const Innovative = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='innovative-section bg-[#fff7e4]'>
            <div className='max-w-screen-xl  px-4  py-16  mx-auto'>
                <h3  className=' text-[25px] font-semibold md:text-[40px]  text-center'>
                    <div>Trusted by the Worlds Most</div>
                    <div>Innovative Brands</div>
                </h3>
                <div className='flex flex-wrap space-x-2 mt-10 justify-center md:justify-between'>
                    <div    className='w-[150px] '>
                        <Image width={500} height={500} src="/brand/airtel.png" alt="" />
                    </div>
                    <div    className='w-[150px] mx-auto'>
                        <Image width={500} height={500} src="/brand/boat.png" alt="" />
                    </div>
                    <div    className='w-[150px] mx-auto'>
                        <Image width={500} height={500} src="/brand/cocacola.png" alt="" />
                    </div>
                    <div    className='w-[150px] mx-auto'>
                        <Image width={500} height={500} src="/brand/hyundai.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-wrap space-x-2 mt-10 justify-center md:justify-between'>
                    <div    className='w-[150px] '>
                        <Image width={500} height={500} src="/brand/fortis.png" alt="" />
                    </div>
                    <div    className='w-[150px] mx-auto'>
                        <Image width={500} height={500} src="/brand/Knews.png" alt="" />
                    </div>
                    <div    className='w-[150px] mx-auto'>
                        <Image width={500} height={500} src="/brand/L&T.png" alt="" />
                    </div>
                    <div    className='w-[150px] mx-auto'>
                        <Image width={500} height={500} src="/brand/MVMI.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-wrap space-x-2 mt-10  justify-center md:justify-between'>
                <div className='w-[150px]  '>
                        <Image width={500} height={500} src="/brand/newsmobile.png" alt="" />
                    </div>
                    <div    className='w-[150px] mx-auto'>
                        <Image width={500} height={500} src="/brand/wework.png" alt="" />
                    </div>
                    <div    className='w-[150px] mx-auto'>
                        <Image width={500} height={500} src="/brand/intargos.png" alt="" />
                    </div>
                    <div    className='w-[150px] mx-auto'>
                        <Image width={500} height={500} className='w-28' src="/brand/balmuda.png" alt="" />
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Innovative
