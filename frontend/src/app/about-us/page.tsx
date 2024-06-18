import React from 'react';
import { FaCheckCircle, FaRoad, FaPaintRoller, FaSign, FaShieldAlt } from 'react-icons/fa';
import {FaCircleCheck} from "react-icons/fa6";

const AboutUs: React.FC = () => {
    return (
        <div className="bg-gray-100 mt-10">
            {/* Banner Section */}
            <div
                className="relative h-96 bg-cover bg-center flex items-center justify-center"
                style={{backgroundImage: "url('/about-us-header.jpg')"}}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                {/* Banner Text */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-6xl font-extrabold drop-shadow-lg">About Us</h1>
                    <p className="mt-4 text-xl drop-shadow-lg">Learn more about the company.</p>
                </div>
            </div>

            {/*Who We Are...*/}
            <div className="py-20 bg-gradient-radial from-amber-400 to-[#E0AF2A] shadow-inner min-h-screen">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-6xl font-bold mb-4 text-white">Who We Are</h2>
                        <hr className="w-1/2 mb-4 border-t-4 border-black"/>
                        <div className="bg-white p-4 rounded-xl mb-6 border-8 border-black">
                            <p className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">
                                Following several years working in various capacities within the New Mexico highway construction market, David "Hossie" Sanchez realized the need for a pavement marking firm that would place a strong emphasis on quality service and customer satisfaction for the local highway contracting community. Believing that he could put together a company that would fulfill that need and more, "Hossie" established San Bar Construction Corp. </p>
                                <p className={"text-gray-700 mb-6 leading-relaxed text-xl font-serif"}>Since it's beginning in 1990, the Company's stated mission has been; to serve the contracting community as a professional , quality based, service-oriented contacting firm that strives to meet the needs of the construction industry in New Mexico and the Southwest. Today, thanks to to a team of highly qualified personnel, state-of-the-art equipment, and unsurpassed expertise in the field of specialty contracting services, San Bar is recognized throughout the region as a leader in the industry.
                            </p>

                            <p className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">
                                The San Bar Construction Corp. management team is comprised of industry professionals with a wide range of experience spanning nearly 40 years. The extent of this expertise at the managerial level is matched by a strong support staff and qualified field personnel, all who share in the vision of becoming the premiere specialty contractor in the Southwest.
                            </p>
                        </div>

                    </div>
                    <div className="md:w-1/2 p-8">
                        <img src="/placeholder.png" alt="Who We Are"
                             className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"/>
                    </div>
                </div>
            </div>


            {/* History Section */}
            <div className="py-20 bg-gradient-to-r from-gray-100 to-gray-250 shadow-inner min-h-screen">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-6xl font-bold text-gray-800 mb-4">Our History and What We Do</h2>
                        <hr className="w-1/2 mb-4 border-t-4 border-amber-400"/>
                        <div className="bg-white p-4 rounded-xl mb-6 border-8 border-black">
                            <p className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">
                                San Bar Construction Corp. was established in August of 1989 around the kitchen table of
                                its owner, David “Hossie” Sanchez. After four month of planning and preparation, the
                                company began operations as a pavement markings specialist in January 1990 initially
                                operating out of a one bay garage in Los Lunas. In 1999, San Bar Construction Corp.
                                moved into its present 34,000 sq. ft. facility sitauted along the I-25/South Broadway
                                corridor in Albuquerque's south valley.
                            </p>

                            <p className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">
                                From this convenient location, the company provides administrative support, warehouse materials, performs vehicle inspections and equipment maintenance, repairs electronic message boards and sequential arrow displays. We design and manufacture construction and permanent roadway signing and traffic control devices in our NMDOT certified and professionally equipped sign shop.
                            </p>

                            <p className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">
                                In addition, San Bar operates a fully stocked retail store, selling construction related materials and safety devices to customers im an over the counter, one-stop-shop fashion.
                            </p>

                        </div>
                        {/*<a href="/history" className="inline-block bg-amber-400 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">*/}
                        {/*    More About Our History*/}
                        {/*</a>*/}
                    </div>
                    <div className="md:w-1/2 p-8">
                        <img src="/HossieHistory.JPG" alt="Our History"
                             className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"/>
                    </div>
                </div>
            </div>


            {/* Leadership Section */}
            <div
                className="py-20 bg-gradient-radial from-amber-400 to-[#E0AF2A] shadow-inner h-screen flex flex-col md:flex-row items-center">
                {/* Image block */}
                <div className="w-full md:w-1/2 p-6 order-1 md:order-none">
                    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
                        <img src="/HossieSanchez.JPG" alt="David 'Hossie' Sanchez"
                             className="w-full h-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"/>
                    </div>
                </div>
                {/* Text block */}
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-8xl md:text-6xl text-center md:text-left mb-4 text-white">Leadership</h2>
                    <hr className="w-full mb-4 border-t-4 border-black"/>
                    <div className="p-6 bg-white rounded-2xl mt-6 border-8 border-black">

                        <p className="text-black leading-relaxed mb-6 text-center md:text-left font-serif text-xl">

                            David "Hossie" Sanchez has been leading San Bar Construction with unparalleled expertise and
                            dedication. His vision and commitment to excellence drive the success of our projects and
                            ensure
                            the highest standards of quality and safety.
                        </p>
                    </div>
                    <div className="w-full text-center mt-10">
                        <a href="/leadership"
                           className="inline-block bg-black hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
                            Meet the Team
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
