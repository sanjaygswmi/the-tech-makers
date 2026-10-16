import React from 'react'
import Link from 'next/link'
import MainPopup from '@/src/components/MainPopup'
const Wanttomeasure = () => {
    return (
        <div className='max-w-screen-xl py-16 mx-auto'>
            <div className='bg-[#FFEDC1] text-center p-3 md:p-16 mt-8 rounded-md'>
                <h2 className='text-[40px]  mb-[20px] font-bold'>Want to measure your <span className='text-[#E05A32]'>site Performance</span> for free?</h2>
                <MainPopup title="Get Started Now!"/>
            </div>
        </div>
    )
}
export default Wanttomeasure
