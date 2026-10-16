import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Banner = () => {
    return (
        <div className='banner mt-16 max-w-screen-xl mx-auto md:flex justify-between'>
            <div className='md:w-1/2 my-auto text-center md:text-left'>
              <h1 className='md:text-[40px] text-[25px] text-center md:text-left font-bold mx-auto mb-8'>Get <span className='text-[#EC4918]'>Hire,</span><br/>
               Looking for <span className='text-[#407BFF]'>job</span> here</h1>
               <Link className='bg-[#F48B3A] text-white px-4 py-2 rounded mt-8' href="#" >Apply Now</Link>
           </div>
           <div className='md:w-1/2 mx-auto'>
            <Image width={500}
                                    height={500} src="/career/banner.png" alt="" />
           </div>
        </div>
    )
}
export default Banner
