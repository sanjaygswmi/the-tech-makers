import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MainPopup from '@/src/components/MainPopup'

interface ServicesBannerProps {
    title: string;
    description: string;
    banner_image: string;
}

const Banner = ({ title, description, banner_image }: ServicesBannerProps) => {
    
    return (
        <div className='max-w-screen-xl mt-16 py-16  mx-auto'>
            <div className='md:flex space-between'>
                <div className='md:w-1/2 mt-16 service-text-area'>
                    <h1 className='text-[38px] font-bold'>{title}</h1>
                    <p className='mt-8'>{ description }</p>
                    <div className='mt-8'>
                      <MainPopup title="Get Started Now!"/>
                    </div>
                </div>
                <div className='md:w-1/2 service-image'>
                    <Image
                        width={500}
                        height={500}
                        className='mx-auto w-full h-auto'
                        src={banner_image}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
