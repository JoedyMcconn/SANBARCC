"use client";

import React from "react";

export default function Footer() {
    return (
        <div className="pt-28 pb-12 bg-black text-white px-8 md:px-16">
            <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Certification Logos and Address Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left lg:mr-24">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <img src="/ACONM.webp" alt="ACON New Mexico" className="h-24 w-full object-contain" />
                        <img src="/ATSSA.webp" alt="ATTSA" className="h-24 w-full object-contain" />
                        <img src="/Certified1.webp" alt="3M certified" className="h-48 w-full object-contain" />
                        <img src="/NMDOT.webp" alt="NMDOT certified" className="h-36 w-full object-contain" />
                    </div>
                </div>

                {/* Logo and Nav Links Section */}
                <div className="flex flex-col items-center w-full md:w-96 lg:w-[140%] lg:ml-[-22%]"> {/* Adjusted left margin */}
                    <img src="/SanBarTextLogo1.webp" alt="SanBar Logo" className="w-80 lg:w-96 mb-4 mx-auto" />
                    <ul className="flex flex-wrap justify-center space-x-4 text-white mb-4 text-lg lg:text-xl">
                        <li className="pl-4"><a href='/' className="hover:text-yellow-500">Home</a></li>
                        <li><a href='/about-us' className="hover:text-yellow-500">About Us</a></li>
                        <li><a href='/services' className="hover:text-yellow-500">Contracting Services</a></li>
                        <li><a href='/Safety-Products' className="hover:text-yellow-500">Retail Services</a></li>
                        <li><a href='/job-opportunities' className="hover:text-yellow-500">Job Opportunities</a></li>
                        <li><a href='/contact-us' className="hover:text-yellow-500">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div className="flex flex-col justify-center items-center md:items-start md:text-left lg:ml-40">
                    <p className="text-6xl lg:text-7xl font-semibold mb-2">Call Us:</p>
                    <p className="text-2xl lg:text-3xl text-center md:text-left">
                        <a href="tel:+15054528000" className="text-blue-500 hover:text-yellow-500">+1 505-452-8000</a>
                    </p>
                    <p className="text-2xl lg:text-3xl mt-7 text-yellow-500">
                        <strong>Hours:</strong>
                    </p>
                    <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                    <p className="text-2xl lg:text-3xl mt-7 text-yellow-500">
                        <strong>Address:</strong>
                    </p>
                    <p className="text-lg lg:text-xl mt-6 lg:mt-4">
                        San Bar Construction Corp. <br/>
                        5109 Edith Blvd NE, Albuquerque, NM 87107
                    </p>

                </div>
            </div>

            {/* Mobile Stacking */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .grid-cols-2 {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .h-24 {
                        height: auto;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
