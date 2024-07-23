"use client"

import React, { useState } from 'react';
import { FaCheckCircle, FaRoad, FaPaintRoller, FaSign, FaShieldAlt } from 'react-icons/fa';

const Services: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'signage' | 'roadConstruction'>('signage');

    const handleCategoryChange = (category: 'signage' | 'roadConstruction') => {
        setActiveCategory(category);
    };

    return (
        <section id="services" className="relative min-h-screen py-16 bg-[#E0AF2A] mt-6">

            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-top mb-6" style={{ backgroundImage: "url('/SignWarehouse.JPG')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Services We Provide</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Buttons */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => handleCategoryChange('signage')}
                    className={`px-6 py-2 mx-2 text-lg font-bold rounded ${activeCategory === 'signage' ? 'bg-white text-black' : 'bg-black text-amber-400'} border border-yellow-300 transition duration-300`}
                >
                    Signage
                </button>
                <button
                    onClick={() => handleCategoryChange('roadConstruction')}
                    className={`px-6 py-2 mx-2 text-lg font-bold rounded ${activeCategory === 'roadConstruction' ? 'bg-white text-black' : 'bg-black text-white'} border border-yellow-300 transition duration-300`}
                >
                    Road Construction
                </button>
            </div>

            {/* Services List */}
            <div className="container relative mx-auto px-6 md:px-12 lg:px-16 py-20">
                {activeCategory === 'signage' && (
                    <>
                        {/*Roadway signage*/}
                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                                    {/* Text block */}
                                    <div className="w-full lg:w-1/2 p-1 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Roadway Signs</h2>

                                        {/* Image block */}
                                        <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                            <img src="/SpeedLimitSign.jpg" alt="Roadway Signs" className="w-full h-auto rounded-lg"/>
                                        </div>

                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            San Bar continually updates our procedures, materials, and equipment to meet or exceed project specifications and comply with the latest MUTCD regulations. We ensure your signs meet all Local, State, and Federal standards.
                                            <br /><br />
                                            As a 3M Certified™ Sign Fabricator, San Bar operates a 13,000-square-foot state-of-the-art sign shop, one of the largest in the Southwest. We can manufacture and install any type of sign, from single Handicap signs to large overhead structures, including custom designs.
                                        </p>

                                        <ul className="space-y-2">
                                            <li className="flex items-start"><FaSign /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Regulatory Signs</span></li>
                                            <li className="flex items-start"><FaSign /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Warning Signs</span></li>
                                            <li className="flex items-start"><FaSign /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Guide Signs</span></li>
                                            <li className="flex items-start"><FaSign /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Political Signs</span></li>
                                            <li className="flex items-start"><FaSign /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Specialty Signs</span></li>
                                        </ul>
                                        <div className="mt-6 text-center">
                                            <a
                                                href="/services/roadway-signs"
                                                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image block */}
                                    <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                        <img src="/placeholder.png" alt="Roadway Signs" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Erecting Overhead Sign Structures*/}
                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                                    {/* Text block */}
                                    <div className="w-full lg:w-1/2 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Erecting
                                            Overhead Sign Structures</h2>

                                        {/* Image block */}
                                        <div className="lg:hidden flex w-full lg:w-1/2 my-20 md:my-24">
                                            <img src="/SignStructureDark.jpg" alt="Erecting Overhead Sign Structures"
                                                 className="w-auto h-auto rounded-lg -rotate-90"/>
                                        </div>

                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            Sign structures come in three styles: Cantilever, Bridge, and Butterfly (T shape). They range in size from 18” to 40” in diameter. Installation components include a drilled shaft, rebar cage, bolt assembly, 3000 psi concrete, sign structure, and the sign(s). Some drilled shafts can be as deep as 65’, depending on the terrain and structure size.
                                            <br/><br/>
                                            If you've traveled the interstates in New Mexico, you've likely seen a San Bar-installed sign structure. San Bar also installs structures for Variable Message Systems, which are becoming more popular on interstates nationwide.
                                        </p>

                                        <ul className="space-y-2">
                                            <li className="flex items-start"><FaSign/><span
                                                className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Designs</span>
                                            </li>
                                            <li className="flex items-start"><FaSign/><span
                                                className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Installation Services</span>
                                            </li>
                                            <li className="flex items-start"><FaSign/><span
                                                className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Maintenance</span>
                                            </li>
                                        </ul>
                                        <div className="mt-6 text-center">
                                            <a
                                                href="/services/overhead-sign-structures"
                                                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image block */}
                                    <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                        <img src="/SignStructureDark.jpg" alt="Erecting Overhead Sign Structures"
                                             className="w-auto h-auto rounded-lg -rotate-90"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {activeCategory === 'roadConstruction' && (
                    <>

                        {/*Pavement Markings*/}
                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                                    {/* Text block */}
                                    <div className="w-full lg:w-1/2 p-1 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Pavement Markings</h2>

                                        {/* Image block */}
                                        <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                            <img src="/Striping1.jpg" alt="Pavement Markings" className="w-full h-auto rounded-lg"/>
                                        </div>

                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            Our expert team provides quality pavement markings for roadways and parking areas, ensuring safety and efficiency. Using durable materials, we deliver precise, long-lasting results for highways, streets, parking lots, and custom projects. Our services include a wide range of marking options tailored to meet your specific needs.
                                        </p>

                                        <ul className="space-y-2">
                                            <li className="flex items-start"><FaRoad /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Hot applied Thermoplastic Pavement Markings</span></li>
                                            <li className="flex items-start"><FaRoad /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Painted Pavement Marking</span></li>
                                            <li className="flex items-start"><FaRoad /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Preformed (Tape) Pavement Markings</span></li>
                                            <li className="flex items-start"><FaRoad /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Preformed Thermoplastic Pavement Markings</span></li>
                                            <li className="flex items-start"><FaRoad /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Contrast Pavement Markings</span></li>
                                            <li className="flex items-start"><FaRoad /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Raised and Recessed Pavement Markers</span></li>
                                        </ul>
                                        <div className="mt-6 text-center">
                                            <a
                                                href="/services/pavement-markings"
                                                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image block */}
                                    <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                        <img src="/Striping1.jpg" alt="Pavement Markings" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Guardrail repair and installation */}
                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                                    {/* Text block */}
                                    <div className="w-full lg:w-1/2 p-1 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Guardrail: Installation & Repair</h2>

                                        {/* Image block */}
                                        <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                            <img src="/GuardRailTruck2.JPG" alt="Guardrail: Installation & Repair" className="w-full h-auto rounded-lg"/>
                                        </div>

                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            You can always expect high-quality guardrail installation and repair when choosing San Bar, ensuring roadway safety and protection. Using durable materials and state-of-the-art equipment, we deliver precise, long-lasting results for highways, city streets, and custom projects. Our comprehensive services offer a wide range of guardrail solutions to meet your specific needs and enhance infrastructure safety and functionality.
                                        </p>

                                        <ul className="space-y-2">
                                            <li className="flex items-start"><FaShieldAlt /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Guardrail Installation</span></li>
                                            <li className="flex items-start"><FaShieldAlt /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Guardrail Repair</span></li>
                                            <li className="flex items-start"><FaShieldAlt /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Guardrail Solutions</span></li>
                                        </ul>
                                        <div className="mt-6 text-center">
                                            <a
                                                href="/services/Guardrail"
                                                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image block */}
                                    <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                        <img src="/GuardRailTruck2.JPG" alt="Guardrail: Installation & Repair" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Rumble Strip Installation*/}

                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                                    {/* Text block */}
                                    <div className="w-full lg:w-1/2 p-1 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Rumble Strip Installation</h2>

                                        {/* Image block */}
                                        <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                            <img src="/placeholder.png" alt="Rumble Strip Installation" className="w-full h-auto rounded-lg"/>
                                        </div>

                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            We also specializes in high-quality rumble strip installation, enhancing roadway safety and alertness. We deliver precise, long-lasting results for highways, city streets, and custom projects. Our services offer various rumble strip options to meet your needs and improve road safety.
                                        </p>

                                        <ul className="space-y-2">
                                            <li className="flex items-start"><FaCheckCircle /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Asphalt Rumble Strips</span></li>
                                            <li className="flex items-start"><FaCheckCircle /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Concrete Rumble Strips</span></li>
                                            <li className="flex items-start"><FaCheckCircle /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Rumble Strips</span></li>
                                        </ul>
                                        <div className="mt-6 text-center">
                                            <a
                                                href="/services/Rumble-strip"
                                                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image block */}
                                    <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                        <img src="/placeholder.png" alt="Rumble Strip Installation" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Cable Barrier Installation and repair*/}

                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                                    {/* Text block */}
                                    <div className="w-full lg:w-1/2 p-1 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Cable Barrier: Installation & Repair</h2>

                                        {/* Image block */}
                                        <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                            <img src="/placeholder.png" alt="Cable Barrier: Installation & Repair" className="w-full h-auto rounded-lg"/>
                                        </div>

                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            We provide high-quality cable barrier installation and repair services, enhancing roadway safety and protection. Using durable materials, we deliver precise, long-lasting results for highways, medians, and custom projects. Our services include a wide range of cable barrier solutions to meet your specific needs and improve infrastructure.
                                        </p>

                                        <ul className="space-y-2">
                                            <li className="flex items-start"><FaShieldAlt /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Cable Barrier Installation</span></li>
                                            <li className="flex items-start"><FaShieldAlt /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Cable Barrier Repair</span></li>
                                            <li className="flex items-start"><FaShieldAlt /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Cable Barrier Solutions</span></li>
                                        </ul>
                                        <div className="mt-6 text-center">
                                            <a
                                                href="/services/cable-barrier"
                                                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image block */}
                                    <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                        <img src="/placeholder.png" alt="Cable Barrier: Installation & Repair" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Water and Sand Blasting services*/}

                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                                    {/* Text block */}
                                    <div className="w-full lg:w-1/2 p-1 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Water & Sand Blasting</h2>

                                        {/* Image block */}
                                        <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                            <img src="/placeholder.png" alt="Water & Sand Blasting" className="w-full h-auto rounded-lg"/>
                                        </div>

                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            Waterblasting efficiently and completely removes all types of durable
                                            traffic markings from asphalt and concrete without damaging the road
                                            surface, even if it is grooved or porous. This method ensures quick, clean,
                                            and cost-effective removal, leaving minimal to no scars on the roadway and
                                            eliminating the need for resurfacing or secondary cleanup.
                                            <br/><br/>
                                            San Bar boasts the only waterblaster in New Mexico equipped with a full
                                            reclamation system, which immediately suctions removed markings into a
                                            holding tank for proper disposal, unlike older systems that leave debris on
                                            the road, requiring additional costly cleanup.
                                            <br/><br/>
                                            Our "Stripe Hog" waterblaster features a double 8” head, allowing it to
                                            remove a 16” wide line in one pass, saving both time and money. The
                                            adjustable water pressure ranges from 10,000 psi to 40,000 psi, enabling
                                            precise control for delicate or aggressive removal as needed. The New Mexico
                                            D.O.T. requires this process for both temporary and permanent traffic
                                            marking removal.
                                        </p>

                                        <ul className="space-y-2">
                                            <li className="flex items-start"><FaPaintRoller /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Standard Rumble Bars</span></li>
                                            <li className="flex items-start"><FaPaintRoller /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">High-Visibility Rumble Bars</span></li>
                                            <li className="flex items-start"><FaPaintRoller /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Rumble Bars</span></li>
                                        </ul>
                                        <div className="mt-6 text-center">
                                            <a
                                                href="/services/Water&Sand-Blasting"
                                                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                            >
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                    {/* Image block */}
                                    <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                        <img src="/placeholder.png" alt="Water & Sand Blasting" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Services;
