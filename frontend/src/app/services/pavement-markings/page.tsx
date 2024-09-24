import React from 'react';

const PavementMarkingsPage: React.FC = () => {
    return (
        <section id="pavement-markings" className="relative min-h-screen py-16 bg-[#F7D117] mt-8">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/PavementMarkingsBanner.jpg')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Pavement Markings: Installation & Maintenance</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16 mt-10">
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
                            <h2 className="text-2xl lg:text-4xl font-semibold text-black mb-4">Professional Pavement Marking Services</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Pavement markings are essential for guiding and managing traffic on roadways. They
                                provide critical information to drivers and pedestrians, enhancing safety and efficiency
                                on our roads. San Bar Construction Corp offers comprehensive pavement marking services
                                using high-quality materials and state-of-the-art application techniques.
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <img src="/Striping1-1.webp" alt="Intersection Striping" className="mx-auto w-full lg:w-[90%] h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 1: Longitudinal Markings */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
                            <h2 className="text-2xl lg:text-4xl font-semibold text-black mb-4">Long Line Pavement Markings</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Longitudinal markings are the lines that run parallel to the direction of travel. These
                                include centerlines, edge lines, and lane lines. They help delineate traffic lanes,
                                provide guidance, and improve overall road safety.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Paint</li>
                                    <li>Thermoplastic</li>
                                    <li>Preformed tape</li>
                                    <li>Epoxy</li>
                                </ul>
                            </div>
                        </div>
                        {/* Video Section */}
                        <div className="w-full lg:w-1/2">
                            <video controls className="mx-auto w-full lg:w-[90%] rounded-lg">
                                <source src="/OverheadStripingTucumcari.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Section 3: Symbols and Legends */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
                            <h2 className="text-2xl lg:text-4xl font-semibold text-black mb-4">Symbols and Legends</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Symbols and legends on the roadway provide important information to drivers. These
                                include arrows, text legends like "STOP" or "ONLY," and various other symbols that guide
                                and control traffic.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Preformed thermoplastic</li>
                                    <li>Stencil and paint</li>
                                    <li>Preformed tape</li>
                                </ul>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <img src="/Airport4.webp" alt="Symbols and Legends" className="mx-auto w-full lg:w-[90%] h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PavementMarkingsPage;
