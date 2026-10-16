import React from "react";
import Image from "next/image";

const Banner =() =>{
    return (
        <div className="relative ">
            <div>
              <Image
                src="/portfolio/banner.png"
                alt="Portfolio banner"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute left-5 w-16 md:w-40 md:right-20 top-8">
              <Image
                src="/portfolio/logo.png"
                alt="Portfolio logo"
                width={160}
                height={160}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute right-5 text-[8px] md:text-[20px] top-8 md:right-20 border border-white px-2 py-1 rounded-full text-white">
              Website Casestudy
            </div>
            <div className="absolute md:w-1/2 top-16 md:top-1/4 left-1/4 right-1/4">
              <Image
                src="/portfolio/desktop1.png"
                alt="Desktop preview"
                width={900}
                height={520}
                className="w-full h-auto"
              />
            </div>
            <div className="md:absolute mx-auto top-1/3 left-5 w-40">
              <Image
                src="/portfolio/mobile1.png"
                alt="Mobile preview one"
                width={240}
                height={480}
                className="w-full h-auto"
              />
            </div>
            <div className="md:absolute mx-auto top-1/2 w-20 right-20">
              <Image
                src="/portfolio/mobile2.png"
                alt="Mobile preview two"
                width={160}
                height={360}
                className="w-full h-auto"
              />
            </div>
        </div>
    )
}

export default Banner
