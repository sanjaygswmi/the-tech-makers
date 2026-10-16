"use client"

import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
const Innovative = () => {
        useEffect(() => {
            AOS.init();
          }, [])
    return (
        <div className='innovative-section bg-[#fff7e4]'>
            <div className='max-w-screen-xl  px-4  py-16  mx-auto'>
                <div    className=' text-[25px] md:text-[40px] font-bold text-center'>
                    <div>Trusted by the Worlds Most</div>
                    <div>Innovative Brands</div>
                </div>
            
                <div className='flex flex-wrap my-5 space-x-8 space-y-5   justify-around'>
                    <div     className='flex box space-x-3 mt-auto '>
                        <span className='my-auto border-black px-6 py-3 border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                       
                    </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                      
                    </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
           
                    </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
               
                    </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                     
                    </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                       </div> 

                </div>
                <div className='flex flex-wrap my-5 space-x-8 space-y-5 justify-around'>
                    <div    className='flex box space-x-3 mt-auto'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                        </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                      </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                       </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                         </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                       </div>
                </div>
                <div className='flex flex-wrap my-5 space-x-8 space-y-5 justify-around'>
                    <div    className='flex box space-x-3 mt-auto'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                       </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                       </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                      </div>
                    <div    className='flex box space-x-3'>
                        <span className='my-auto border border-dashed rounded-md bg-white border-black px-6 py-3'>e-Commerce</span>
                       </div>
                </div>

            </div>

            </div>
        
    )
}

export default Innovative
