"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const MegaMenuIndustries = () => {
    const [openTab, setOpenTab] = useState(2);
    return (
        <>
            <div className="services-tabs mega-menu absolute right-40 max-w-screen-xl mx-auto  hidden md:block">
                <div className="flex ">
                    <div className="lower-section tab md:flex rounded-b-none ">
                        <div style={{ width: "33%", backgroundColor: "#F3F3F3" }}>
                            <div className='tech gap-12 text-white p-8 '>
                                <div id="link1" onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                    data-toggle="tab"
                                    role="tablist" className={`w-28 link my-3 text-black cursor-pointer rounded rounded-sm p-2 hover:bg-white ${openTab === 1 ? 'bg-white' : ''
                                        }`} >
                                    <div className="flex  space-x-4">
                                        <span className="my-auto image-container">
                                            <Image width={20} height={20} src="/megaicon/service/service.png" alt="" />
                                        </span>
                                        <span>Services</span>
                                    </div>

                                </div>
                                <div id="link2" onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                    data-toggle="tab"
                                    role="tablist" className={`w-32 link my-3 text-black cursor-pointer rounded rounded-sm p-2 hover:bg-white ${openTab === 2 ? 'bg-white' : ''
                                        }`}>

                                    <div className="flex  space-x-4">
                                        <span className="my-auto image-container">
                                            <Image width={20} height={20} src="/megaicon/service/service.png" alt="" />
                                        </span>
                                        <span>Industries</span>
                                    </div>

                                </div>
                                 

                            </div>
                            <div className="p-8 mt-20">
                                <Image
                                    width={120}
                                    height={120}
                                    className="w-full h-auto"
                                    alt="image_review"
                                    src="/megaicon/service/review.png"
                                />
                            </div>
                        </div>
                        <div style={{ width: "33%" }} className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <div className='md:flex open-tab middle_section'>
                                <div className='textlink-section'>
                                    <ul className="services_megamenu_link">
                                        <li><Link className="flex" href="/services/web-development"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/website.png" alt="icon"></Image>  <span style={{paddingLeft: "10px"}}>Website Development </span></Link></li>
                                        <li><Link className="flex" href="/services/product-development"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/product.png" alt="icon"></Image> <span style={{paddingLeft: "10px"}}>Product Development </span></Link></li>
                                        <li><Link className="flex" href="/services/app-development"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/mobile-app.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Mobile App Development (Hybrid/Native) </span></Link></li>
                                        <li><Link className="flex" href="/services/digital-marketing-seo"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/seo.png" alt="icon"></Image> <span style={{paddingLeft: "10px"}}>Digital Marketing & SEO </span></Link></li>
                                        <li><Link className="flex" href="/services/email-marketing"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/email.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>E-Mail Marketing </span></Link></li>
                                        <li><Link className="flex" href="/services/ui-ux-designing"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/ui-ux.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>UI/UX Designing </span></Link></li>
                                        <li><Link className="flex" href="/services/quality-assurance"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/quality.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Quality Assurance</span> </Link></li>
                                        <li><Link className="flex" href="/services/technology-consulting"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/consulting.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Technology Consulting </span></Link></li>
                                        <li><Link className="flex" href="/services/content-writing"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/content.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Content Writing </span></Link></li>
<li><Link className="flex" href="/services/ai-solutions"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/consulting.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>AI Solutions & Integration</span></Link></li>
<li><Link className="flex" href="/services/ai-chatbot-development"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/mobile-app.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>AI Chatbot Development</span></Link></li>
<li><Link className="flex" href="/services/data-science-analytics"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/product.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Data Science & Analytics</span></Link></li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "33%" }} className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div className='md:flex open-tab  middle_section'>
                                <div className='textlink-section'>
                                <ul className="services_megamenu_link">
                                        <li><Link className="flex" href="/industries/automobile"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/website.png" alt="icon"></Image>  <span style={{paddingLeft: "10px"}}>Automobile Industry </span></Link></li>
                                        <li><Link className="flex" href="/industries/cloud-solutions"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/product.png" alt="icon"></Image> <span style={{paddingLeft: "10px"}}>Cloud Solutions </span></Link></li>
                                        <li><Link className="flex" href="/industries/real-estate-solutions"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/mobile-app.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Real Estate</span></Link></li>
                                        <li><Link className="flex" href="/industries/gaming-solutions-and-services"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/seo.png" alt="icon"></Image> <span style={{paddingLeft: "10px"}}>Gaming Solutions & Services </span></Link></li>
                                        <li><Link className="flex" href="/industries/tech-driven-consulting"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/email.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Tech-Driven Consulting </span></Link></li>
                                        <li><Link className="flex" href="/industries/education"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/ui-ux.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Education Solutions </span></Link></li>
                                        <li><Link className="flex" href="/industries/e-commerce-solutions"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/quality.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>E-Commerce Solutions</span> </Link></li>
                                        <li><Link className="flex" href="/industries/healthcare-solutions"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/consulting.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Healthcare Solutions </span></Link></li>
                                        <li><Link className="flex" href="/industries/insurance-software-solutions"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/content.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Insurance Software Solutions</span></Link></li>
