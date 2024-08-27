import React from "react";

const Hero = () => {
    // Static background image
    const backgroundImage = '/SanBarFrontEnhanced.webp';

    return (
        <div className="relative h-screen flex justify-end">
            {/* Background Image shifted to the right on mobile */}
            <img
                src={backgroundImage}
                alt="SanBar Front Enhanced Background"
                className="absolute inset-0 w-full h-full object-cover object-left md:object-center"
            />

            {/* Subtle Overlay on Desktop Only (hidden on mobile) */}
            <div
                className="hidden md:block absolute inset-y-0 right-0 w-1/3 h-full"
                style={{
                    background: 'linear-gradient(to left, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0))',
                }}
            ></div>

            {/* Wrapper for Top Left Images */}
            <div className="absolute top-0 left-0 hidden lg:flex flex-row space-x-2 pt-6">
                <img
                    src="/TopLeftHeroLogos1.webp"
                    alt="ACON New Mexico & ATSSA"
                    className="h-48 md:h-60"
                />
                <img
                    src="/3M_CertifiedEB!1.webp"
                    alt="3M certified"
                    className="h-36 md:h-40 mt-10"
                />
            </div>

            {/* Text, Button, and Phone Number */}
            <div className="z-10 flex flex-col justify-center w-full md:max-w-lg mr-4 md:mr-8 h-full text-center md:text-right px-4">
                <p className="hidden md:block text-base md:text-xl border-r-amber-400 border-r-4 pr-1 text-gray-300">
                    Serving all of New Mexico since 1989, contact us
                </p>
                <p className="hidden md:block text-base md:text-xl border-r-amber-400 border-r-4 pr-1 mb-10 text-gray-300">
                    today to find out how we can help.
                </p>
                <h2 className="text-5xl lg:text-8xl font-bold text-white mb-4">San Bar Construction Corp.</h2>
                {/* Contact Button and Phone Number Smaller Side-by-Side on Mobile */}
                <div className="flex flex-row justify-center md:justify-end space-x-2 md:space-x-4">
                    <a
                        href="/contact-us"
                        id="Contact"
                        aria-label="Contact"
                        className="inline-block bg-yellow-400 hover:bg-blue-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg">
                        Contact Us
                    </a>
                    <div className="bg-white text-black p-1 md:p-2 rounded text-sm md:text-lg flex items-center">
                        Call Us: +1 505-452-8000
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;