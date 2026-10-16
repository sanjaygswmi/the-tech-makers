"use client"

import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';
import Image from 'next/image';

import Link from 'next/link'
const TtmBusiness = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='py-16 max-w-screen-xl  px-3 mx-auto'>
                <h2 className='md:text-[40px] text-[25px] text-center md:text-left  mb-8 font-semibold'>Make Your Business Run Easier <br />
                    With The Tech Makers Business</h2>
                <div className="container  mx-auto">
                    <div    className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-10">

                        <Link href="/products/school-college-erp">
                            <div className="bg-[#0A77F8]  text-white hvr-sweep-to-left box w-full h-[350px] p-4 relative mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">School/College ERP</div>
                                <Image width={500}
                                    height={500} src="/products/school.png" alt="Image 1" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number  absolute top-2 left-5 font-bold">01</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#3095CC]   text-white hvr-sweep-to-right box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5 my-auto">Hospitality Management System</div>
                                <Image width={500}
                                    height={500}
                                    src="/products/hospital.png" alt="Image 2" className="w-[200px] mt-20 mx-auto my-10 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">02</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#FF8845]  text-white hvr-sweep-to-left box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">Real Estate Management System</div>
                                <Image width={500}
                                    height={500} src="/products/realEstate.png" alt="Image 3" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">03</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#7CCC12]  text-white hvr-sweep-to-right box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">E-commence System</div>
                                <Image width={500}
                                    height={500} src="/products/e-commerce.png" alt="Image 1" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">04</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#27DEBF]  text-white hvr-sweep-to-left box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">Billing Management System</div>
                                <Image width={500}
                                    height={500} src="/products/billing.png" alt="Image 2" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">05</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#F89898]  text-white hvr-sweep-to-right box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">Tours & Travels Website & App</div>
                                <Image width={500}
                                    height={500} src="/products/tours.png" alt="Image 3" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">06</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#FCA311]  text-white hvr-sweep-to-left box w-full  h-[350px] p-4 relative mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">Retail Management System</div>
                                <Image width={500}
                                    height={500} src="/products/retail.png" alt="Image 1" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">07</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#64E9A5]  text-white hvr-sweep-to-right box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">News Portals</div>
                                <Image width={500}
                                    height={500} src="/products/news.png" alt="Image 2" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">08</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#EF3E5C]  text-white hvr-sweep-to-left box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">Political Campaign Portal</div>
                                <Image width={500}
                                    height={500} src="/products/political.png" alt="Image 3" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">09</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#985DF6]  text-white hvr-sweep-to-right box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">Finance System</div>
                                <Image width={500}
                                    height={500} src="/products/finance.png" alt="Image 1" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">10</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#EC4918]  text-white hvr-sweep-to-left box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg    title absolute top-10 left-5">Store Locator Application</div>
                                <Image width={500}
                                    height={500} src="/products/store.png" alt="Image 2" className="w-[200px] mt-20 mx-auto my-10 m-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">11</div>
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="bg-[#58B9F8]  text-white hvr-sweep-to-right box w-full  h-[350px] p-4 relative  mx-auto rounded-2xl">
                                <div className="text-lg   title absolute top-10 left-5">Cloud Solutions</div>
                                <Image width={500}
                                    height={500} src="/products/cloud.png" alt="Image 3" className="w-[200px] mt-20 mx-auto my-10" />
                                <div className="text-sm absolute top-2 left-5 font-bold number">12</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TtmBusiness
