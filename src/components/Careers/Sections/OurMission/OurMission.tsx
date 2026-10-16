import React from "react";
import Image from "next/image";

const OurMission=()=>{
    return(
        <div className="bg-[#F6F6F6] relative py-10">
            <div className="careerarrow_text">Who we Are *</div>
            <div className="careerarrow"><Image width={500}
                                    height={500} src="/careerarrow.png" alt="" /></div>
            <div className="max-w-screen-xl mx-auto">
            <h2 className="md:text-[40px] font-bold text-[25px] px-3  font-semibold text-center">Our <span className="text-[#407BFF]">Mission</span> is to Help <br/>
                People do the <span className="text-[#00CA8E]">Impossible.</span></h2>
                <p className="mt-8  px-3 text-center">We take inspiration from what people want to accomplish in their lives and work to create products that <br/> empower in new ways. This is what drives our innovation forward. <br/> <br/>
                    Find your opportunity to do what cant be done at The Tech Makres.</p>
       
           </div>
        </div>
    )

}

export default OurMission