import React from "react";
import Image from "next/image";
const SoftwareInformation = () =>{

    return(
        <div className="bg-[#F6F6F6] py-16">
        <div className="max-w-screen-xl mx-auto">
            <h2 className="text-[25px] md:text-[40px] font-semibold text-center"> <span className="text-[#1B76FF]">ERP</span> - Software Information <br/>Sharing - <span className="text-[#E05A32]">Plug-ins</span></h2>


     <div className='grid gap-10 sm:grid-cols-2 py-8 md:grid-cols-3 lg:grid-cols-4'>
                <div className='text-center'>
                    <div><Image width={500}
                                    height={500} className='mx-auto w-20' src="/products/detail/1.png" alt="" /></div>
                    <p className='mt-2 font-bold'>Web Portal</p>
                </div>
                <div className='text-center'>
                    <div><Image width={500}
                                    height={500} className='mx-auto w-20' src="/products/detail/2.png" alt="" /></div>
                    <p className='mt-2 font-bold'>SMS</p>
                </div>
                <div className='text-center'>
                    <div><Image width={500}
                                    height={500} className='mx-auto w-20' src="/products/detail/3.png" alt="" /></div>
                    <p className='mt-2 font-bold'>GPS</p>
                </div>
                <div className='text-center'>
                    <div><Image width={500}
                                    height={500} className='mx-auto w-20' src="/products/detail/4.png" alt="" /></div>
                    <p className='mt-2 font-bold'>Smart Card</p>
                </div>
                <div className='text-center'>
                    <div><Image width={500}
                                    height={500} className='mx-auto w-20' src="/products/detail/5.png" alt="" /></div>
                    <p className='mt-2 font-bold'>Barcode</p>
                </div>
                <div className='text-center'>
                    <div><Image width={500}
                                    height={500} className='mx-auto w-20' src="/products/detail/6.png" alt="" /></div>
                    <p className='mt-2 font-bold'>Android App</p>
                </div>
                <div className='text-center'>
                    <div><Image width={500}
                                    height={500} className='mx-auto w-20' src="/products/detail/7.png" alt="" /></div>
                    <p className='mt-2 font-bold'>Online Payment</p>
                </div>
                <div className='text-center'>
                    <div><Image width={500}
                                    height={500} className='mx-auto w-20' src="/products/detail/8.png" alt="" /></div>
                    <p className='mt-2 font-bold'>Biometric/RFID</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SoftwareInformation