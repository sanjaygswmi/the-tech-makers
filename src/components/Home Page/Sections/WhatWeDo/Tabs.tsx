"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="lower-section px-4 md:px-10 mt-6 md:mt-12 rounded-t-3xl relative">
        <div className="hide-scollbar" style={{ overflowX: 'auto', marginBottom: 10 }}>
          <div className='tech flex gap-2 text-white pt-8 md:pt-14 pb-8'>
            <h3 id="link1" onClick={e => {
              e.preventDefault();
              setOpenTab(1);
            }}
              data-toggle="tab"
              role="tablist" className={` cursor-pointer rounded rounded-sm px-4 p-2 hover:bg-gray-700 ${openTab === 1 ? 'bg-gray-700' : ''
                }`} >Learning<br></br> Management System</h3>
            <h3 id="link2" onClick={e => {
              e.preventDefault();
              setOpenTab(2);
            }}
              data-toggle="tab"
              role="tablist" className={` cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 2 ? 'bg-gray-700' : ''
                }`}>ERP <br></br> solutions</h3>
            <h3 id="link3" onClick={e => {
              e.preventDefault();
              setOpenTab(3);
            }}
              data-toggle="tab"
              role="tablist" className={` cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 3 ? 'bg-gray-700' : ''
                }`}>Cloud<br></br>  Solutions</h3>
            <h3 id="link4" onClick={e => {
              e.preventDefault();
              setOpenTab(4);
            }}
              data-toggle="tab"
              role="tablist" className={` cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 4 ? 'bg-gray-700' : ''
                }`}>E-Commerce <br></br> Solutions</h3>
            <h3 id="link5" onClick={e => {
              e.preventDefault();
              setOpenTab(5);
            }}
              data-toggle="tab"
              role="tablist" className={` cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 5 ? 'bg-gray-700' : ''
                }`}>Hotel-Flight<br></br> Management System</h3>
            <h3 id="link6" onClick={e => {
              e.preventDefault();
              setOpenTab(6);
            }}
              data-toggle="tab"
              role="tablist" className={` cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 6 ? 'bg-gray-700' : ''
                }`}>School <br></br>Management System</h3>
            <h3 id="link7" onClick={e => {
              e.preventDefault();
              setOpenTab(7);
            }}
              data-toggle="tab"
              role="tablist" className={`cursor-pointer rounded rounded-sm px-4 p-2 hover:bg-gray-700 ${openTab === 7 ? 'bg-gray-700' : ''
                }`} >Web <br></br>Application</h3>
            <h3 id="link8" onClick={e => {
              e.preventDefault();
              setOpenTab(8);
            }}
              data-toggle="tab"
              role="tablist" className={` cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 8 ? 'bg-gray-700' : ''
                }`}>Enterprise <br></br> Integration</h3>
            <h3 id="link9" onClick={e => {
              e.preventDefault();
              setOpenTab(9);
            }}
              data-toggle="tab"
              role="tablist" className={` cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 9 ? 'bg-gray-700' : ''
                }`}>Product <br></br>Development</h3>
            <h3 id="link10" onClick={e => {
              e.preventDefault();
              setOpenTab(10);
            }}
              data-toggle="tab"
              role="tablist" className={` cursor-pointer rounded rounded-sm p-2 hover:bg-gray-700 ${openTab === 10 ? 'bg-gray-700' : ''
                }`}>Real Estate<br></br> Management</h3>

          </div>
        </div>

        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <div className='md:flex div class="flex what_we_do_tab mt-5  '>
            <div className='img-section'>
              <Image className="rounded-t-md" src="/whatwedo/LMS.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section '>
              <h4 className='text-orange-500 font-bold text-xl text-[25px]'>LMS</h4>
              <div className='text-white mt-6  text-[14px]'>Strengthen your institution through our Learning Management System (LMS). Streamline training, enhance engagement, and track progress seamlessly. Tailor-made solutions for effective e-learning experiences, fostering growth and knowledge retention.</div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Course Content Development
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Learning Path Customization
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Progress Tracking
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Assessment and Quizzes
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    User Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Mobile Learning Solutions
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Gamification Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Reporting and Analytics
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Certification Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Integration with HR Systems
                  </span>
                </span>

              </div>
              <div className='mt-6'>

                <Link href="/services/learning-management-system"
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
                </Link>


              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
          <div className=' md:flex   div class="flex  what_we_do_tab mt-5'>
            <div className='img-section  rounded-t-2xl'>
              <Image className="rounded rounded-md" src="/whatwedo/ERP.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section'>
              <h4 className='text-orange-500 font-bold text-xl'>ERP</h4>
              <div className='text-white  mt-6  text-[14px]'>Revolutionize your business processes with our ERP solutions. Optimize processes, foster teamwork, and acquire immediate data-driven insights. Our tailored ERP services are designed to propel your organization towards unparalleled efficiency and success.
              </div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    ERP Implementation
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Customization Services
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Data Migration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    System Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Training and Support
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud ERP Solutions
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    ERP Maintenance
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Upgrade Services
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Business Process Analysis
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Mobile ERP Development
                  </span>
                </span>

              </div>
              <div className='mt-10'>
                <Link href="/contact"
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
                </Link></div>
            </div>
          </div>
        </div>
        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
          <div className=' md:flex    div class="flex what_we_do_tab  mt-5  '>
            <div className='img-section'>
              <Image className="rounded rounded-md" src="/whatwedo/CLOUD-SOLUTION.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section'>
              <h4 className='text-orange-500 font-bold text-xl'>Cloud Solutions</h4>
              <div className='text-white mt-6  text-[14px]'>
                Leverage the power of our Cloud Solutions to enhance scalability, improve data accessibility, and ensure seamless collaboration. Elevate your business with secure, flexible, and innovative cloud-based services tailored to your needs.
              </div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud Migration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud Security
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud Consulting
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud Deployment
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud Storage
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud Backup
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Disaster Recovery as a Service (DRaaS)
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud Monitoring
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Serverless Computing
                  </span>
                </span>

              </div>
              <div className='mt-10'>
                <Link href="/contact"
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
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 4 ? "block" : "hidden"} id="link4">
          <div className=' md:flex    div class="flex what_we_do_tab  mt-5  '>
            <div className='img-section'>
              <Image className="rounded rounded-md" src="/whatwedo/E-COMMERCE.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section'>
              <h4 className='text-orange-500 font-bold text-xl'>E-Commerce</h4>
              <div className='text-white mt-6  text-[14px]'> Elevate your online business with our E-commerce Solutions. We craft engaging websites, implement secure payment systems, and optimize for success, ensuring a seamless and rewarding shopping experience for your customers.</div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    E-commerce Website Development
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Payment Gateway Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Shopping Cart Optimization
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Mobile Commerce Solutions
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    App DesignUser Experience (UX) Design
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Inventory Management System
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Secure Transaction Implementation
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Order Tracking and Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Customer Support Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    E-commerce Analytics and Reporting
                  </span>
                </span>

              </div>
              <div className='mt-10'>
                <Link href="/contact"
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
                </Link></div>
            </div>
          </div>
        </div>
        <div className={openTab === 5 ? "block" : "hidden"} id="link5">
          <div className=' md:flex    div class="flex what_we_do_tab mt-5  '>
            <div className='img-section'>
              <Image className="rounded rounded-md" src="/whatwedo/hotel-flight.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section'>
              <div className='text-orange-500 font-bold text-xl'>Hotel-Flight Management System</div>
              <div className='text-white mt-6  text-[14px]'>Revolutionize your travel business with our Hotel/Flight Management System. Streamline bookings, manage reservations effortlessly, and elevate customer experiences. Your all-in-one solution for efficient and user-friendly travel management.</div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Reservation Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Booking Engine Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Payment Gateway Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Inventory Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    User Profiles
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Real-time Updates
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Reporting and Analytics
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Mobile App Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Multi-Language Support
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Customer Support Module
                  </span>
                </span>

              </div>
              <div className='mt-10'>
                <Link href="/contact"
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
                </Link> </div>
            </div>
          </div>
        </div>
        <div className={openTab === 6 ? "block" : "hidden"} id="link6">
          <div className=' md:flex    div class="flex what_we_do_tab mt-5  '>
            <div className='img-section'>
              <Image className="rounded rounded-md" src="/whatwedo/school-management.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section'>
              <h4 className='text-orange-500 font-bold text-xl'>School Management System</h4>
              <div className='text-white mt-6  text-[14px]'>
                Revolutionize education with our School Management System. Streamline administrative tasks, enhance communication, and foster student success through intuitive features tailored to meet the unique needs of educational institutions.</div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Student Enrollment Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Attendance Tracking System
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Grade and Report Card Generation
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Timetable and Schedule Planning
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Communication and Messaging Platform
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Library Management System
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Fee Management and Online Payments
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Examination and Assessment Tools
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Staff and Teacher Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Parent Portal for Real-time Updates
                  </span>
                </span>

              </div>
              <div className='mt-10'>
                <Link href="/contact"
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
                </Link> </div>
            </div>
          </div>
        </div>
        <div className={openTab === 7 ? "block" : "hidden"} id="link7">
          <div className=' md:flex    div class="flex what_we_do_tab mt-5  '>
            <div className='img-section'>
              <Image className="rounded rounded-md" src="/whatwedo/WEB-APPLICATION.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section'>
              <h4 className='text-orange-500 font-bold text-xl'>Web Solutions</h4>
              <div className='text-white mt-6  text-[14px]'>
                Crafting versatile and user-friendly web applications tailored to your business needs. Our expertise spans front-end and back-end development, ensuring a seamless and engaging digital experience for your users.
              </div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Custom Web Application Development
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Responsive Web Design
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    E-commerce Application Development
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Enterprise Web Solutions
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Content Management System Solutions
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Web Application Maintenance
                  </span>
                </span>
               
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Web Portal Development
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    API Development and Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud-Based Web Applications
                  </span>
                </span>
                
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    UI/UX Design for Web Applications
                  </span>
                </span>

              </div>
              <div className='mt-10'>
                <Link href="/contact"
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
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={openTab === 8 ? "block" : "hidden"} id="link8">
          <div className=' md:flex div class="flex what_we_do_tab mt-5  '>
            <div className='img-section'>
              <Image className="rounded rounded-md" src="/whatwedo/Enterprise-Integration.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section'>
              <h4 className='text-orange-500 font-bold text-xl'>Enterprise Integration</h4>
              <div className='text-white mt-6  text-[14px]'>Empower your business with seamless connectivity. Our Enterprise Integration solutions ensure your systems communicate efficiently, fostering collaboration, improving efficiency, and unlocking new possibilities for your organization&apos;s growth.</div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Data Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Cloud Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Application Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    B2B Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    API Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    System Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Business Process Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Middleware Integration
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Enterprise Service Bus (ESB)
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Data Synchronization
                  </span>
                </span>

              </div>
              <div className='mt-10'>
                <Link href="/contact"
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
                </Link></div>
            </div>
          </div>
        </div>
        <div className={openTab === 9 ? "block" : "hidden"} id="link9">
          <div className=' md:flex div class="flex what_we_do_tab mt-5  '>
            <div className='img-section'>
              <Image className="rounded rounded-md" src="/whatwedo/Product.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section'>
              <h4 className='text-orange-500 font-bold text-xl'>Product Development</h4>
              <div className='text-white mt-6  text-[14px]'>Unlock innovation with our Product Development services. From ideation to launch, we offer end-to-end support, turning ideas into market-ready solutions. Elevate your offerings and stay ahead in the competitive landscape.</div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Ideation and Conceptualization
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Market Research and Analysis
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Prototyping and Design
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Software and Hardware Development
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Quality Assurance and Testing
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    User Experience (UX) Design
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Scalability Planning
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Regulatory Compliance Support
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Post-Launch Maintenance
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Continuous Improvement and Enhancements
                  </span>
                </span>

              </div>
              <div className='mt-10'>
                <Link href="/contact"
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
                </Link> </div>
            </div>
          </div>
        </div>
        <div className={openTab === 10 ? "block" : "hidden"} id="link10">
          <div className=' md:flex    div class="flex what_we_do_tab mt-5  '>
            <div className='img-section'>
              <Image className="rounded rounded-md" src="/whatwedo/Real-Estate.jpg"
                alt="Banner"
                width={600}
                height={300}
                />
            </div>
            <div className='textlink-section'>
              <h4 className='text-orange-500 font-bold text-xl'>Real Estate Management System</h4>
              <div className='text-white mt-6  text-[14px]'>
                Transform your real estate operations with our innovative Real Estate Management System. Seamlessly manage listings, automate transactions, and elevate client interactions. Embrace digital innovation for a more efficient and effective property management experience.</div>
              <div className='links '>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Property Listing Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Transaction Automation
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Client Relationship Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Document Digitization
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Financial Reporting
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Lease and Contract Management
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Vendor and Maintenance Tracking
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start   p-[0.275rem] overflow-hidden font-medium    transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300   ">
                    Mobile Property Inspection
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-startp-[0.275rem] overflow-hidden font-medium transition-all bg-[#ffedc1] rounded hover:bg-white group"
                >

                  <span className="relative w-full text-left text-black transition-colors duration-300">
                    Analytics and Reporting Tools
                  </span>
                </span>
                <span
                  className="relative link inline-flex items-center justify-start p-[0.275rem] overflow-hidden font-medium transition-all bg-[#ffedc1] rounded group"
                >
                  <span className="relative w-full text-left  text-black transition-colors duration-300 ease-in-out">
                    Integration with Real Estate Platforms
                  </span>
                </span>

              </div>
              <div className='mt-10'>
                <Link href="/contact"
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
                </Link> </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default Tabs;
