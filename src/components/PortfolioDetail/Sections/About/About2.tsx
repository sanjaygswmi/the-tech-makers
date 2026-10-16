import React from "react";
import Image from "next/image";

const About2 = () => {
    return (
        <div className="relative">
            {/* <div>
                <img src="/portfolio/about_desktop.png" alt="" />
            </div> */}
            <div className="px-3 mx-auto  take_your_digital py-16">
            <div className="bg-gradient-to-r w-1/2 p-10 md:p-20 take_your mx-auto from-[#FFB2A6] via-[#BA88B4] to-[#BA88B4]">
             <div className=" ">
               <Image
                 src="/take_your.png"
                 alt="Take your digital project"
                 width={600}
                 height={400}
                 className="mx-auto"
               />
             </div>
            </div>
            </div>
        </div>
    )
} 
export default About2
