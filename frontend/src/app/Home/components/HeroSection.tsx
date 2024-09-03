import React from "react";

const Hero = () => {
    return (
        <div className="relative h-screen flex justify-end">
            {/* Background Image for Large Screens */}
            <img
                src="/SanBarFrontEnhanced.webp"  // Default (Desktop) background image
                alt="SanBar Front Enhanced Background"
                className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Background Image for Mobile/Small Screens */}
            <img
                src="/MobileHero.webp"  // New image for mobile screens
                alt="SanBar Mobile Background"
                className="md:hidden absolute inset-0 w-full h-full object-cover"
            />

            {/* Subtle Overlay on Large Screens */}
            <div
                className="hidden md:block absolute inset-y-0 right-0 w-1/3 h-full"
                style={{
                    background: 'linear-gradient(to left, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0))',
                }}
            ></div>

            {/* Full-Screen Dark Overlay for Mobile/Small Screens */}
            <div className="md:hidden absolute inset-0 bg-black opacity-60"></div>

            {/* Wrapper for Top Left Images */}
            <div className="absolute lg:top-0 lg:left-0 flex lg:mt-10 md:mt-6 lg:space-x-2 pt-6">
                <img
                    src="/TopLeftHeroLogos1.webp"
                    alt="ACON New Mexico & ATSSA"
                    className="lg:h-[30vh] sm:mt-10 sm:h-12 "
                />
                <img
                    src="/3M_CertifiedEB!1.webp"
                    alt="3M certified"
                    className="lg:h-[20vh] sm:h-14 lg:mt-10 md:mt-10 mt-20"
                />
            </div>

            {/* Text, Button, and Phone Number */}
            <div
                className="z-10 flex flex-col justify-center w-full md:max-w-lg lg:max-w-xl mr-4 md:mr-8 h-full text-center md:text-right px-4">

                <p className=" md:block text-base md:text-xl lg:border-r-amber-400 lg:border-r-4 lg:pr-1 text-gray-300 sm:text-xl lg:mt-80" >
                    Serving all of New Mexico since 1989.
                </p>
                <p className=" md:block text-base md:text-xl lg:border-r-amber-400 lg:border-r-4 lg:pr-1 mb-10 text-gray-300">
                    Contact us today to find out how we can help.
                </p>
                {/* Contact Button and Phone Number Smaller Side-by-Side on Mobile */}
                <div className="flex flex-row justify-center md:justify-end space-x-2 md:space-x-4">
                    <a
                        href="/contact-us"
                        id="Contact"
                        aria-label="Contact"
                        className="inline-block bg-black hover:bg-blue-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg font-sans ">
                        Contact Us
                    </a>
                    <div
                        className="bg-white text-black p-1 md:p-2 rounded text-sm md:text-lg flex items-center font-sans">
                        Call Us: +1 505-452-8000
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
