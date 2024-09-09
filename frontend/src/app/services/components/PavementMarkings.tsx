import React from "react";
import { FaRoad } from 'react-icons/fa';

export default function PavementMarkings() {
    return (
        <div className="flex flex-wrap mb-12 md:mb-24">
            <div className="w-full bg-black p-6 rounded-lg">
                <div className="w-full bg-white p-6 rounded-lg flex lg:flex-wrap justify-center items-center">
                    {/* Text block */}
                    <div className="w-full lg:w-1/2 p-1 md:p-12">
                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Pavement Markings</h2>

                        {/* Image block */}
                        <div className="lg:hidden flex w-full lg:w-1/2 mb-4">
                            <img src="/IntersectionStriping1.webp" alt="Pavement Markings" className="w-full h-auto rounded-lg" />
                        </div>

                        <hr className="w-full border-t-4 border-yellow-500 mb-4" />
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                            San Bar provides quality pavement markings for roadways and parking areas, ensuring safety and efficiency.
                        </p>

                        <ul className="space-y-2">
                            <li className="flex items-start"><FaRoad /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Hot applied Thermoplastic Pavement Markings</span></li>
                            <li className="flex items-start"><FaRoad /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Painted Pavement Markings & Symbols</span></li>
                            <li className="flex items-start"><FaRoad /><span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">Preformed (Tape) Pavement Markings & Symbols</span></li>
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
                        <img src="/IntersectionStriping1.webp" alt="Pavement Markings" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
