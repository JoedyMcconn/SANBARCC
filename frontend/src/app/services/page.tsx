"use client"

import React, { useState } from 'react';
import { FaCheckCircle, FaRoad, FaPaintRoller, FaSign, FaShieldAlt } from 'react-icons/fa';

const Services: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'signage' | 'roadConstruction'>('signage');

    const handleCategoryChange = (category: 'signage' | 'roadConstruction') => {
        setActiveCategory(category);
    };

    return (
        <section id="services" className="relative min-h-screen py-16 bg-yellow-500 mt-6">

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
                                <div className="w-full bg-white p-6 rounded-lg flex flex-wrap items-center">
                                    {/* Text block */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Roadway Signs</h2>
                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            San Bar is constantly updating our procedures, materials and equipment to ensure that we meet or exceed the specifications of your project. We also stay current with the regulations in the Manual of Uniform Traffic Control Devices (MUTCD). We ensure your signs are compliant with Local, State, and Federal regulations.
                                            <br /><br />
                                            San Bar takes great pride in being a 3M Certified(tm) Sign Fabricator. Our 13,000 square foot state-of-the-art sign shop is one of the largest sign shops in the Southwest. We can manufacture and install any type of signs from a single Handicap sign to the largest overhead sign structure. Not only do we produce and install standard signs, we can also manufacture and install any custom sign you may need.
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
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <img src="/placeholder.png" alt="Roadway Signs" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Erecting Overhead Sign Structures*/}
                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex flex-wrap items-center">
                                    {/* Text block */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Erecting Overhead Sign Structures</h2>
                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            Sign structures come in 3 different styles; Cantilever, Bridge or Butterfly (“T” shape) and in various sizes ranging from 18” in diameter up to the larger 40” diameter structures. The basic components of any sign structure installation consist of a drilled shaft; rebar cage, bolt assembly, 3000 psi concrete, sign structure and the sign(s) themselves. Some drilled shafts can reach up to 65’ in depth depending on the terrain and size of the structure. Anyone who has traveled the interstate systems here in New Mexico has either passed by or gone under a sign structure that San Bar has installed. Variable Message Systems are becoming more popular across the States interstate system and San Bar is installing the structure for these as well.
                                        </p>

                                        <ul className="space-y-2">
                                            <li className="flex items-start"><FaSign /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Designs</span></li>
                                            <li className="flex items-start"><FaSign /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Installation Services</span></li>
                                            <li className="flex items-start"><FaSign /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Maintenance</span></li>
                                        </ul>
                                    </div>

                                    {/* Image block */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <img src="/SignStructureDark.jpg" alt="Erecting Overhead Sign Structures" className="w-auto h-auto rounded-lg -rotate-90"/>
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
                                <div className="w-full bg-white p-6 rounded-lg flex flex-wrap items-center">
                                    {/* Text block */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Pavement Markings</h2>
                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            Our expert team specializes in providing high-quality pavement markings that ensure safety, organization, and efficiency on roadways and parking areas. We use durable materials and state-of-the-art equipment to deliver precise and long-lasting results, whether for highways, city streets, parking lots, or custom projects. Our comprehensive services include a wide range of marking options designed to meet your specific needs and enhance the functionality and appearance of your surfaces.
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
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <img src="/Striping1.jpg" alt="Pavement Markings" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Guardrail repair and installation */}
                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex flex-wrap items-center">
                                    {/* Text block */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Guardrail: Installation & Repair</h2>
                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            Our expert team specializes in providing high-quality guardrail installation and repair services that ensure safety and protection on roadways. We use durable materials and state-of-the-art equipment to deliver precise and long-lasting results, whether for highways, city streets, or custom projects. Our comprehensive services include a wide range of guardrail solutions designed to meet your specific needs and enhance the safety and functionality of your infrastructure. Whether installing new guardrails or repairing existing ones, we are committed to maintaining the highest standards of quality and safety.
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
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <img src="/GuardRailTruck2.JPG" alt="Guardrail: Installation & Repair" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Rumble Strip Installation*/}

                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex flex-wrap items-center">
                                    {/* Text block */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Rumble Strip Installation</h2>
                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            Our expert team specializes in providing high-quality rumble strip installation services that enhance safety and alertness on roadways. We use state-of-the-art equipment to deliver precise and long-lasting results, whether for highways, city streets, or custom projects. Our comprehensive services include a wide range of rumble strip options designed to meet your specific needs and improve the functionality and safety of your roads. We are committed to maintaining the highest standards of quality and effectiveness.
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
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <img src="/placeholder.png" alt="Rumble Strip Installation" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Cable Barrier Installation and repair*/}

                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex flex-wrap items-center">
                                    {/* Text block */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Cable Barrier: Installation & Repair</h2>
                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            Our expert team specializes in providing high-quality cable barrier installation and repair services that enhance safety and protection on roadways. We use durable materials and state-of-the-art equipment to deliver precise and long-lasting results, whether for highways, medians, or custom projects. Our comprehensive services include a wide range of cable barrier solutions designed to meet your specific needs and improve the safety and functionality of your infrastructure. Whether installing new cable barriers or repairing existing ones, we are committed to maintaining the highest standards of quality and safety.
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
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <img src="/placeholder.png" alt="Cable Barrier: Installation & Repair" className="w-full h-auto rounded-lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Water and Sand Blasting services*/}

                        <div className="flex flex-wrap mb-12 md:mb-24">
                            <div className="w-full bg-black p-6 rounded-lg">
                                <div className="w-full bg-white p-6 rounded-lg flex flex-wrap items-center">
                                    {/* Text block */}
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
                                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Water & Sand Blasting</h2>
                                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                        <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                            The process of waterblasting quickly and completely removes all types of durable traffic markings from asphalt and concrete applications while not adversely affecting road surfaces even if that surface is grooved or very porous.  The removal of all forms of durable traffic markings from all surfaces has never been so quick, clean and cost efficient.  Waterblasting leaves very little to no confusing marks (scars) on your roadway, no re-surfacing and no secondary clean-up or sweeping is needed with our equipment.  San Bar has the only (Waterblaster) piece of equipment in the State of New Mexico with a full reclamation system; whatever the equipment removes is immediately suctioned into the additional holding tank on the back of the truck and is taken off of the project for proper disposal.  Unlike the older systems that merely remove the traffic markings leaving them on road thus requiring an additional costly cleanup process afterwards.  San Bar’s “Stripe Hog” has a double 8” head on the front of the truck so the machine can remove a 16” wide line in one pass saving both time and money.  The water pressure out of the equipment can be adjusted between 10,000 psi to 40,000 psi.  With this type of equipment we can be as delicate or aggressive as needed to complete the removal.  The current standard with the New Mexico D.O.T. for traffic marking removal requires that this process be used for both temporary and permanent marking removal.                                        </p>

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
                                    <div className="w-full md:w-1/2 p-6 md:p-12">
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
