import React from 'react'
import Image from 'next/image'
const Content = () => {
    return (
        <div className='bg-[#F6F6F6] py-8'>
            <div className='max-w-screen-xl relative location_section mb-16 px-3 mx-auto'>
                <h1 className='md:text-[40px] font-semibold text-[25px] text-center md:text-left my-3'>Where to find us?</h1>
                <div className='border location_text border-dashed rounded-md border-black px-2 w-36 text-center mb-3 mx-auto py-1'>Locations *</div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>

                    <div className='locations p-3 py-10 px-10 rounded rounded-md bg-[#FF9559]'>
                        <div className='text-center'>
                            <div>
                                <h2 className='font-bold mb-2'>USA</h2>
                                <p>
                                 
                                 4955 Usaa Blvd UNIT 48, <br />
                                 San Antonio,<br />
                                 TX 78240
                                </p>
                            </div>
                            <div className='mt-5'>
                                <Image width={100}
                                    height={100} className='mx-auto' src="/location2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='locations p-3 py-10 px-10 rounded rounded-md bg-[#499DFF]'>
                        <div className='text-center'>
                            <div>
                                <h2 className='font-bold mb-2'>Noida</h2>
                                <p>C-276,Block C,Sector 63 <br />
                                    Noida,Pincode-201301 <br />
                                    Uttar-Pradesh India</p>
                            </div>
                            <div className='mt-5'>
                                <Image width={100}
                                    height={100} className='mx-auto' src="/location.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='locations p-3 py-10 px-10 rounded rounded-md bg-[#00CA8E]'>
                        <div className='text-center'>
                            <div>
                                <h2 className='font-bold mb-2'>Lucknow</h2>
                                <p>4th Floor, A-8,  Talkatora Rd,  <br />

                                    Industrial Area, Lucknow,<br />
                                    Uttar Pradesh 226017
                                </p>
                            </div>
                            <div className='mt-5'>
                                <Image width={100}
                                    height={100} className='mx-auto' src="/location3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
