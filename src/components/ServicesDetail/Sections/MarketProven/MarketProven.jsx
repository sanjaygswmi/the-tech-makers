"use client"

import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';


import Image from 'next/image'
const MarketProven = ({ props }) => {
      
    return (
        <div className='bg-[#F6F6F6]'>
            <div className='max-w-screen-xl relative py-16 mx-auto'>
                <h2 className=' text-[25px] text-center md:text-[40px] font-bold'>Market-Proven Web <br /> <span className='text-[#E05A32]'>Technology </span>Stack We <span className='text-[#1B76FF]'>Love</span></h2>
                <div className='market_arrow'> <Image width={500} height={500} src="/marketarrow.png" alt="" /></div>
                <div className='border market_Technologies border-dashed border-black test-[10px] px-4 py-1 rounded-md'>Technologies</div>
                <div className='grid   xs:grid-cols-1 md:mt-20  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {/* {props?.marketproven?.map((item, key) => (
                        <div key={key} className='relative market_proven_image border '>
                            <Image width={500} height={500} className='mx-auto my-auto' src={item} alt="" />
                        </div>
                    ))} */}
                </div>
            </div>
        </div>

    )
}
export default MarketProven
