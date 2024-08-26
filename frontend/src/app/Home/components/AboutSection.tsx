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
                <div className="w-full lg:w-1/2 text-center max-w-2xl z-10 p-6 md:p-12 mx-auto">
                    <div className="relative mb-12">
                        <div className="flex justify-center mb-4">
                            <div className="bg-yellow-500 p-2 mx-5">
                                <div className="bg-black p-4 shadow-lg">
                                    <h2 className="text-white text-3xl lg:text-6xl font-semibold">About San Bar</h2>
                                </div>
                            </div>
                        </div>

                        <hr className="border-t-4 border-yellow-500 mt-8 mb-8"/>
                    </div>

                    <div className="mb-2 p-6 rounded-lg bg-white text-left border-2 border-[#F7D117]">
                        <ul className="space-y-16">
                            <li className="flex flex-col lg:flex-row items-start">
                                <FaBuilding style={{fontSize: '10rem'}} className="text-yellow-500 mt-1 mr-3"/>
                                <div>
                                    <h3 className="text-4xl font-bold">Built To Last</h3>
                                    <p className="text-lg md:text-2xl text-gray-800 leading-relaxed font-serif">
                                        San Bar Construction Corp. provides a comprehensive range of services, including permanent roadway sign design and manufacturing, roadway construction, pavement marking, guardrail and cable barrier installation, rumble strip installation, overhead sign structure installation, and water and sand blasting services.
                                    </p>
                                </div>
                            </li>
                            <li className="flex flex-col lg:flex-row items-start">
                                <FaUsers style={{fontSize: '10rem'}} className="text-yellow-500 mt-1 mr-3"/>
                                <div>
                                    <h3 className="text-4xl font-bold">Family Owned Business</h3>
                                    <p className="text-lg md:text-2xl text-gray-800 leading-relaxed font-serif">
                                        As a locally owned, family-run construction company, we have an innate
                                        understanding of our State's needs, enabling us to provide tailored solutions.
                                        Our deep roots within the State of New Mexico grant us a distinctive perspective
                                        and insight into our State's preferences and demands.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Images collage */}
                <div className="w-full lg:w-1/2 p-6 mt-20">
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                        <div className="col-span-2 row-span-2">
                            <img src="/NMwelcomeSign.JPG" alt="Welcome to NM sign"
                                 className="fade-slide-image w-full h-full object-cover rounded-lg border-2 border-[#F7D117]"
                                 data-direction="up"/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <img src="/Striping1.jpg" alt="Striping"
                                 className="fade-slide-image w-full h-full object-cover rounded-lg border-2 border-[#F7D117]"
                                 data-direction="left"/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <img src="/SignStructure5.JPG" alt="Sign Shop"
                                 className="fade-slide-image w-full h-full object-cover rounded-lg border-2 border-[#F7D117]"
                                 data-direction="right"/>
                        </div>
                        <div className="col-span-2 row-span-2">
                            <img src="/PressureWashingTruck.webp" alt="Sign Shop"
                                 className="fade-slide-image w-full h-full object-cover rounded-lg border-2 border-[#F7D117]"
                                 data-direction="right"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;