import React from "react";

const Hero = () => {
    return (
        <div className="relative h-screen flex justify-end bg-black">
            {/* Background Image for Large Screens */}
            <img
                src="/SanBarFrontEnhanced.webp"
                alt="SanBar Front Enhanced Background"
                className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Mobile Background Image */}
            <img
                src="/SanBarTextLogo1.webp"
                alt="SanBar Text Logo"
                className="md:hidden absolute inset-0 w-full h-full object-contain object-center"
            />

            {/* Subtle Overlay for Large Screens */}
            <div
                className="hidden md:block absolute inset-y-0 right-0 w-1/3 h-full"
                style={{
                    background: "linear-gradient(to left, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0))",
                }}
            ></div>

            {/* Centered Images for Small Screens */}
            <div className="md:hidden absolute top-0 w-full flex justify-center mt-20 space-x-4 ">
                <img
                    src="/NMDOT.webp"
                    alt="NM DOT"
                    className="h-16 lg:mt-4"
                />
                <img
                    src="/ACONM.webp"
                    alt="ACONM"
                    className="h-16"
                />
                <img
                    src="/ATSSA.webp"
                    alt="ATTSA"
                    className="h-16 mt-2"
                />
                <img
                    src="/3mLogo.webp"
                    alt="3M certified"
                    className="h-16 lg:h-24 mt-2"
                />
            </div>

            {/* Top Left Images for Large Screens */}
            <div
                className="hidden md:flex absolute top-0 left-0 lg:flex lg:mt-10 space-x-4 pt-6 md:h-40 md:mt-10">
                <img
                    src="/NMDOT.webp"
                    alt="NM DOT"
                    className="lg:h-[20vh] lg:mt-10"
                />
                <img
                    src="/TopLeftHeroLogos1.webp"
                    alt="ACON New Mexico & ATSSA"
                    className="lg:h-[30vh]"
                />
                <img
                    src="/3m.webp"
                    alt="3M certified"
                    className="lg:h-[10vh] lg:mt-20"
                />
            </div>

            {/* Text, Button, and Phone Number */}
            <div
                className="z-10 flex flex-col justify-end md:justify-center w-full md:max-w-lg lg:max-w-xl md:mr-8 h-full text-center md:text-right px-4 lg:mt-40 md:mt-40">
                {/* Large Screen Text */}
                <p className="hidden md:block text-base md:text-xl lg:border-r-amber-400 lg:border-r-4 lg:pr-1 text-gray-300">
                    Serving all of New Mexico since 1990.
                </p>
                <p className="hidden md:block text-base md:text-xl lg:border-r-amber-400 lg:border-r-4 lg:pr-1 mb-10 text-gray-300">
                    Contact us today to find out how we can help.
                </p>

                {/* Text centered for small screens */}
                <div className="md:hidden text-white text-xl font-sans mb-8">
                    <p>Serving all of New Mexico since 1990.</p>
                    <p>Contact us today to find out how we can help.</p>
                </div>

                {/* Contact Button and Phone Number */}
                <div className="flex flex-row justify-center md:justify-end space-x-2 md:space-x-4 mb-8 md:mb-0">
                    <a
                        href="/contact-us"
                        id="Contact"
                        aria-label="Contact"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg font-sans"
                    >
                        Contact Us
                    </a>
                    <div className="bg-white text-black p-1 md:p-2 rounded text-sm md:text-lg flex items-center font-sans">
                        Call Us: +1 505-452-8000
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
