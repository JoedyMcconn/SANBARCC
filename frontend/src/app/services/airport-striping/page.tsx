import React from 'react';
export default function AirportStripingPage() {
    return (
        <section id="airport-striping" className="relative min-h-screen bg-[#F7D117] bg-top  mt-20 mb-16">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center mt-8" style={{ backgroundImage: "url('/Striping1-1.webp')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Airport Striping Services</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center justify-center">
                        <div className="w-full">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black text-center mb-4">Professional Airport Striping Services</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/WaterBlasting2.webp" alt="Professional Airport Striping Services"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Airport striping plays a critical role in the safety and efficiency of airfield operations.
                                Properly marked runways, taxiways, and aprons ensure that aircraft can navigate safely and
                                efficiently. Our expert team provides high-quality striping services, adhering to FAA regulations.
                            </p>
                        </div>
                        <div className="mt-6">
                            <video controls className="w-full rounded-lg">
                                <source src="/AirportStripingFootage.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Section 1: Expertise and Precision */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Expertise and Precision</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/Airport2.webp" alt="Expertise and Precision"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Our team has extensive experience in airport striping, ensuring precise and durable markings.
                                We use advanced technology and top-tier materials to deliver results that meet the unique demands
                                of airfields. From runway markings to taxiway striping, our services are designed to maximize safety
                                and visibility.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/Airport2.webp" alt="Expertise and Precision"
                                 className=" m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 2: FAA Compliance */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">FAA Compliance</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/AirportStriping1.webp" alt="FAA Compliance"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                We ensure all striping is fully compliant with FAA regulations, providing clearly marked runways,
                                taxiways, and apron areas. Our services also include removal of old markings and repainting with
                                highly visible and durable materials that meet FAA standards for reflectivity and durability.
                            </p>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Our team follows stringent guidelines during every project to ensure the markings not only comply
                                with federal standards but also withstand the heavy demands of airport traffic and harsh weather
                                conditions.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/AirportStriping1.webp" alt="FAA Compliance"
                                 className=" m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*/!* Gallery Section *!/*/}
                {/*<div className="w-full bg-black p-6 rounded-lg mb-12">*/}
                {/*    <div className="bg-white p-4 md:p-6 rounded-lg">*/}
                {/*        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4 text-center"> Gallery</h2>*/}
                {/*        <hr className="w-full border-t-4 border-yellow-500 mb-6"/>*/}

                {/*        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
                {/*            <img src="/AirportProject1.webp" alt="Airport Project 1" className="w-full h-auto rounded-lg"/>*/}
                {/*            <img src="/AirportProject2.webp" alt="Airport Project 2" className="w-full h-auto rounded-lg"/>*/}
                {/*            <img src="/AirportProject3.webp" alt="Airport Project 3" className="w-full h-auto rounded-lg"/>*/}
                {/*            <img src="/AirportProject4.webp" alt="Airport Project 4" className="w-full h-auto rounded-lg"/>*/}
                {/*            <img src="/AirportProject5.webp" alt="Airport Project 5" className="w-full h-auto rounded-lg"/>*/}
                {/*            <img src="/AirportProject6.webp" alt="Airport Project 6" className="w-full h-auto rounded-lg"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    );
}
