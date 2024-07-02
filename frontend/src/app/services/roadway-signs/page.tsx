import React from 'react';

const RoadwaySigns: React.FC = () => {
    return (
        <section id="roadway-signs" className="relative min-h-screen py-16 bg-yellow-300 mt-10">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover" style={{ backgroundImage: "url('/SignShop1.JPG')" }}>
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
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">3M Certified Sign Fabricator</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                We take great pride in being a 3M Certified Sign Fabricator. Our 13,000 square foot state-of-the-art sign shop is one of the largest in the Southwest. We manufacture and install a wide range of signs, from single Handicap signs to the largest overhead sign structures.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="3M Certified Sign Fabricator" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="3M Certified Sign Fabricator" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="3M Certified Sign Fabricator" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 1: Regulatory Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Regulatory Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Ensure compliance with local, state, and federal regulations with our high-quality regulatory signs.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Regulatory Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Regulatory Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Regulatory Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Regulatory Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 2: Warning Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Warning Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Enhance roadway safety with our durable and highly visible warning signs.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Warning Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Warning Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Warning Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Warning Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 3: Guide Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Guide Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Provide clear directions and information with our custom guide signs.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Guide Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Guide Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Guide Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Guide Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 4: Political Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Political Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Create impactful political signs for your campaigns with our expert services.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Political Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Political Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Political Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Political Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 5: Specialty Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Specialty Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Customize any sign you need with our specialty sign services.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Specialty Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Specialty Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Specialty Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Specialty Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadwaySigns;
