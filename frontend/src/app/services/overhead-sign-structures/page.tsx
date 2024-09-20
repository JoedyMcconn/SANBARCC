import React, { useState } from 'react';


function OverheadSignStructuresPage() {
    return (
        <section id="overhead-sign-structures" className="relative min-h-screen py-16 bg-[#F7D117] mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/SignStructure4-1.webp')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Erecting Overhead Sign Structures</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Professional Overhead Sign Structures</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4" />
                            <div className='lg:hidden flex mb-4'>

                            </div>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Sign structures come in 3 different styles; Cantilever, Bridge or Butterfly (“T” shape) and in various sizes ranging from 18” in diameter up to the larger 40” diameter structures. The basic components of any sign structure installation consist of a drilled shaft; rebar cage, bolt assembly, 3000 psi concrete, sign structure and the sign(s) themselves. Some drilled shafts can reach up to 65’ in depth depending on the terrain and size of the structure.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex lg:justify-center">
                            <img src="/SignStructureDark1.webp" alt="Professional Overhead Sign Structures" className="m-5 w-full h-auto -rotate-90 rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Section 1: Installation Services */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Installation Services</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4" />
                            <div className='lg:hidden flex mb-4'>

                            </div>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Our installation services ensure that your overhead sign structures are installed with precision and expertise. We use high-quality materials and advanced equipment to deliver reliable and durable installations.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Installation Process</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Drilled Shaft Foundations</li>
                                    <li>Rebar Cage Assembly</li>
                                    <li>Bolt Assembly and Concrete Pouring</li>
                                    <li>Sign Structure Erection</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex lg:justify-center">
                            <img src="/SignStructure1-1.webp" alt="Installation Services" className="m-5 w-full h-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OverheadSignStructuresPage;
