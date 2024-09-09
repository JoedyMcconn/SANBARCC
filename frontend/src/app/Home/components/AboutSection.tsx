import React, {useEffect} from "react";
import {FaBuilding, FaUsers} from "react-icons/fa";

const About = () => {

    useEffect(() => {
        const images = document.querySelectorAll('.fade-slide-image');

        const handleScroll = () => {
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const screenWidth = window.innerWidth || document.documentElement.clientWidth;

            images.forEach(image => {
                const rect = image.getBoundingClientRect();

                if (rect.top <= windowHeight * 1.25) {
                    image.classList.add('is-visible');
                } else if (screenWidth < 1024 && windowHeight * 0.01) {
                    image.classList.add('no-transition');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section id="About"
                 className="relative min-h-screen py-20 bg-black road-border">
            <div className="container relative text-center mx-auto px-6 md:px-12 lg:px-16 lg:flex">
                {/* Text block */}
                <div className="w-full lg:w-1/2 text-center max-w-2xl z-10 p-6 md:p-12 mx-auto lg:mt-20">
                    <div className="relative">
                        <div className="flex justify-center mb-4">
                            <div className="bg-yellow-500 p-2 mx-5">
                                <div className="bg-black p-4 shadow-lg">
                                    <h2 className="text-white text-3xl lg:text-6xl font-semibold">About San Bar</h2>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t-4 border-yellow-500 mt-8 mb-8"/>
                    </div>

                    <div className="mb-2 p-6 rounded-lg bg-white text-left">

                            <p className="text-lg md:text-2xl text-gray-800 leading-relaxed font-serif">
                                As a locally owned, family-run construction company, we have an innate
                                understanding of our State's needs, enabling us to provide tailored solutions.
                            </p>
                            <p className="text-lg md:text-2xl text-gray-800 leading-relaxed font-serif mt-3">
                                Our deep roots within the State of New Mexico grant us a distinctive perspective
                                and insight into our State's preferences and demands.
                            </p>
                    </div>
                </div>

                {/* Images collage */}
                <div className="w-full lg:w-1/2 p-6 lg:mt-40">
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                        <div className="col-span-2 row-span-2">
                            <img src="/NMwelcomeSign1.webp" alt="Welcome to NM sign"
                                 className="fade-slide-image w-full h-full object-cover rounded-lg"
                                 data-direction="up"/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <img src="/SanFidelSign.webp" alt="Striping"
                                 className="fade-slide-image w-full h-full object-cover rounded-lg"
                                 data-direction="left"/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <img src="/SignStructure5-1.webp" alt="Sign Shop"
                                 className="fade-slide-image w-full h-full object-cover rounded-lg"
                                 data-direction="right"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;