import React from "react";

export default function Footer() {
    return (
        <div className="pt-20 pb-12 bg-black text-white px-8 md:px-16">
            <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Contact Info Section */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <p className='text-2xl font-semibold mb-2'>
                        <strong className="text-2xl text-pretty">Call Us:</strong> <span className="text-blue-500">+1 505-452-8000</span>
                    </p>
                    <p className="text-2xl font-semibold mb-2">
                        <strong>Email:</strong> contact@sanbarcc.com
                    </p>
                    <p className="text-xl mb-4 text-yellow-500">
                        <strong className="">9101 Broadway S.E</strong> Albuquerque, New Mexico
                    </p>
                </div>

                {/* Logo Section */}
                <div className="flex flex-col justify-center items-center md:items-start">
                    <ul className="flex space-x-4 text-white mb-4 text-lg">
                        <li><a href='/' className="hover:text-yellow-500">Home</a></li>
                        <li><a href='/about-us' className="hover:text-yellow-500">About Us</a></li>
                        <li><a href='/services' className="hover:text-yellow-500">Services</a></li>
                        <li><a href='/Safety-Products' className="hover:text-yellow-500">Retail</a></li>
                        <li><a href='/projects' className="hover:text-yellow-500">Projects</a></li>
                        <li><a href='/contact-us' className="hover:text-yellow-500">Contact Us</a></li>
                    </ul>
                    <img src="/SanBarTextLogo1.webp" alt="SanBar Logo" className="w-96 p-4 mb-4" />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <img src="/TopLeftHeroLogos1.webp" alt="ACON New Mexico & ATSSA" className="w-40 h-auto" />
                        <img src="/3M_CertifiedEB!1.webp" alt="3M certified" className="w-40 h-auto" />
                    </div>
                </div>

                {/* Address, Map and Nav Links Section */}
                <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right relative">
                    <div className="map-responsive mb-4 w-full sm:w-auto sm:mx-auto md:mr-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.730949373761!2d-106.66392302489504!3d34.963351569075954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220f1a42e3582f%3A0xfb330061da02f7fb!2sSan%20Bar%20Construction%20Corp.!5e0!3m2!1sen!2sus!4v1714607603120!5m2!1sen!2sus"
                            width="90%"
                            height="250px"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="San Bar Construction Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
