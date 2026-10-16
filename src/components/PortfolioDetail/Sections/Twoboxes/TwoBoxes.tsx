import React from 'react'

const TwoBoxes = () => {
    return (
        <div className='grid max-w-screen-xl md:mx-auto my-10 grid-cols-1 mx-10 gap-10 md:grid-cols-2 '>
            <div className=' bg-gradient-to-r relative text-white from-[#FF3B3F]   to-[#BA88B4]  h-[350px]   p-5 rounded-md'>
                <p>USUAL</p>
                <p className='uppercase'>light, regular, bold </p>

                <h2 className='uppercase w-[300px] text-[30px] font-bold mt-20'>Building the Data Centers of the Future</h2>
            </div>
            <div className='bg-[#FFED28]  p-5 rounded-md h-[350px] '>

                <h1 className='md:text-[100px] font-bold text-center' >Aa</h1>
                <p className='uppercase text-[20px] font-bold w-[200px] mx-auto  '>abcdefghijklm <br/> nopqrstuvw <br/> xyz</p>
            </div>
        </div>
    )
}


export default TwoBoxes