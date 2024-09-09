import React from 'react';

export default function AboutUs() {
    return (
        <div className="bg-gray-100 mt-20">
            {/* Banner Section */}
            <div
                className="relative h-96 bg-cover bg-center flex items-center justify-center mt-6"
                style={{backgroundImage: "url('/placeholder.png')"}}>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                {/* Banner Text */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-6xl font-extrabold drop-shadow-lg">About Us</h1>
                    <p className="mt-4 text-xl drop-shadow-lg">Learn more about the company.</p>
                </div>
            </div>

            {/* Who We Are */}
            <div className="py-20 bg-black shadow-inner min-h-screen">
                <div className="container mx-auto px-6 flex flex-col justify-between items-center">
                    {/* Centered H2 at the top */}
                    <h2 className="text-8xl font-bold mb-4 text-center text-white border-b-4 border-b-amber-400">Who We
                        Are</h2>


                    <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                        {/* Text Section */}
                        <div className="md:w-1/2 p-8">
                            <div className="bg-white p-4 rounded-xl mb-6 border-8 border-[#F7D117] shadow-lg">
                                <p className="text-gray-700 leading-relaxed text-xl font-serif">
                                    <strong>San Bar Construction Corp. </strong> is a premier specialized construction
                                    company providing the following services:
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="text-xl font-sans flex items-center space-x-2">
                                        <span className="text-[#F7D117]">•</span> <span>Pavement Markings</span>
                                    </li>
                                    <li className="text-xl font-sans flex items-center space-x-2">
                                        <span className="text-[#F7D117]">•</span> <span>Guardrail & Cable Barrier Installation/Repair</span>
                                    </li>
                                    <li className="text-xl font-sans flex items-center space-x-2">
                                        <span className="text-[#F7D117]">•</span> <span>MUTCD Sign Design, Manufacturing, and Installation</span>
                                    </li>
                                    <li className="text-xl font-sans flex items-center space-x-2">
                                        <span className="text-[#F7D117]">•</span> <span>Water Blasting Services</span>
                                    </li>
                                    <li className="text-xl font-sans flex items-center space-x-2">
                                        <span className="text-[#F7D117]">•</span> <span>Rumble Strip Installation</span>
                                    </li>
                                    <li className="text-xl font-sans flex items-center space-x-2">
                                        <span className="text-[#F7D117]">•</span> <span>Musical Road™</span>
                                    </li>
                                    <li className="text-xl font-sans flex items-center space-x-2">
                                        <span className="text-[#F7D117]">•</span> <span>Overhead Sign Structures</span>
                                    </li>
                                    <li className="text-xl font-sans flex items-center space-x-2">
                                        <span className="text-[#F7D117]">•</span> <span>Retail Shop</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="md:w-1/2 mt-8 md:mt-0 border-8 border-[#F7D117] rounded-xl">
                            <img src="/SignShop1-1.webp" alt="Who We Are"
                                 className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"/>
                        </div>
                    </div>

                    {/* Bottom Paragraph Section */}
                    <div className="md:w-3/4 mt-10 p-6 bg-white border-8 border-[#F7D117] rounded-xl shadow-lg">
                        <p className="text-black text-2xl font-serif leading-relaxed">
                            We are dedicated to delivering high-quality, reliable solutions for the highway and road
                            construction industry in New Mexico and the Southwest. <br /> Our team of experienced
                            professionals, state-of-the-art equipment, and commitment to excellence ensure that every
                            project meets the highest standards of safety and quality. We pride ourselves on our
                            reputation for integrity, innovation, and outstanding customer service.
                        </p>
                    </div>
                </div>
            </div>


            {/* History Section */}
            <div className="py-20 bg-gradient-to-r from-gray-100 to-gray-250 shadow-inner min-h-screen relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">

                    {/* Header at the top */}
                    <h2 className="text-6xl font-extrabold text-black mb-10 text-center border-b-4 border-black pb-4 tracking-wide uppercase">
                        Our History
                    </h2>

                    {/* First Paragraph */}
                    <div className="relative z-10 bg-white p-6 rounded-xl border-8 border-black shadow-lg mb-10 mx-auto max-w-lg md:max-w-3xl text-left">
                        <p className="text-gray-800 leading-relaxed text-xl font-serif">
                            <strong className="font-bold">San Bar Construction Corp.</strong> was founded in 1990 by David "Hossie" Sanchez, starting as a pavement markings specialist operating out of a one-bay garage in Los Lunas, New Mexico. Over the years, the company has grown significantly, moving to a 34,000 sq. ft. facility in Albuquerque in 1999.
                        </p>
                    </div>

                    {/* Image - Responsive Sizing */}
                    <div className="relative z-10 flex justify-center mb-10">
                        <img src="/History2-1.webp" alt="Our History"
                             className="w-full sm:w-3/4 md:w-1/2 h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300" />
                    </div>

                    {/* Second Paragraph */}
                    <div className="relative z-10 bg-white p-6 rounded-xl border-8 border-black shadow-lg mx-auto max-w-lg md:max-w-3xl">
                        <p className="text-gray-800 leading-relaxed text-xl font-serif">
                            From this strategic location, <strong className="font-bold">San Bar Construction Corp.</strong> provides comprehensive road construction services and specializes in the design, manufacture, and installation of signs. The company operates a retail store offering traffic safety items and PPE construction gear. We also sell and rent message boards, arrow boards, and impact attenuators.
                        </p>
                    </div>
                </div>
            </div>



            {/* Leadership Section */}
            <section className="py-20 bg-[#F7D117] shadow-inner h-full flex flex-col items-center">
                {/* Header */}
                <h2 className="text-8xl md:text-6xl text-center mb-4 text-white">Leadership</h2>
                <hr className="w-full max-w-3xl mb-4 border-t-4 border-black"/>

                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    {/* Image block */}
                    <div className="w-full md:w-1/2 p-6">
                        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md mb-8 md:mb-0">
                            <img src="/HossieHistory1.webp" alt="David 'Hossie' Sanchez"
                                 className="w-full h-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"/>
                        </div>
                    </div>

                    {/* Text block */}
                    <div className="w-full md:w-1/2 p-6">
                        <div className="p-6 bg-white rounded-2xl border-8 border-black">
                            <p className="text-black leading-relaxed mb-6 text-center md:text-left font-serif text-xl">
                                David "Hossie" Sanchez, leads a dedicated team of professionals who drive the company's
                                success.
                            </p>
                            <p className="text-black leading-relaxed mb-6 text-center md:text-left font-serif text-xl">
                                Our team ensures every project meets the highest standards of quality and safety.
                                Together, we bring innovation, integrity, and the best customer service to every
                                endeavor, making <strong>San Bar Construction Corp.</strong> a trusted leader in the
                                road construction and signage industry across the Southwest.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="w-full text-center mt-10">
                    <a href="/leadership" id="Leadership" aria-label="Leadership"
                       className="inline-block bg-black hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
                        Meet the Team
                    </a>
                </div>
            </section>


            {/* Core Values */}
            <div className="py-20 bg-gradient-to-r from-gray-100 to-gray-250 shadow-inner min-h-screen text-center">

                <div className="bg-yellow-500 p-2 text-center max-w-2xl ml-40">
                    <div className="bg-black p-4 shadow-lg">
                        <h2 className="text-white text-3xl lg:text-6xl font-semibold">Our Core Values</h2>
                    </div>
                </div>

                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 p-8">
                        <div className="bg-white p-4 rounded-xl mb-6 border-8 border-black">
                            <ul className="list-disc list-inside">
                                <li className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">Integrity: We
                                    conduct our business with the highest level of honesty and ethical standards.
                                </li>
                                <li className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">Quality: We are
                                    committed to delivering superior workmanship and materials on every project.
                                </li>
                                <li className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">Safety: We
                                    prioritize the safety of our employees, clients, and the community.
                                </li>
                                <li className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">Innovation: We
                                    embrace modern technology and innovative practices to enhance our services.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <img src="/Employees1-1.webp" alt="Employees"
                             className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"/>
                    </div>
                </div>
            </div>
        </div>
    );
};