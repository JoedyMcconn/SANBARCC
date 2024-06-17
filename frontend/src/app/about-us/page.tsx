import React from 'react';
import { FaCheckCircle, FaRoad, FaPaintRoller, FaSign, FaShieldAlt } from 'react-icons/fa';
import {FaCircleCheck} from "react-icons/fa6";

const AboutUs: React.FC = () => {
    return (
        <div className="bg-gray-100 mt-10">
            {/* Banner Section */}
            <div
                className="relative h-96 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/path-to-banner-image.jpg')" }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                {/* Banner Text */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-6xl font-extrabold drop-shadow-lg">About Us</h1>
                    <p className="mt-4 text-xl drop-shadow-lg">Learn more about the company.</p>
                </div>
            </div>

            {/* History Section */}
            <div className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 shadow-inner min-h-screen">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-6xl font-bold text-gray-800 mb-4">Our History</h2>
                        <hr className="w-1/2 mb-4 border-t-4 border-amber-400" />
                        <div className="bg-white p-4 rounded-xl mb-6">
                        <p className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">
                            San Bar Construction Corp. was established in August of 1989 around the kitchen table of its owner, David “Hossie” Sanchez. After four month of planning and preparation, the company began operations as a pavement markings specialist in January 1990 initially operating out of a one bay garage in Los Lunas. In 1999, San Bar Construction Corp. moved into its present 34,000 sq. ft. facility sitauted along the I-25/South Broadway corridor in Albuquerque's south valley.
                        </p>
                        </div>
                        <a href="/history" className="inline-block bg-amber-400 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
                            More About Our History
                        </a>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <img src="/path-to-history-image.jpg" alt="Our History" className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300" />
                    </div>
                </div>
            </div>


            {/* Leadership Section */}
            <div className="py-20 bg-gradient-to-r from-gray-200 to-gray-300 shadow-inner h-screen flex flex-col md:flex-row items-center">
                {/* Image block */}
                <div className="w-full md:w-1/2 p-6 order-1 md:order-none">
                    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
                        <img src="/HossieSanchez.JPG" alt="David 'Hossie' Sanchez" className="w-full h-full object-cover"/>
                    </div>
                </div>
                {/* Text block */}
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-8xl md:text-6xl text-center md:text-left mb-4">Leadership</h2>
                    <hr className="w-full mb-4 border-t-4 border-amber-400"/>
                    <div className="p-6 bg-white rounded-2xl mt-6">

                    <p className="text-black leading-relaxed mb-6 text-center md:text-left font-serif text-xl">

                        David "Hossie" Sanchez has been leading San Bar Construction with unparalleled expertise and
                        dedication. His vision and commitment to excellence drive the success of our projects and ensure
                        the highest standards of quality and safety.
                    </p>
                    </div>
                    <div className="w-full text-center mt-10">
                        <a href="/leadership"
                           className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
                            Meet the Team
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
