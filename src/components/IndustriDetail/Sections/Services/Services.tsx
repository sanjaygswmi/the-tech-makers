"use client"
import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
import Link from 'next/link'
import Image from 'next/image'

type ServiceKey = 
    | 'service1'
    | 'service2'
    | 'service3'
    | 'service4'
    | 'service5'
    | 'service6'
    | 'service7'
    | 'service8'
    | 'service9';

type ServicesProps = {
    services: Record<ServiceKey, string>;
};

const Services = ({ services }: ServicesProps) => {
        useEffect(() => {
            AOS.init();
          }, [])
    return (
        <div className='max-w-screen-xl mx-auto py-16'>
            <h2    className=' text-center font-bold text-[25px] my-5 md:text-[40px]'>Software capabilities to explore</h2>
            <div className='grid gap-10 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
                <div     className='text-center'>
                    <div><Image width={500} height={500} className='mx-auto w-20' src="/IndustryDetailPage/service1.png" alt="" /></div>
                    <p className='mt-2 font-bold'>{services.service1}</p>
                </div>
                <div    className='text-center'>
                    <div><Image width={500} height={500} className='mx-auto w-20' src="/IndustryDetailPage/service2.png" alt="" /></div>
                    <p className='mt-2 font-bold'>{services.service2}</p>
                </div>
                <div    className='text-center'>
                    <div><Image width={500} height={500} className='mx-auto w-20' src="/IndustryDetailPage/service3.png" alt="" /></div>
                    <p className='mt-2 font-bold'>{services.service3}</p>
                </div>
                <div    className='text-center'>
                    <div><Image width={500} height={500} className='mx-auto w-20' src="/IndustryDetailPage/service4.png" alt="" /></div>
                    <p className='mt-2 font-bold'>{services.service4}</p>
                </div>
                <div    className='text-center'>
                    <div><Image width={500} height={500} className='mx-auto w-20' src="/IndustryDetailPage/service5.png" alt="" /></div>
                    <p className='mt-2 font-bold'>{services.service5}</p>
                </div>
                <div    className='text-center'>
                    <div><Image width={500} height={500} className='mx-auto w-20' src="/IndustryDetailPage/service6.png" alt="" /></div>
                    <p className='mt-2 font-bold'>{services.service6}</p>
                </div>
                <div    className='text-center'>
                    <div><Image width={500} height={500} className='mx-auto w-20' src="/IndustryDetailPage/service7.png" alt="" /></div>
                    <p className='mt-2 font-bold'>{services.service7}</p>
                </div>
                <div    className='text-center'>
                    <div><Image width={500} height={500} className='mx-auto w-20' src="/IndustryDetailPage/service8.png" alt="" /></div>
                    <p className='mt-2 font-bold'>{services.service8}</p>
                </div>
                <div    className='text-center'>
                    <div><Image width={500} height={500} className='mx-auto w-20' src="/IndustryDetailPage/service9.png" alt="" /></div>
                    <p className='mt-2 font-bold'>{services.service9}</p>
                </div>
            </div>
            <div    className='bg-[#FFEDC1] text-center p-16 mt-8 rounded'>
                <h2 className='md:text-[40px] text-[25px]  mb-[20px] font-bold'>Have a project in mind?</h2>
                <Link className="bg-[#F48B3A] px-4  py-2 mx-auto rounded text-white" href="/contact">Discuss your project</Link>
            </div>
        </div>
    )
}
export default Services
