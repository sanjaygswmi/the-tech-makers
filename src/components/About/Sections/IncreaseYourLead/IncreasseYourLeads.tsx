"use client"
import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
import Image from 'next/image'
import Link from 'next/link';
import MainPopup from '@/src/components/MainPopup';
const IncreasseYourLeads = () => {
       
    useEffect(() => {
            AOS.init();
          }, [])

    return (
        <div className='py-16'>
            <div className='border-b'>
                <div className='max-w-screen-xl mx-auto'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                        <div    className='text-center p-10 '>
                            <h2 className='md:text-[40px] text-[25px] text-center'>99%</h2>
                            <p className='text-red-500 text-center'>Successful years</p>
                        </div>
                        <div      className='text-center p-10  md:border-l'>
                            <h2 className='md:text-[40px] text-[25px] text-center' >100+</h2>
                            <p className='text-red-500 text-center'>Global Locations</p>
                        </div>
                        <div      className='text-center p-10  md:border-l'>
                            <h2 className='md:text-[40px] text-[25px]'>20K+</h2>
                            <p className='text-red-500'>Projects Delivered</p>
                        </div>
                        <div     className='text-center p-10  md:border-l'>
                            <h2 className='md:text-[40px] text-[25px]'>100+</h2>
                            <p className='text-red-500'>Repeat and Referral</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='md:flex max-w-screen-xl mx-auto px-4 pt-16'>
                <div className='heading-description md:w-4/5'>
                    <div     className='heading md:text-[40px] text-[25px] relative md:text-left text-center font-bold'>
                        <div>Increase <span className='text-[#F48B3A]'> your leads</span> with </div>
                        <div> <span className='text-[#EC4918]'>Expert Digital</span> Strategy</div>
                        <div>and <span className='text-[#58B9F8]'>Design</span></div>
                        <div className='whoweare border border-dashed px-2 py-1 text-[12px] border-black rounded-md bg-white'>Who we Are</div>
                        <div className='increasearrow'><Image width={500}
                                    height={500} src="/increase.png" alt="" /></div>
                    </div>

                    <div     className='description text-center md:text-left mt-5'>
                        The Tech Makers has some of the best technical experts who are well experienced in their respective provinces while holding the perfect skills that are necessitated at the professional front. Our team consists of geekiest aficionados, imaginative digital artists, and the most ingenious and interactive marketers and writers, who can provide advanced services, covering the full umbrella of online marketing. Additionally, our team has a strong hold over the latest web technology and it is our unvarying venture to come up with the best in terms of quality and commitment. The bestowed team of The Tech Makers makes it an extreme priority to keep constant watch over the numerous online accounts that we manage on popular social networks and on other platforms. We make sure that we are able to surpass the expectations of our clients and also to prove our proficiency in all the projects that we embark on. <br /><br />
                        In addition, based in India, we provide a prominence offshore and on-site services to software development companies and end-users on broad progressions of hardware and software platforms. These consist of Linux, windows, and Apache. Apart from this, we also apply progressive technologies like HTML and PHP to deliver un-equivalent solutions.
                    </div>
                </div>
                <div className='md:w-2/5 md:mt-40'>
                    <Image width={500}
                                    height={500} className='hidden md:block' src="/about-leads.png" alt="" />
                    <Image width={500}
                                    height={500} className='block md:hidden' src="/aboutman.png" alt="" />
                </div>
            </div>
            <div className='max-w-screen-xl py-16 mx-auto'>
            <div className='bg-[#FFEDC1] text-center p-3 md:p-16 mt-8 rounded-md'>
                <h2 className='text-[40px]  mb-[20px] font-bold'>Want to measure your <span className='text-[#E05A32]'>site Performance</span> for free?</h2>
                <MainPopup title="Get Started Now!"/>
            </div>
        </div>
        </div>
    )
}

export default IncreasseYourLeads
