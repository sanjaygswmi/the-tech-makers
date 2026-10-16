"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  const [openMainTab, setOpenMainTab] = useState(1);

  // console.log(openMainTab);
  return (
    <>
      <div className="services-tabs max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="border side-tab border-r-0 border-t-0">
            <h3
              onClick={(e) => {
                e.preventDefault();
                setOpenMainTab(1);
              }}
              className={`${openMainTab === 1 ? "bg-[#f48b3a]" : "bg-white"
                } h-1/2 text-center p-2 rotate-180  md:h-[283px] verticalupper-section cursor-pointer text-[14px]`}
              style={{ writingMode: "vertical-rl" }}
            >
              Our Solutions
            </h3>
            <h3
              onClick={(e) => {
                e.preventDefault();
                setOpenMainTab(2);
              }}
              className={`${openMainTab === 2 ? "bg-[#f48b3a]" : "bg-white"
                } h-1/2 text-center p-2 rotate-180  md:h-[283px] verticallower-section   cursor-pointer text-[14px]`}
              style={{ writingMode: "vertical-rl" }}
            >
              Our Technologies
            </h3>
          </div>

          <div className={`${openMainTab === 1 ? "block" : "hidden"} `}>
            <div className="border block md:hidden border-r-0 flex border-t-0">
              <h3
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMainTab(1);
                }}
                className={`${openMainTab === 1 ? "bg-[#f48b3a]" : "bg-white"
                  } w-1/2 text-[14px] text-center p-2 cursor-pointer`}
              >
                Our Solutions
              </h3>
              <h3
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMainTab(2);
                }}
                className={`${openMainTab === 2 ? "bg-[#f48b3a]" : "bg-white"
                  } w-1/2 text-[14px] text-center p-2 cursor-pointer`}
              >
                Our Technologies
              </h3>
            </div>
            <div className={`lower-section   md:h-[567px] bg-[#323E48] tab md:flex rounded-b-none`}
            >
              <div className="hidden  md:block">
                <div className="tech tech_image gap-12 text-white p-8 ">
                  <div
                    id="link1"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-28 link my-3  cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 1 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex  space-x-4">
                      <span className="my-auto w-16 h-16 image-container">
                        <Image width={500}
                          height={500} src="/1.png" alt="" />
                      </span>
                      <h4 className="text-[14px]">Website Development</h4>
                    </div>
                  </div>
                  <div
                    id="link2"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-32 link my-3 cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 2 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex  space-x-4">
                      <span className="my-auto w-16 h-16 image-container">
                        <Image width={500}
                          height={500} src="/2.png" alt="" />
                      </span>
                      <h4 className="text-[14px]"> Product Developement</h4>
                    </div>
                  </div>
                  <div
                    id="link3"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-32 link my-3 cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 3 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex  space-x-4">
                      <span className="my-auto image-container">
                        <Image width={500}
                          height={500} src="/3.png" alt="" />
                      </span>
                      <h4 className="text-[14px]"> App Development</h4>
                    </div>
                  </div>
                  <div
                    id="link4"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-32 link my-3 cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 4 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex space-x-4">
                      <span className="my-auto image-container">
                        <Image width={500}
                          height={500} src="/4.png" alt="" />
                      </span>
                      <h4 className="text-[14px]">
                        Digital Marketing SEO{" "}
                      </h4>
                    </div>
                  </div>
                  <div
                    id="link5"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(5);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-32 link my-3 cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 5 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex  space-x-4">
                      <span className="my-auto w-1/3 image-container">
                        <Image width={500}
                          height={500} src="/5.png" alt="" />
                      </span>
                      <h4 className="text-[14px]">
                        {" "}
                        UI/UX Designing
                      </h4>
                    </div>
                  </div>
                  <div
                    id="link6"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(6);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-32 link my-3 cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 6 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex space-x-4">
                      <span className="my-auto image-container">
                        <Image width={500}
                          height={500} src="/6.png" alt="" />
                      </span>
                      <h4 className="text-[14px]">Quality Assurance</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${openTab === 1 ? "block " : "md:hidden"
                  } border-b tab-border border-white`}
                id="link1"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5">
                    <h5 className="text-orange-500  font-bold text-[25px]">
                      Website Development
                    </h5>
                    <div className="text-white text-[14px]">
                      We create modern, user-friendly websites tailored to your
                      brand. Our services include responsive design, SEO
                      optimization, and e-commerce solutions.Let&apos;s build
                      your online presence today!
                    </div>

                    <div className="links ">
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >
                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                          WebApp Development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >
                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                          Backend Development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                          Open source development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                          Shopify Development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                          Woocommerce Development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                          Magento Development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                          WordPress Development
                        </h6>
                      </span>


                    </div>

                    <div>
                      <hr className="my-5" />
                      <h5 className="text-white my-2">Technologies</h5>
                      <div className="flex flex-wrap  space-x-5   justify-center border border-white p-3 rounded text-center">
                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/angular.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Angular</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/reactjs.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">React Js</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/vuejs.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Vue Js</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/html.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">HTML5</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/css.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">CSS3</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/js.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">JavaScript</h6>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/services/web-development"
                        className=" relative px-3 py-3 overflow-hidden text-[13px] text-[#F48B3A]  border border-[#F48B3A]  shadow-inner group rounded-md"
                      >
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F48B3A]  opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                          View More Details
                        </span>
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="w-full hidden md:block md:w-[428px]">
                    <Image style={{ width: "100%" }} width={300} height={500} src="/service/web-development.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className={`${openTab === 2 ? "block " : "md:hidden"
                } border-b tab-border border-white`}
                id="link2"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5">
                    <h5 className="text-orange-500 font-bold text-[25px]">
                      Product Development
                    </h5>
                    <div className="text-white text-[14px]">
                      Innovative solutions for turning your ideas into
                      successful projects. Explore our product development
                      services and take the next step towards your vision.
                    </div>

                    <div className="links ">
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Product Planning
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Analysis
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Product Designing and Implementation
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Testing and Integration
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Maintenance 
                        </h6>
                      </span>
                       
                    </div>

                    <div>
                      <hr className="my-5" />

                      <h5 className="text-white my-2">Technologies</h5>
                      <div className="flex flex-wrap space-x-5 border border-white p-3 rounded text-center">
                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/angular.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Angular</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/reactjs.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">React Js</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/vuejs.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Vue Js</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/html.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">HTML5</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/css.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">CSS3</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/tech/js.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">JavaScript</h6>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/services/product-development"
                        className=" relative px-3 py-3 overflow-hidden text-[13px] text-[#F48B3A]  border border-[#F48B3A]  shadow-inner group rounded-md"
                      >
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F48B3A]  opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                          View More Details
                        </span>
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="w-full hidden md:block md:w-[428px]">
                    <Image style={{ width: "100%" }} width={300} height={500} src="/service/product-development.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div
                className={`${openTab === 3 ? "block " : "md:hidden"
                  } border-b tab-border border-white`}
                id="link3"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5">
                    <h5 className="text-orange-500 font-bold text-[25px]">
                      App Development
                    </h5>
                    <div className="text-white text-[14px]">
                      Elevate your business with our cutting-edge app
                      development services. We craft mobile and web applications
                      that are tailored to your specific needs, ensuring a
                      seamless user experience. Our team of skilled developers
                      and designers is dedicated to turning your ideas into
                      functional and visually appealing apps
                    </div>

                    <div className="links ">
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Android App Development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        iOS App Development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Flutter App Development 
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        React Native Development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                         Hybrid App Development
                        </h6>
                      </span>
 
                    </div>

                    <div>
                      <hr className="my-5" />

                      <h5 className="text-white my-2">Technologies</h5>
                      <div className="flex flex-wrap space-x-5 border border-white p-3 md:w-1/2 justify-center rounded text-center">
                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/app_development/icon-7.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Android</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/app_development/icon-8.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Ios</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/app_development/icon-9.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Flutter</h6>
                        </div>

                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/services/app-development"
                        className=" relative px-3 py-3 overflow-hidden text-[13px] text-[#F48B3A]  border border-[#F48B3A]  shadow-inner group rounded-md"
                      >
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F48B3A]  opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                          View More Details
                        </span>
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="w-full hidden md:block md:w-[428px]">
                    <Image style={{ width: "100%" }} width={300} height={500} src="/service/apps-development.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className={`${openTab === 4 ? "block " : "md:hidden"
                } border-b tab-border border-white`}
                id="link4"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5">
                    <h5 className="text-orange-500 font-bold text-[25px]">
                      Digital Marketing SEO
                    </h5>
                    <div className="text-white text-[14px]">
                      Boost your online visibility and drive organic traffic
                      with our expert SEO services. Our team of digital
                      marketing professionals specializes in optimizing websites
                      for search engines. We implement a comprehensive SEO
                      strategy that includes keyword research, on-page
                      optimization, and quality backlink building.
                    </div>
                    <div className="links ">
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >
                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Search Engine Optimization
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >
                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Social Media Marketing
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >
                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Influencer Marketing
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >
                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        PPC/CPC Advertising
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >
                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Social Media Management
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >
                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Lead Generation
                        </h6>
                      </span>
  
                    </div>

                    <div>
                      <hr className="my-5" />

                      <h5 className="text-white my-2">Technologies</h5>
                      <div className="flex flex-wrap space-x-5 border border-white p-3 rounded text-center digital_marketing_tech">
                        <div>
                          <div className="bg-white p-2 w-12 h-12  mx-auto rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/digital_marketing/icon-10.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Semrush</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12  mx-auto rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/digital_marketing/icon-11.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">AHREF</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12  mx-auto rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/digital_marketing/icon-12.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">MOZ</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 h-12 mx-auto rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/digital_marketing/icon-14.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Google <br /> Analytics</h6>
                        </div>

                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/services/digital-marketing-seo"
                        className=" relative px-3 py-3 overflow-hidden text-[13px] text-[#F48B3A]  border border-[#F48B3A]  shadow-inner group rounded-md"
                      >
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F48B3A]  opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                          View More Details
                        </span>
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="w-full hidden md:block md:w-[428px]">
                    <Image style={{ width: "100%" }} width={300} height={500} src="/service/seo.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div
                className={`${openTab === 5 ? "block " : "md:hidden"
                  } border-b tab-border border-white`}
                id="link5"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5">
                    <h5 className="text-orange-500 font-bold text-[25px]">
                      UI/UX Designing
                    </h5>
                    <div className="text-white text-[14px]">
                      Our UX/UI and graphics design services are tailored to
                      create visually stunning and user-friendly digital
                      experiences. With a focus on user-centric design
                      principles, we ensure your website or application not only
                      looks exceptional but also offers an intuitive and
                      engaging interface.
                    </div>

                    <div className="links ">
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Logo Designing
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Website Designing
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Mobile Apps UI Design
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        UI/Frontend Development
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        UX Audit Service
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Building Brand Identity
                        </h6>
                      </span>
                    </div>
                    <div>
                      <hr className="my-5" />

                      <h5 className="text-white my-2">Technologies</h5>
                      <div className="flex flex-wrap space-x-5 border border-white p-3 rounded text-center">
                        <div>
                          <div className="bg-white p-2 mx-auto w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/graphics/icon-15.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Figma</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 mx-auto h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/graphics/icon-16.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Photoshop</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 mx-auto h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/graphics/icon-17.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Zeplin</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 mx-auto w-12 h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/graphics/icon-18.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">XD</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 mx-auto h-12 rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/graphics/icon-19.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Adove <br /> Illustrctor</h6>
                        </div>

                      </div>
                    </div>
                    <div className="mt-8">
                      <Link
                        href="/services/ui-ux-designing"
                        className=" relative px-3 py-3 overflow-hidden text-[13px] text-[#F48B3A]  border border-[#F48B3A]  shadow-inner group rounded-md"
                      >
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F48B3A]  opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                          View More Details
                        </span>
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="w-full hidden md:block md:w-[428px]">
                    <Image style={{ width: "100%" }} width={300} height={500} src="/service/UI UX-design.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div
                className={`${openTab === 6 ? "block " : "md:hidden"
                  }  tab-border `}
                id="link6"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5">
                    <h5 className="text-orange-500 font-bold text-[25px]">
                      Quality Assurance
                    </h5>
                    <div className="text-white text-[14px]">
                      We take quality seriously to ensure your products and
                      services meet the highest standards. Our dedicated quality
                      assurance team rigorously tests every aspect of your
                      project, from functionality and performance to usability
                      and security.
                    </div>

                    <div className="links ">
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Application testing
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Website Testing
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Vulnerability Testing
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Load Testing
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        Performance Testing
                        </h6>
                      </span>
                      <span
                        className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden text-sm   transition-all bg-[#ffedc1] rounded hover:bg-white group"
                      >

                        <h6 className="relative w-full text-left text-black transition-colors duration-300   ">
                        User Acceptance Testing
                        </h6>
                      </span>
 
                    </div>

                    <div>
                      <hr className="my-5" />

                      <h5 className="text-white my-2">Technologies</h5>
                      <div className="flex flex-wrap space-x-5 border border-white p-3 rounded text-center">
                        <div>
                          <div className="bg-white p-2 w-12 h-12 mx-auto rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/quality_assurance/icon-20.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Browser Stack</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12 mx-auto rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/quality_assurance/icon-21.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">TestRail</h6>
                        </div>

                        <div>
                          <div className="bg-white p-2 w-12 h-12 mx-auto rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/quality_assurance/icon-22.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Lembda Test</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 h-12 mx-auto rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/quality_assurance/icon-23.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Jira</h6>
                        </div>
                        <div>
                          <div className="bg-white p-2 w-12 h-12 mx-auto rounded-full">
                            <Image width={500}
                              height={500}
                              className="w-8 mx-auto"
                              src="/quality_assurance/icon-24.png"
                              alt=""
                            />
                          </div>
                          <h6 className="text-white text-[14px]">Selenium</h6>
                        </div>

                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/services/quality-assurance"
                        className=" relative px-3 py-3 overflow-hidden text-[13px] text-[#F48B3A]  border border-[#F48B3A]  shadow-inner group rounded-md"
                      >
                        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F48B3A] group-hover:h-full ease"></span>
                        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F48B3A]  opacity-0 group-hover:opacity-100"></span>
                        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                          View More Details
                        </span>
                      </Link>{" "}
                    </div>
                  </div>
                  <div className="w-full hidden md:block md:w-[428px]">
                    <Image style={{ width: "100%" }} width={300} height={500} src="/service/QA.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${openMainTab === 2 ? "block" : "hidden"} `}>
            <div className="border block md:hidden border-r-0 flex border-t-0">
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMainTab(1);
                }}
                className={`${openMainTab === 1 ? "bg-[#f48b3a]" : "bg-white"
                  } text-[14px] w-1/2 text-center p-2 cursor-pointer`}
              >
                Our Solutions
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setOpenMainTab(2);
                }}
                className={`${openMainTab === 2 ? "bg-[#f48b3a]" : "bg-white"
                  } text-[14px] w-1/2 text-center p-2 cursor-pointer`}
              >
                Our Technologies
              </div>
            </div>
            <div
              className={` lower-section    md:h-[567px] bg-[#323E48] tab md:flex rounded-b-none`}
            >
              <div className="hidden  md:block">
                <div className="tech gap-12 text-white p-8 ">
                  <div
                    id="link1"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-28 link my-3  cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 1 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex  space-x-4">
                      <span className="my-auto w-16 h-16 image-container">
                        <Image width={500}
                          height={500} src="/1.png" alt="" />
                      </span>
                      <span className="text-[14px]">Language</span>
                    </div>
                  </div>
                  <div
                    id="link2"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-32 link my-3 cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 2 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex  space-x-4">
                      <span className="my-auto w-16 h-16 image-container">
                        <Image width={500}
                          height={500} src="/2.png" alt="" />
                      </span>
                      <span className="text-[14px]">Database</span>
                    </div>
                  </div>
                  <div
                    id="link3"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-32 link my-3 cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 3 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex  space-x-4">
                      <span className="my-auto image-container">
                        <Image width={500}
                          height={500} src="/3.png" alt="" />
                      </span>
                      <span className="text-[14px]">Frontend </span>
                    </div>
                  </div>
                  <div
                    id="link4"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(4);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-32 link my-3 cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 4 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex  space-x-4">
                      <span className="my-auto w-16 h-16 image-container">
                        <Image width={500}
                          height={500} src="/4.png" alt="" />
                      </span>
                      <span className="text-[14px]">ECommerce</span>
                    </div>
                  </div>
                  <div
                    id="link5"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(5);
                    }}
                    data-toggle="tab"
                    role="tablist"
                    className={`w-32 link my-3 cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 5 ? "bg-gray-700" : ""
                      }`}
                  >
                    <div className="flex  space-x-4">
                      <span className="my-auto image-container">
                        <Image width={500}
                          height={500} src="/5.png" alt="" />
                      </span>
                      <span className="text-[14px]">UI/UX</span>
                    </div>
                  </div>



                </div>
              </div>
              <div
                className={`${openTab === 1 ? "block " : "md:hidden"
                  } border-b tab-border border-white`}
                id="link1"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5 grid gap-10 xs:grid-cols-1 sm:grid-cols-2 technology_list_scroll">
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/php.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white ">
                            PHP
                          </div>
                        </div>
                        <div className="  mt-2 font-normal text-white text-[14px]  ">
                         Elevate your web experiences with PHP, the dynamic scripting language that serves as a cornerstone of innovation at our web development company. Leveraging the versatility of PHP, we expertly design and develop seamless, interactive, and visually stunning applications that captivate users.
                        </div>
                      </div>
                    </div>

                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/csaap.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                            C#
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Enhance your web encounters with C#, a formidable programming language that serves as the bedrock of innovation within our web development endeavors. Leveraging the capabilities of this versatile language, we intricately craft seamless, interactive, and visually compelling applications that captivate users
                      </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/net.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          .Net
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">                         
                      Elevate your digital landscape with .NET, a powerful framework that serves as the cornerstone of innovation within our web development company. Harnessing the capabilities of this versatile framework, we intricately design and develop seamless, interactive, and visually captivating applications that engage users.</div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/kotlin.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                           Kotlin
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Elevate your digital experiences with Kotlin, a dynamic programming language that stands as a catalyst for innovation within our web development initiatives. Harnessing the versatility of Kotlin, we intricately craft seamless, interactive, and visually compelling applications that captivate users.</div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/swift.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          Swift
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                          
Transform your digital landscape with Swift, a dynamic and potent programming language that fuels innovation within our web development initiatives. Leveraging the capabilities of Swift, we intricately design and develop seamless, interactive, and visually striking applications that engage users.
                        </div>
                      </div>
                    </div>

                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/dart.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                           Dart
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Embark on a dynamic digital journey with Dart, a versatile programming language that stands as a catalyst for innovation within our web development initiatives. Leveraging the capabilities of Dart, we intricately design and craft seamless, interactive, and visually compelling applications that engage users.</div>
                      </div>
                    </div>

                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/node.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          Node JS
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Embark on a dynamic digital journey powered by Node.js, a robust runtime environment that propels innovation within our web development initiatives. Leveraging the capabilities of Node.js, we intricately design and construct seamless, interactive, and visually compelling applications that engage users.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${openTab === 2 ? "block " : "md:hidden"
                  } border-b tab-border border-white`}
                id="link2"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5 grid gap-10 xs:grid-cols-1 sm:grid-cols-2 technology_list_scroll">
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/MySQL.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                            MySQL
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                         Delve into a data-centric experience with MySQL, a robust relational database management system that underpins the efficiency of our web development initiatives. Leveraging the capabilities of MySQL, we intricately design and optimize databases, ensuring seamless data storage and retrieval for applications.
                        </div>
                      </div>
                    </div>

                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/Oracle.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                            Oracle
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                          Immerse yourself in a data-driven journey with Oracle, a robust relational database management system that forms the backbone of efficiency in our web development initiatives. Leveraging the capabilities of Oracle, we intricately design and optimize databases, ensuring seamless data storage and retrieval for applications.
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/pgSQL.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          pgSQL
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white"> 
                         Dive into a data-centric experience with pgSQL, a powerful relational database management system that serves as a foundation for efficiency in our web development initiatives. Leveraging the capabilities of pgSQL, we intricately design and optimize databases, ensuring seamless data storage and retrieval for applications. 
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/MongoDb.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          MongoDb
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Embark on a data-centric journey with MongoDB, a versatile NoSQL database that forms the core of efficiency in our web development initiatives. Leveraging the capabilities of MongoDB, we intricately design and optimize databases, ensuring seamless data storage and retrieval for applications.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${openTab === 3 ? "block " : "md:hidden"
                  } border-b tab-border border-white`}
                id="link3"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5 grid gap-10 xs:grid-cols-1 sm:grid-cols-2 technology_list_scroll">
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/Bootstrap.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                           Bootstrap
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                          
                            Immerse your web development projects in versatility with Bootstrap, a responsive front-end framework that lays the foundation for seamless and visually appealing user interfaces. Leveraging the capabilities of Bootstrap, we meticulously design and craft dynamic websites and applications, ensuring a consistent and engaging user experience across devices. 
                        </div>
                      </div>
                    </div>

                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/tech/reactjs.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                            React JS
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Immerse your web development endeavors in the power of React.js, a declarative and efficient JavaScript library that transforms the way we build user interfaces. Leveraging the capabilities of React.js, we intricately design and develop dynamic and interactive components, ensuring a responsive and engaging user experience. 
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/Next-js,.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                           Next Js
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                          
Elevate your web development projects with Next.js, a powerful React-based framework that brings versatility and efficiency to the forefront of our endeavors. Leveraging the capabilities of Next.js, we intricately design and develop dynamic and high-performance web applications, ensuring a seamless and engaging user experience.
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/tech/vuejs.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                           Vue JS
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Explore the potential of Vue.js, a progressive JavaScript framework that brings flexibility and simplicity to the forefront of our web development projects. Leveraging the capabilities of Vue.js, we intricately design and develop dynamic and responsive user interfaces, ensuring an intuitive and engaging user experience.
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/Ember-JS.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          Ember JS
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Delve into web development excellence with Ember.js, a robust JavaScript framework that brings structure and efficiency to our projects. Leveraging the capabilities of Ember.js, we intricately design and develop dynamic, scalable web applications, ensuring a streamlined and productive development process. 
                        </div>
                      </div>
                    </div>

                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/Backbone.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                           Backbone
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                         Forge resilient web applications with Backbone.js, a lightweight JavaScript framework that lays a solid foundation for our development projects. Leveraging the capabilities of Backbone.js, we meticulously design and construct dynamic and scalable web applications, ensuring a well-organized and efficient development process.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${openTab === 4 ? "block " : "md:hidden"
                  } border-b tab-border border-white`}
                id="link4"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5 grid gap-10 xs:grid-cols-1 sm:grid-cols-2 technology_list_scroll">
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/Magento.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          Magento
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Build robust e-commerce solutions with Magento, a powerful platform offering extensive customization options and scalability. Craft dynamic online storefronts tailored to your unique business needs.
                        </div>
                      </div>
                    </div>

                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/Shopify.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          Shopify
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                           Elevate your online business with Shopify, a platform renowned for user-friendly interfaces and seamless integrations. Create a streamlined and visually appealing online store that captivates your audience.

 
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/WooCommerce.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          WooCommerce
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                         Integrate e-commerce seamlessly with WooCommerce, a WordPress plugin known for its flexibility and ease of use. Enhance your online presence with a feature-rich and customizable shopping experience.
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/Prestashop.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          Prestashop
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Optimize your online store with Prestashop, leveraging its modular architecture for precise customization. Create an engaging and tailored user experience that sets your e-commerce venture apart.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${openTab === 5 ? "block " : "md:hidden"
                  } border-b tab-border border-white`}
                id="link5"
              >
                <div className="md:flex space-x-10 open-tab">
                  <div className="textlink-section mt-5 grid gap-10 xs:grid-cols-1 sm:grid-cols-2 technology_list_scroll">
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/photoshop.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          Photoshop
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Refine your visual creations with Photoshop, a comprehensive design tool that empowers you to enhance images, create graphics, and bring your artistic visions to life. Dive into a world of image manipulation and graphic design mastery.
                        </div>
                      </div>
                    </div>

                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/xd.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                           XD
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                         Experience seamless design workflows with XD, a user-friendly platform that streamlines the process of prototyping and designing interactive user experiences. Design and prototype with precision and efficiency.
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/figma.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          Figma
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                         Collaborate effortlessly on design projects with Figma, a versatile cloud-based tool that facilitates real-time collaboration, ensuring a smooth and efficient design process. Design collaboratively, iterate in real-time, and maintain a cohesive workflow.
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/CorelDraw.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          CorelDraw
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                        Unleash your creativity with CorelDraw, a graphic design software that provides precision tools and versatility, enabling you to design everything from logos to illustrations. Master vector illustration and page layout with finesse.
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500 border p-3 rounded font-bold text-xl">
                      <div>
                        <div className="flex space-x-5">
                          <div className="w-[40px]">
                            <Image width={500}
                              height={500} src="/technologies/Illustrator.png" alt="" />
                          </div>
                          <div className="my-auto font-normal text-white">
                          Illustrator
                          </div>
                        </div>
                        <div className="text-[14px] mt-2 font-normal text-white">
                         Create stunning vector graphics with Illustrator, a powerful design tool that offers precision and control. Bring your ideas to fruition with intricate and captivating illustrations. Illustrate with unparalleled precision and creative freedom.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-screen-xl mx-auto px-4 py-8" aria-labelledby="emerging-services-heading">
        <h3 id="emerging-services-heading" className="text-xl md:text-2xl font-bold mb-4">AI & Data Services</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/services/ai-solutions" className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold">AI Solutions & Integration</h4>
            <p className="mt-2 text-sm">Explore practical AI features and integrations for products and workflows.</p>
          </Link>
          <Link href="/services/ai-chatbot-development" className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold">AI Chatbot Development</h4>
            <p className="mt-2 text-sm">Plan chatbot experiences for support, knowledge access, and workflows.</p>
          </Link>
          <Link href="/services/data-science-analytics" className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold">Data Science & Analytics</h4>
            <p className="mt-2 text-sm">Make business data more useful through analysis and reporting.</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Tabs;
