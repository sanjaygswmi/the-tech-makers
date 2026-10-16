import React from 'react'
 
import Image from 'next/image'
import MainPopup from '@/src/components/MainPopup'
const Banner = () => {
    return (
        <div className='mt-28 max-w-screen-xl mx-auto '>
            <div className='md:flex justify-between mx-3'>
                <div className='text-side my-auto'>
                    <div className='md:text-[40px] text-[25px] my-auto heading font-bold'>
                        <h1>We create brands <br />
                         that get noticed</h1>
                    </div>
                    <div className='mt-10 mb-5'>
                         <MainPopup title="Get Started Now!"/>
                    </div>
                </div>
                <div className='image-container !sm:w-full md:w-1/2'>
                    <Image width={500} height={500} src="/about-banner.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Banner
