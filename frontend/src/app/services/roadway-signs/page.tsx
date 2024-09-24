import React from 'react';

export default function RoadwaySigns() {
    return (
        <section id="roadway-signs" className="relative min-h-screen py-16 bg-center bg-[#F7D117] mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover" style={{ backgroundImage: "url('/SignShop2-1.webp')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Roadway Signs: Fabrication & Installation</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white rounded-lg flex flex-wrap items-center p-4 md:p-6">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black">3M Certified Sign Fabricator</h2>
                            <hr className="w-full border-b-4 border-yellow-300 mb-4" />
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                We take great pride in being a 3M Certified Sign Fabricator. Our 13,000 square foot
                                state-of-the-art sign shop is one of the largest in the Southwest. We manufacture and
                                install a wide range of signs, from single Handicap signs to the largest overhead sign
                                structures.
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <img src="/3m_CertfiedSignFabricator.jpg" alt="3M Certified Sign Fabricator" className="mx-auto w-full lg:w-[90%] h-auto rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Section 1: Regulatory Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white rounded-lg flex flex-wrap items-center p-4 md:p-6">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Regulatory Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4" />
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Ensure compliance with local, state, and federal regulations with our high-quality
                                regulatory signs.
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <img src="/regulatory-signs.webp" alt="Regulatory Signs" className="mx-auto w-full lg:w-[90%] h-auto rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Section 2: Warning Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white rounded-lg flex flex-wrap items-center p-4 md:p-6">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Warning Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4" />
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Enhance roadway safety with our durable and highly visible warning signs.
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <img src="/WarningSigns.webp" alt="Warning Signs" className="mx-auto w-full lg:w-[90%] h-auto rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Section 3: Guide Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white rounded-lg flex flex-wrap items-center p-4 md:p-6">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Guide Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4" />
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Provide clear directions and information with our custom guide signs.
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <img src="/guide-signs.webp" alt="Guide Signs" className="mx-auto w-full lg:w-[90%] h-auto rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Section 4: Political Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        {/* Text Section */}
                        <div className="w-full lg:w-1/2 text-left mb-8 lg:mb-0 lg:pr-8">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Political Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4" />
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Create impactful political signs for your campaigns with our expert services.
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2">
                            <img src="/political-examples.webp" alt="Political Signs" className="mx-auto w-full lg:w-[90%] h-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
