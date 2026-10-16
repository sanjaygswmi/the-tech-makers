"use client"

import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
import Link from 'next/link'
import Image from 'next/image'
const IndustriesBody = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='industriesbody max-w-screen-xl px-3 mx-auto pt-16'>
            <div    className=' border-dashed rounded-md py-1 px-2 my-3 border text-center border-black w-[200px] mx-auto'>
                Industries we serve
            </div>
            <div className=' '>
                <div    className='text-[25px] font-semibold text-[40px] text-center'>Create the culture of <br />
                    <span    className='text-[#EC4918]'>development by</span> Industry.</div>
            </div>
            <div className='description md:w-1/2 mx-auto  text-center mt-8'>
                <div   >Explore industry-focused software for specific business workflows, customer journeys, integrations, and operational needs. Each page outlines common use cases and practical questions to help scope the right solution.</div>
            </div>
            <div className="container py-16 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-desktop-3 gap-8">
                    <Link href="/industries/automobile">
                        <div    className="bg-[#0a77f8] hvr-sweep-to-right text-white box p-4 mx-auto rounded-2xl">
                            <div className="text-lg  title">Automobile Industry Solutions</div>
                            <div className='industries_list_image'>
                                <Image width={500} height={500} src="/industries-retail.png" alt="Image 1" className="w-full" />
                            </div> 
                            <div className="text-sm number">01</div>
                        </div>
                    </Link>
                    <Link href="/industries/cloud-solutions">
                        <div    className="bg-[#0bb180] box    text-white hvr-sweep-to-left p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Cloud Solutions Excellence</div>
                            <div className='industries_list_image'>
                                 <Image width={500} height={500} src="/industries-education.png" alt="Image 2" className="w-full" />
                            </div>
                            <div className="text-sm number">02</div>
                        </div>
                    </Link>
                    <Link href="/industries/real-estate-solutions">
                        <div    className="bg-[#ff8845] box    text-white hvr-sweep-to-right p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Real Estate</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/industries-realEstate.png" alt="Image 3" className="w-full" />
                            </div>
                            <div className="text-sm number">03</div>
                        </div>
                    </Link>
                    <Link href="/industries/gaming-solutions-and-services">
                        <div    className="bg-[#7ccc12] box   text-white hvr-sweep-to-left p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Gaming Solutions and Services</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/industries-banking.png" alt="Image 1" className="w-full" />
                            </div> 
                            <div className="text-sm number">04</div>
                        </div>
                    </Link>
                    <Link href="/industries/tech-driven-consulting">
                        <div    className="bg-[#79a2ff] box  text-white hvr-sweep-to-right p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Tech-Driven Consulting</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/industries-healthcare.png" alt="Image 2" className="w-full" />
                            </div>
                            <div className="text-sm number">05</div>
                        </div>
                    </Link>
                    <Link href="/industries/education">
                        <div    className="bg-[#f89898] box  text-white hvr-sweep-to-left p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Education Solutions</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/industries-travel.png" alt="Image 3" className="w-full" />
                            </div>
                            <div className="text-sm number">06</div>
                        </div>
                    </Link>
                    <Link href="/industries/e-commerce-solutions">
                        <div    className="bg-[#fca311] box  text-white hvr-sweep-to-right p-4 mx-auto rounded-2xl">
                            <div className="text-lg  title">E-Commerce Solutions</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/industries-manufacturing.png" alt="Image 1" className="w-full" />
                            </div>
                            <div className="text-sm number">07</div>
                        </div>
                    </Link>
                    <Link href="/industries/healthcare-solutions">
                        <div    className="bg-[#64e9a5] box  text-white hvr-sweep-to-left p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Revolutionizing Healthcare Through Innovative Solutions</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/industries-media.png" alt="Image 2" className="w-full" />
                            </div>
                            <div className="text-sm number">08</div>
                        </div>
                    </Link>
                    <Link href="/industries/insurance-software-solutions">
                        <div    className="bg-[#ef3e5c] box  text-white hvr-sweep-to-right p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Insurance Software Solutions</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/industries-logistics.png" alt="Image 3" className="w-full" />
                            </div>
                            <div className="text-sm number">09</div>
                        </div>
                    </Link>
                    <Link href="/industries/manufacturing-solutions-and-services">
                        <div    className="bg-[#985df6] box  text-white hvr-sweep-to-left p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Manufacturing Solutions and Services</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/test2.png" alt="Image 1" className="w-full" />
                            </div>
                            <div className="text-sm number">10</div>
                        </div>
                    </Link>
                    <Link href="/industries/advertising-industry">
                        <div    className="bg-[#ec4918] box  text-white hvr-sweep-to-right p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Strategic Marketing & Advertising Solutions</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/industries-marketing.png" alt="Image 2" className="w-full" />
                            </div>
                            <div className="text-sm number">11</div>
                        </div>
                    </Link>
                    <Link href="/industries/media-entertainment">
                        <div    className="bg-[#58b9f8] box industries_box_list  text-white hvr-sweep-to-left p-4  mx-auto rounded-2xl">
                            <div className="text-lg  title">Elevating Media & Entertainment Experiences</div>
                            <div className='industries_list_image'>
                            <Image width={500} height={500} src="/test.png" alt="Image 3" className="w-full" />
                            </div>
                            <div className="text-sm number">12</div>
                        </div>
                    </Link>
                    <Link href="/industries/travel-hospitality">
                        <div className="bg-[#0b8c95] box text-white hvr-sweep-to-right p-4 mx-auto rounded-2xl">
                            <div className="text-lg title">Travel &amp; Hospitality Software</div>
                            <div className="industries_list_image">
                                <Image width={500} height={500} src="/industries-travel.png" alt="Travel and hospitality software" className="w-full" />
                            </div>
                            <div className="text-sm number">13</div>
                        </div>
                    </Link>
                    <Link href="/industries/logistics-supply-chain">
                        <div className="bg-[#344e80] box text-white hvr-sweep-to-left p-4 mx-auto rounded-2xl">
                            <div className="text-lg title">Logistics &amp; Supply Chain Software</div>
                            <div className="industries_list_image">
                                <Image width={500} height={500} src="/industries-logistics.png" alt="Logistics and shipping software" className="w-full" />
                            </div>
                            <div className="text-sm number">14</div>
                        </div>
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default IndustriesBody
