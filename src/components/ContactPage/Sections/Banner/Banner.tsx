import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='md:text-[40px] text-[25px] py-16 px-3 container bg-gradient-to-r from-white via-[#f5dfef] to-white  max-w-screen-xl text-center font-bold mx-auto'>
      <h2 >GOOD THINGS <span className='star inline-block w-[38px]'><Image width={500}
                                    height={500} src="/star.png" alt="" /></span> HAPPEN</h2>
      <h2>WHEN YOU SAY</h2>
      <span className='text-blue-400'>“Hello”</span>
    </div>

  )
}
export default Banner
