"use client"

import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';

import Slider from "./Slider"
import Image from 'next/image';
const Reviews = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='reviews-section py-16 '>
            <div className=' max-w-screen-xl mx-auto text-center md:text-left p-3 text-[25px] font-semibold md:text-[40px]'>
                <div className='flex flex-wrap justify-between items-end w-full'>
                    <div>
                        <h4 className=" text-red-600">Reviews</h4>
                        <h2>What say about us our great clients</h2>
                    </div>
                    <div className="my-4 flex gap-4">
                        <button className="custom-arrow custom-prev"><Image src="/prevslide.png" alt="" width="70" height="50"/></button>
                        <button className="custom-arrow custom-next"><Image src="/nextslide.png" alt="" width="70" height="50"/></button>
                    </div>
                </div>
            </div>
            <div >
                <Slider />

            </div>
        </div>
    )
}
export default Reviews