<li><Link className="flex" href="/industries/manufacturing-solutions-and-services"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/product.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Manufacturing Solutions</span></Link></li>
<li><Link className="flex" href="/industries/advertising-industry"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/seo.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Advertising Industry</span></Link></li>
<li><Link className="flex" href="/industries/media-entertainment"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/email.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Media & Entertainment</span></Link></li>
                                        <li><Link className="flex" href="/industries/travel-hospitality"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/consulting.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Travel &amp; Hospitality</span></Link></li>
                                        <li><Link className="flex" href="/industries/logistics-supply-chain"><Image className="w-[18px] h-auto" width={20} height={20} src="/megaicon/service/product.png" alt="icon"></Image><span style={{paddingLeft: "10px"}}>Logistics &amp; Supply Chain</span></Link></li>
                                    </ul>                                                                                             
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "34%" }} className="w-1/3 bg-[#FFEDC1]">
                            <ul className="megamenu_right_section">
                                <li><h3 className="p-8 text-[30px]"><span className="text-[#1B76FF]">Ready</span> to speak with a marketing <span className="text-[#E05A32]">expert?</span></h3></li>
                                <li><Link className="px-4 mx-auto py-3 border border-black rounded" href="tel:+918860328059">+918860328059</Link></li>
                                <li><Link className="px-4 py-3 mx-auto mt-5 border border-black rounded" href="mailto:info@thetechmakers.com">info@thetechmakers.com</Link></li>
                            </ul>
                            <div className='flex justify-center space-x-5 mt-20'>
                            <Link href="https://www.facebook.com/profile.php?id=100088337137106"> 
                               <div className='w-5 h-5'>
                                <Image width={8} height={16} className="w-full h-auto" src="/megaicon/service/facebook.png" alt="" />
                               </div> 
                            </Link>
                            <span aria-hidden="true"><div className='w-5 h-5'>
                                    <Image width={18} height={16} className="w-full h-auto" src="/megaicon/service/twiter.png" alt="" />
                                </div></span>
                            <Link href="https://www.instagram.com/thetechmaker/">
                                <div className='w-5 h-5'>
                                    <Image width={17} height={16} className="w-full h-auto" src="/megaicon/service/insta.png" alt="" />
                                </div>  
                            </Link>
                            <Link href="https://www.linkedin.com/company/the-tech-makers-pvt-ltd/">
                                <div className='w-5 h-5'> 
                                  <Image width={18} height={16} className="w-full h-auto" src="/megaicon/service/linkedin.png" alt="" />
                                </div> 
                            </Link>
                            <span aria-hidden="true"><div className='w-5 h-5'>
                                <Image width={18} height={16} className="w-full h-auto" src="/megaicon/service/be.png" alt="" />
                               </div></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MegaMenuIndustries;
