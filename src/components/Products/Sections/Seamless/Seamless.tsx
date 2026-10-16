"use client"
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

import AOS from "aos"
import 'aos/dist/aos.css';
 import Image from 'next/image';

// Usage of the dynamically imported components and modules
// e.g., <Image />


const Seamless = () => {

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div    className='max-w-screen-xl px-3 py-10 mx-auto'>
            <h1 className='font-semibold mb-10 md:text-[40px] text-[25px] text-center'>Seamless Integrations With</h1>
            <div className='grid xs:grid-cols-2 gap-10 sm:grid-cols-3 justify-center md:grid-cols-3 lg:grid-cols-4'> 
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/shipstation.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/accessibe.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/recharge.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/rebuy.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/okendo.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/postscript.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/loyal.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/gorgias.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/searchspring.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/klaviyo.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/bold.png" alt="" />
                </div>
                <div className='w-40'>
                    <Image width={500}
                                    height={500} src="/products/logo/yopto.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Seamless
