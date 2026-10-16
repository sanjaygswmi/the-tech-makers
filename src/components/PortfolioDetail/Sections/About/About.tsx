import React from "react";
import Image from "next/image";


const About = () =>{

    return (
      <div className="max-w-screen-xl relative px-3 mx-auto">
        <div className="border  border-dashed desktop_text w-[170px] text-center border-black rounded-md bg-white px-4 py-2">About us *</div>
            <p className="text-center py-16 md:px-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <div className="bg-gradient-to-r relative p-10 md:p-20 from-[#FFB2A6] via-[#BA88B4] to-[#BA88B4]">
        <div className="border border-dashed about_us_text border-black w-[180px] text-center rounded-md bg-white px-4 py-2">Desktop version *</div>
          <Image
            src="/portfolio/desktop2.png"
            alt="Portfolio desktop preview"
            width={1000}
            height={600}
            className="mx-auto"
          />
          </div>
        </div>
    )
}


export default About
