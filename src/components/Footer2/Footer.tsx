import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div>
            <footer
                style={{
                    backgroundImage: "url('/footerbg2.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "#1c1e23"
                }}
                className="bg-white bg-[#312e2f] footer2otherpage">
                <div className="mx-auto w-full max-w-screen-xl text-sm p-4 py-6 lg:py-8">
                    <div className="grid sm:grid-cols-2 mb-8 gap-10 md:grid-cols-3">
                        <Link href="/">
                            <div className='w-32'>
                                <Image width={500}
                                    height={500} src="/footerlogo.png" alt="" />
                            </div>
                        </Link>
                        <div className='flex flex-wrap space-x-5'>
                            <div className='w-16'><Image width={500}
                                height={500} src="/footer.png" alt="" /> </div>
                            <div className='w-16'><Image width={500}
                                height={500} src="/footer.png" alt="" /> </div>
                            <div className='w-16'><Image width={500}
                                height={500} src="/footer.png" alt="" /> </div>
                            <div className='w-16'><Image width={500}
                                height={500} src="/footer.png" alt="" /> </div>
                        </div>
                        <div className='flex justify-left md:justify-center'>
                            <Image width={180}
                                height={180} src="/reviews.png" alt="" className="w-auto h-auto" />
                        </div>
                    </div>
                    <hr />
                    <div className="grid mt-8 sm:grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
                        <div>

                            <ul className="text-white text-white  ">
                                <li className="mb-2">
                                    <Link href="/services/web-development" className=" text-[#C4F5E1]">Website Development</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/services/product-development" className=" text-[#C4F5E1]">Product Development</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/services/app-development" className=" text-[#C4F5E1]">Mobile App Development</Link>
                                </li> <li className='mb-2'>
                                    <Link href="/services/digital-marketing-seo" className="text-[#C4F5E1] ">Digital Marketing & SEO</Link>
                                </li> <li className='mb-2'>
                                    <Link href="/services/email-marketing" className="text-[#C4F5E1] ">E-Mail Marketing</Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul className="text-white text-white  ">
                                <li className='mb-2'>
                                    <Link href="/services/ui-ux-designing" className=" text-[#C4F5E1]">UI/UX Designing</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/services/quality-assurance" className=" text-[#C4F5E1]">Quality Assurance</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href="/services/technology-consulting" className=" text-[#C4F5E1]">Technology Consulting</Link>
                                </li> <li className='mb-2'>
                                    <Link href="/services/content-writing" className=" text-[#C4F5E1]">Content Writing</Link>
                                </li>
                                <li className="mb-2"><Link href="/services/ai-solutions" className="text-[#C4F5E1]">AI Solutions & Integration</Link></li>
                                <li className="mb-2"><Link href="/services/ai-chatbot-development" className="text-[#C4F5E1]">AI Chatbot Development</Link></li>
                                <li className="mb-2"><Link href="/services/data-science-analytics" className="text-[#C4F5E1]">Data Science & Analytics</Link></li>
                            </ul>
                        </div>
                        <div>

                            <ul className="text-white text-white  ">
                                <li className="mb-2">
                                    <Link href="/industries/media-entertainment" className=" text-[#C4F5E1]">Media & Entertainment</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/industries/gaming-solutions-and-services" className=" text-[#C4F5E1]">Gaming Solutions</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/industries/real-estate-solutions" className=" text-[#C4F5E1]">Real Estate</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/industries/tech-driven-consulting" className=" text-[#C4F5E1]">Tech Driven Consulting</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/industries/manufacturing-solutions-and-services" className=" text-[#C4F5E1]">Manufacturing Solutions and services</Link>
                                </li>


                            </ul>
                        </div>
                        <div>
                            <ul className="text-white text-white  ">
                                <li className="mb-2">
                                    <Link href="/industries/automobile" className=" text-[#C4F5E1]">Automobile</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/industries/education" className=" text-[#C4F5E1]">Education Solutions</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/industries/e-commerce-solutions" className=" text-[#C4F5E1]">E-commerce Solutions</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/industries/insurance-software-solutions" className=" text-[#C4F5E1]">Insurance Software Solutions</Link>
                                </li>
                                <li className="mb-2">
                                    <Link href="/industries/cloud-solutions" className=" text-[#C4F5E1]">Cloud Solutions</Link>
                                </li>
                                <li className="mb-2"><Link href="/industries/healthcare-solutions" className="text-[#C4F5E1]">Healthcare Solutions</Link></li>
                                <li className="mb-2"><Link href="/industries/advertising-industry" className="text-[#C4F5E1]">Advertising Industry</Link></li>
                                <li className="mb-2"><Link href="/industries/travel-hospitality" className="text-[#C4F5E1]">Travel &amp; Hospitality</Link></li>
                                <li className="mb-2"><Link href="/industries/logistics-supply-chain" className="text-[#C4F5E1]">Logistics &amp; Supply Chain</Link></li>


                            </ul>
                        </div>
                        <div>
                            <ul className="text-white text-white  ">
                                <li className="mb-1">
                                    <Link href="/about" className=" text-[#C4F5E1]">About Us</Link>
                                </li>
                                {/* <li className="mb-1">
                                    <Link href="/our-work" className=" text-[#C4F5E1]">Our Work</Link>
                                </li> */}
                                <li className="mb-1">
                                    <Link href="/careers" className=" text-[#C4F5E1]">Careers</Link>
                                </li>
                                <li className="mb-1">
                                    <Link href="/blogs" className=" text-[#C4F5E1]">Blog</Link>
                                </li>
                                <li className="mb-1">
                                    <Link href="/privacy-policy" className=" text-[#C4F5E1]">Privacy Policy</Link>
                                </li>
                                <li className="mb-1">
                                    <Link href="/terms-and-conditions" className=" text-[#C4F5E1]">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                    <div className='md:flex md:justify-between sm:justify-center'>
                        <div className='text-white'>
                            <span className='font-bold text-white'>Office: </span>C-276, C Block, Sector 63, Noida, Uttar Pradesh 201301
                            <div className='flex space-x-5 mt-5'>
                                <Link href="https://www.facebook.com/thetechmaker/" target="_blank" rel="noreferrer" aria-label="Facebook"> <div className='w-5 h-5'><Image width={500}
                                    height={500} src="/ftfb.png" alt="" /></div> </Link>
                                {/* <Link href="#"><div className='w-8 h-8'><Image width={500}
                                    height={500} src="/newtwitter.png" alt="" /></div>  </Link> */}
                                <Link href="https://www.instagram.com/thetechmaker/"><div className='w-5 h-5'><Image width={500}
                                    height={500} src="/ftinsta.png" alt="" /></div>  </Link>
                                <Link href="https://www.linkedin.com/company/the-tech-makers-pvt-ltd/"><div className='w-5 h-5'><Image width={500}
                                    height={500} src="/ftlinkedin.png" alt="" /></div>  </Link>
                            </div>
                        </div>
                        <div className='md:flex mt-5 md:mt-0 space-x-5'>
                            <Link className='w-48 text-center' href="tel:+918860328059"> <div className='border w-48 px-3 py-3 rounded-md text-white hover:text-orange-500 border-white' > +91 886 032 8059</div></Link>
                            <Link className='w-48' href="mailto:info@thetechmakers.com"><div className='border w-48 px-3 py-3 rounded-md  text-white hover:text-orange-500 border-orange-500' >info@thetechmakers.com</div></Link>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer
