
import React from "react";
import {
    FaCheckCircle,
    FaRoad,
    FaPaintRoller,
    FaSign,
    FaShieldAlt,
    FaScrewdriver,
    FaExclamationTriangle, FaMapSigns, FaDirections, FaHardHat, FaTruckMoving
} from 'react-icons/fa';
import {
    FaArrowDownLong,
    FaArrowUpAZ,
    FaArrowUpFromWaterPump,
    FaGears, FaGlassWaterDroplet, FaRoadBarrier, FaRoadCircleCheck, FaRoadCircleExclamation, FaRoadSpikes,
    FaSignHanging,
    FaSterlingSign
} from "react-icons/fa6";

const Services: React.FC = () => {

    return (
        <section id="services" className="relative min-h-screen py-16 bg-[#F7D117] mt-6">

            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-top mb-6" style={{ backgroundImage: "url('/SignWarehouse1.webp')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Services We Provide</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services List */}
            <div className="container relative mx-auto px-6 md:px-12 lg:px-16 py-20">

                {/* Pavement Markings */}
                <div className="flex flex-wrap mb-12 md:mb-24">
                    <div className="w-full bg-black p-6 rounded-lg">
                        <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                            {/* Text block */}
                            <div className="w-full lg:w-1/2 p-1 md:p-12">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Pavement
                                    Markings</h2>

                                {/* Image block */}
                                <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                    <img src="/IntersectionStriping1.webp" alt="Pavement Markings"
                                         className="w-full h-auto rounded-lg"/>
                                </div>

                                <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    San Bar provides quality pavement markings for roadways and parking areas, ensuring
                                    safety and efficiency.
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start"><FaRoad/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Hot applied Thermoplastic Pavement Markings</span>
                                    </li>
                                    <li className="flex items-start"><FaRoad/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Painted Pavement Markings & Symbols</span>
                                    </li>
                                    <li className="flex items-start"><FaRoad/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Preformed (Tape) Pavement Markings & Symbols</span>
                                    </li>
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
                                <img src="/IntersectionStriping1.webp" alt="Pavement Markings"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Guardrail repair and installation */}
                <div className="flex flex-wrap mb-12 md:mb-24">
                    <div className="w-full bg-black p-6 rounded-lg">
                        <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                            {/* Text block */}
                            <div className="w-full lg:w-1/2 p-1 md:p-12">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Guardrail:
                                    Installation & Repair</h2>

                                {/* Image block */}
                                <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                    <img src="/CableBarrierBanner.webp" alt="Guardrail: Installation & Repair"
                                         className="w-full h-auto rounded-lg"/>
                                </div>

                                <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    You can always expect high-quality guardrail installation and repair when choosing
                                    San Bar, ensuring roadway safety and protection.
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start"><FaScrewdriver/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Guardrail Installation</span>
                                    </li>
                                    <li className="flex items-start"><FaHardHat/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Guardrail Repair</span>
                                    </li>
                                    <li className="flex items-start"><FaCheckCircle/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Guardrail Solutions</span>
                                    </li>
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
                            <div className="hidden lg:flex w-full lg:w-6/12 h-full p-6 md:p-12">
                                <img src="/GuardRailTruck10.webp" alt="Guardrail: Installation & Repair"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Roadway signage */}
                <div className="flex flex-wrap mb-12 md:mb-24">
                    <div className="w-full bg-black p-6 rounded-lg">
                        <div className="w-full bg-white p-6 rounded-lg lg:flex justify-between items-center">
                            {/* Text block */}
                            <div className="w-full lg:w-1/2 p-1 md:p-12">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Roadway Signs</h2>

                                {/* Image block for small screens */}
                                <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                    <img src="/SignShop3.webp" alt="Roadway Signs" className="w-full h-auto rounded-lg"/>
                                </div>

                                <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    San Bar continually updates our procedures, materials, and equipment to meet or exceed project specifications and comply with the latest MUTCD regulations. We ensure your signs meet all Local, State, and Federal standards.
                                    <br/><br/>
                                    As a 3M Certified™ Sign Fabricator, San Bar operates a 13,000-square-foot state-of-the-art sign shop, one of the largest in the Southwest. We can manufacture and install any type of sign, from single Handicap signs to large overhead structure mounted signs, including custom designs.
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start"><FaDirections/><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Regulatory Signs</span></li>
                                    <li className="flex items-start"><FaExclamationTriangle/><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Warning Signs</span></li>
                                    <li className="flex items-start"><FaArrowUpAZ/><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Guide Signs</span></li>
                                    <li className="flex items-start"><FaSignHanging/><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Political Signs</span></li>
                                    <li className="flex items-start"><FaShieldAlt/><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Specialty Signs/Banners</span></li>
                                    <li className="flex items-start"><FaShieldAlt/><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Temporary/Permanent Construction Signs</span></li>
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

                            {/* Image block for large screens */}
                            <div className="hidden lg:block lg:w-1/2 p-6 md:p-12">
                                <div className="grid grid-cols-1 gap-4">
                                    <img src="/SignShop3.webp" alt="Sign Shop" className="w-full h-auto rounded-lg"/>

                                    <img src="/SignShopWarehouse.webp" alt="Roadway Signs" className="w-full h-auto rounded-lg mt-7"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Rumble Strip Installation */}
                <div className="flex flex-wrap mb-12 md:mb-24">
                    <div className="w-full bg-black p-6 rounded-lg">
                        <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                            {/* Text block */}
                            <div className="w-full lg:w-1/2 p-1 md:p-12">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Rumble Strip
                                    Installation</h2>

                                {/* Image block */}
                                <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                    <img src="/RumbleStripExample1.webp" alt="Rumble Strip Installation"
                                         className="w-full h-auto rounded-lg"/>
                                </div>

                                <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    We also specialize in high-quality rumble strip installation, enhancing roadway
                                    safety and alertness.
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start"><FaRoadCircleExclamation/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Asphalt Rumble Strips</span>
                                    </li>
                                    <li className="flex items-start"><FaRoadSpikes/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Concrete Rumble Strips</span>
                                    </li>
                                    <li className="flex items-start"><FaCheckCircle/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Rumble Strips</span>
                                    </li>
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
                                <img src="/RumbleStripExample1.webp" alt="Rumble Strip Installation"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cable Barrier Installation and repair */}
                <div className="flex flex-wrap mb-12 md:mb-24">
                    <div className="w-full bg-black p-6 rounded-lg">
                        <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                            {/* Text block */}
                            <div className="w-full lg:w-1/2 p-1 md:p-12">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Cable Barrier:
                                    Installation & Repair</h2>

                                {/* Image block */}
                                <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                    <img src="/cableBarrier.webp" alt="Cable Barrier: Installation & Repair"
                                         className="w-full h-auto rounded-lg"/>
                                </div>

                                <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    We provide high-quality cable barrier installation and repair services, enhancing
                                    roadway safety and protection.
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start"><FaRoadBarrier/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Cable Barrier Installation</span>
                                    </li>
                                    <li className="flex items-start"><FaGears/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Cable Barrier Repair</span>
                                    </li>
                                    <li className="flex items-start"><FaRoadCircleCheck/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Cable Barrier Solutions</span>
                                    </li>
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
                                <img src="/cableBarrier.webp" alt="Cable Barrier: Installation & Repair"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Water Blasting Services */}
                <div className="flex flex-wrap mb-12 md:mb-24">
                    <div className="w-full bg-black p-6 rounded-lg">
                        <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                            {/* Text block */}
                            <div className="w-full lg:w-1/2 p-1 md:p-12">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Water Blasting</h2>

                                {/* Image block */}
                                <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                    <img src="/WaterBlastingTruck.webp" alt="Water Blasting"
                                         className="w-full h-auto rounded-lg"/>
                                </div>

                                <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    Waterblasting efficiently and completely removes all types of durable traffic
                                    markings from asphalt and concrete without damaging the road surface, even if it is
                                    grooved or porous.
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start"><FaGlassWaterDroplet/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Water-Blasting Services</span>
                                    </li>
                                </ul>
                                <div className="mt-6 text-center">
                                    <a
                                        href="/services/WaterBlasting"
                                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            {/* Image block */}
                            <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                <img src="/WaterBlastingTruck.webp" alt="Water Blasting"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mb-12 md:mb-24">
                    <div className="w-full bg-black p-6 rounded-lg">
                        <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                            {/* Text block */}
                            <div className="w-full lg:w-1/2 p-1 md:p-12">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Musical Roads™</h2>

                                {/* Image block */}
                                <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                    <img src="/MusicalRoadExample1.webp" alt="Musical Roads"
                                         className="w-full h-auto rounded-lg"/>
                                </div>

                                <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    San Bar is proud to offer the unique and innovative Musical Roads™. These specially
                                    designed roads create music as cars drive over them, enhancing the driving
                                    experience and promoting road safety through an auditory cue.
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start"><FaRoad/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Custom Musical Road Design</span>
                                    </li>
                                    <li className="flex items-start"><FaCheckCircle/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Installation & Maintenance</span>
                                    </li>
                                    <li className="flex items-start"><FaExclamationTriangle/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Safety Enhancements</span>
                                    </li>
                                </ul>
                                <div className="mt-6 text-center">
                                    <a
                                        href="/services/musical-roads"
                                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            {/* Image block */}
                            <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                <img src="/musicalRoad1.webp" alt="Musical Roads"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mb-12 md:mb-24">
                    <div className="w-full bg-black p-6 rounded-lg">
                        <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                            {/* Text block */}
                            <div className="w-full lg:w-1/2 p-1 md:p-12">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Airport Striping</h2>

                                {/* Image block */}
                                <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                                    <img src="/RunwayStriping.webp" alt="Airport Striping"
                                         className="w-full h-auto rounded-lg"/>
                                </div>

                                <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    San Bar provides high-quality airport striping services, ensuring safety and
                                    compliance with all aviation regulations. Our team delivers precise markings for
                                    runways, taxiways, and aprons to meet FAA standards.
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        Runway Striping
                                    </li>
                                    <li className="flex items-start"><FaRoad/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Taxiway Markings</span>
                                    </li>
                                    <li className="flex items-start"><FaCheckCircle/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Apron Striping & Custom Markings</span>
                                    </li>
                                </ul>

                                <div className="mt-6 text-center">
                                    <a
                                        href="/services/airport-striping"
                                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>

                            {/* Image block */}
                            <div className="hidden lg:flex w-full lg:w-1/2 p-6 md:p-12">
                                <img src="/RunwayStriping.webp" alt="Airport Striping"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Erecting Overhead Sign Structures */}
                <div className="flex flex-wrap mb-12 md:mb-24">
                    <div className="w-full bg-black p-6 rounded-lg">
                        <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                            {/* Text block */}
                            <div className="w-full lg:w-1/2 md:p-12">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Erecting Overhead
                                    Sign Structures</h2>

                                {/* Image block */}
                                <div className="lg:hidden flex w-full lg:w-1/2 my-20 md:my-24">
                                    <img src="/SignStructure3-1.webp" alt="Erecting Overhead Sign Structures"
                                         className="w-auto h-64 rounded-lg"/>
                                </div>

                                <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    If you've traveled any of the interstates in New Mexico, you've likely driven under
                                    a San Bar installed sign structure.
                                    <br/><br/>
                                    San Bar also installs structures for Variable Message Systems, which are increasing
                                    in popularity on interstates nationwide.
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start"><FaScrewdriver/><span
                                        className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Installation Services</span>
                                    </li>
                                    <li className="flex items-start"><FaGears/><span
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
                                <img src="/SignStructure3-1.webp" alt="Erecting Overhead Sign Structures"
                                     className="w-auto h-auto rounded-lg "/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
