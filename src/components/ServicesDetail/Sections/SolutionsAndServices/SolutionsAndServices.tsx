"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';

type SolutionService = {
    icon: string;
    heading: string;
    description: string;
};

type SolutionsAndServicesProps = {
    title?: string;
    services?: SolutionService[];
};

const SolutionsAndServices = ({ title, services = [] }: SolutionsAndServicesProps) => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='max-w-screen-xl py-16 mx-auto'>
            <div    className='text-center'>
                <button className='border border-dashed border-black mx-auto  px-3 py-1 mt-8 rounded'>Solutions and Services</button>
            </div>
            <div className="px-5">
                <h2 className="text-center text-2xl font-bold md:text-4xl">
                    What our {title || "service"} includes
                </h2>
                <p className="mx-auto mt-3 max-w-3xl text-center text-gray-600">
                    Explore the capabilities below to understand how this service can support your goals. We shape the final scope around your requirements, existing systems, and priorities.
                </p>
            </div>
            <div  className='grid mt-8 xs:grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3'>
                {services.map((item, index) => {
                        return (
                            <div  key={index} className="grit-item mx-auto h-full w-full max-w-sm rounded-md border p-5 text-center transition-shadow hover:shadow-lg">
                                <div>
                                    <Image
                                        width={20}
                                        height={20}
                                        className='mx-auto'
                                        style={{ width: '20px', height: '20px' }}
                                        src={item.icon}
                                        alt=""
                                    />
                                </div>
                                <h3 className='font-bold my-3'>{item.heading}</h3>
                                <p className='text-justify'>{item.description}</p>
                            </div>
                        ) 
                    })
                }

            </div>
        </div>
    )
}
export default SolutionsAndServices
