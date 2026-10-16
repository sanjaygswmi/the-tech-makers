import React from "react";
import Image from "next/image";

const LastSection = () => {
  return (
    <div className="last_section py-10 relative">
      
        <div className="last_secont_img">
          <Image
            src="/portfolio/desktop3.png"
            alt="Desktop showcase"
            className=""
            width={1000}
            height={600}
          />
        </div>
        <div className="absolute_mobile_img bottom-1/3 right-32">
          <div className="w-[188px] mb-10">
            <Image
              src="/lastmobileone.png"
              alt="Mobile showcase one"
              width={188}
              height={350}
              className="w-full h-auto"
            />
          </div>
          <div className="w-[188px]">
            <Image
              src="/lastmobiletwo.png"
              alt="Mobile showcase two"
              width={188}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>
       
      <div className="grid md:grid-cols-4 py-10 gap-2 text-[12px] lg:grid-cols-5 max-w-screen-xl mx-auto sm:grid-cols-3 xs:grid-cols-2">
        <div className="bg-[#FF3B3F] mx-auto w-[200px] h-[180px] relative rounded-lg p-5 text-white">
          <p className="absolute  top-2 left-5">Radical Red</p>
          <p className="my-10">HEX : #ff3b3f</p>
          <p className="my-10">CSS : rgba(255, 59, 63, 1)</p>
        </div>
        <div className="bg-[#272727]  mx-auto w-[200px] h-[180px] relative rounded-lg p-5 text-white">
          <p className="absolute top-2 left-5">Radical Red</p>
          <p className="my-10">HEX : #ff3b3f</p>
          <p className="my-10">CSS : rgba(255, 59, 63, 1)</p>
        </div>
        <div className="bg-[#FFED28] text-black  mx-auto w-[200px] h-[180px] relative rounded-lg p-5 text-white">
          <p className="absolute top-2 left-5">Radical Red</p>
          <p className="my-10">HEX : #ff3b3f</p>
          <p className="my-10">CSS : rgba(255, 59, 63, 1)</p>
        </div>
        <div className="bg-[#4C3B92]  mx-auto w-[200px] h-[180px] relative rounded-lg p-5 text-white">
          <p className="absolute top-2 left-5">Radical Red</p>
          <p className="my-10">HEX : #ff3b3f</p>
          <p className="my-10">CSS : rgba(255, 59, 63, 1)</p>
        </div>
        <div className="bg-[#1EE7EE] text-black  mx-auto w-[200px] h-[180px] relative rounded-lg p-5  ">
          <p className="absolute top-2 left-5">Radical Red</p>
          <p className="my-10">HEX : #ff3b3f</p>
          <p className="my-10">CSS : rgba(255, 59, 63, 1)</p>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
