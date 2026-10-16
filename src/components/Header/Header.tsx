"use client";
import React, { useState } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import Image from "next/image";
import MainPopup from "../MainPopup";
import MegaMenuIndustries from "./MegaMenuIndustries";

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIndustriesMenuOpen] = useState(false);

  const handleServicesMenuMouseEnter = () => {
    setServicesMenuOpen(true);
    setIndustriesMenuOpen(false);
  };

  const handleIndustriesMenuMouseEnter = () => {
    setIndustriesMenuOpen(true);
    setServicesMenuOpen(false);
  };

  const handleMenuMouseLeave = () => {
    setServicesMenuOpen(false);
    setIndustriesMenuOpen(false);
  };
  
  return (
    <div className="relative">

      <nav onMouseLeave={handleMenuMouseLeave}  className="bg-[#c2e4c9] navbar fixed w-full z-20 top-0 left-0 ">
      
        <div className="max-w-screen-xl px-4 flex flex-wrap items-center justify-between mx-auto py-4">
      
          <Link href="/" className="flex items-center">
            <Image
              width={80}
              height={500}
              src="/logo.png"
              className="h-8 w-auto mr-3"
              alt="The Tech Makers Logo"
              priority
            />
          </Link>
      
          <div className="flex md:order-2">
            {
            /* <button
              type="button"
              className="text-black  hover:bg-[#f97316] hover:text-white focus:outline-none border border-black   font-medium rounded-lg text-sm px-4 py-1 text-center mr-3 md:mr-0  dark:focus:ring-blue-800"
            >
              GET QUOTE
            </button> */}

            <MainPopup title="Get Quote"/>
            
            <button
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {openMobileMenu ? (
                <div>
                  {" "}
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fill="currentColor"
                      d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 000-.707L13.561.146a.499.499 0 00-.707 0L8 5 3.146.146a.5.5 0 00-.707 0L.146 2.439a.499.499 0 000 .707L5 8 .146 12.854a.5.5 0 000 .707l2.293 2.293a.499.499 0 00.707 0L8 11l4.854 4.854a.5.5 0 00.707 0l2.293-2.293a.499.499 0 000-.707z"
                    />
                  </svg>
                </div>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
          <div  
            className={`items-center justify-between ${
              !openMobileMenu ? "hidden" : ""
            } header5 w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex nav flex-col p-4 md:p-0 mt-4 menu5 font-medium  rounded-lg text-black md:flex-row md:space-x-8 md:mt-0">
              {/* <li>
                <Link
                  href="/products"
                  className="block py-2 pl-3 pr-4 text-black rounded bg-transparent  hover:text-[#f97316] md:p-0 "
                  aria-current="page"
                >
                  Products
                </Link>
              </li> */}
              <li
              onMouseEnter={handleServicesMenuMouseEnter}
              >
                <Link
                  href="/services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#f97316] md:p-0  dark:text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
                {isServicesMenuOpen && <MegaMenu />}{" "}
                {/* Conditionally render MegaMenu */}
              </li>
              <li onMouseEnter={handleIndustriesMenuMouseEnter}>
                <Link
                  href="/industries"
                  className="block py-2 pl-3 pr-4 text-gray-900 active:text-red-500 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#f97316] md:p-0  dark:text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Industries
                </Link>
                {isIndustriesMenuOpen && <MegaMenuIndustries />}{" "}
              </li>
              {/* <li>
                <Link
                  href="/our-work"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#f97316] md:p-0  dark:text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Our Work
                </Link>
              </li> */}
              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#f97316] md:p-0  dark:text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#f97316] md:p-0  dark:text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#f97316] md:p-0  dark:text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
