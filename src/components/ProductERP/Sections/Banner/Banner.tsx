import React from "react";
import Image from "next/image";
const Banner =()=>{
    return(
        <div className="max-w-screen-xl mt-16 md:flex mx-auto">
            <div className="text-center mt-[100px]  md:text-left md:w-1/2 ">
                <div className="border border-dashed py-2 px-4 mx-auto md:mx-0 rounded border-black text-[14px] text-center w-[250px] my-3">School/College ERP Software *</div>
            <h1 className=" text-[25px] md:text-[48px] font-bold">
            <span className="text-[#1B76FF]">ERP</span> for High <br/>
            <span className="text-[#E05A32]">Growth</span> Potential <br/>
            Company
            </h1>
            </div>
            <div className="md:w-1/2">
                <Image width={500} height={500} className="mx-auto" src="/products/detail/bannerdetail.png" alt="" />
            </div>
        </div>
    )
}

export default Banner