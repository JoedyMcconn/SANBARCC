import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-gray-100 mt-10">
            {/* Banner Section */}
            <div
                className="relative h-96 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/about-us-header.jpg')" }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                {/* Banner Text */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-6xl font-extrabold drop-shadow-lg">About Us</h1>
                    <p className="mt-4 text-xl drop-shadow-lg">Learn more about the company.</p>
                </div>
            </div>

            {/* Who We Are */}
            <div className="py-20 bg-gradient-radial from-amber-400 to-[#E0AF2A] shadow-inner min-h-screen">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-6xl font-bold mb-4 text-white">Who We Are</h2>
                        <hr className="w-1/2 mb-4 border-t-4 border-black" />
                        <div className="bg-white p-4 rounded-xl mb-6 border-8 border-black">
                            <p className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">
                                San Bar Construction Corp. is a premier construction firm specializing in road construction services and comprehensive sign services, including printing, fabrication, and installation. As a 3M certified sign fabricator, we ensure top-notch quality and compliance with all regulations. We are dedicated to delivering high-quality, reliable solutions for the highway and road construction industry in New Mexico and the Southwest. Our team of experienced professionals, state-of-the-art equipment, and commitment to excellence ensure that every project meets the highest standards of safety and quality. We pride ourselves on our reputation for integrity, innovation, and outstanding customer service.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <img src="/placeholder.png" alt="Who We Are" className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300" />
                    </div>
                </div>
            </div>

            {/* History Section */}
            <div className="py-20 bg-gradient-to-r from-gray-100 to-gray-250 shadow-inner min-h-screen">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-6xl font-bold text-gray-800 mb-4">Our History</h2>
                        <hr className="w-1/2 mb-4 border-t-4 border-amber-400" />
                        <div className="bg-white p-4 rounded-xl mb-6 border-8 border-black">
                            <p className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">
                                San Bar Construction Corp. was founded in 1989 by David "Hossie" Sanchez, starting as a pavement markings specialist operating out of a one-bay garage in Los Lunas, New Mexico. Over the years, the company has grown significantly, moving to a 34,000 sq. ft. facility in Albuquerque in 1999. From this strategic location, San Bar provides comprehensive road construction services and specializes in the design, manufacture, and installation of signs. Additionally, the company operates a fully stocked retail store offering a wide range of traffic safety items and PPE construction gear. With a reputation for excellence, San Bar Construction continues to be a leader in the highway and road construction industry in the Southwest.
                            </p>

                        </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <img src="/HossieHistory.JPG" alt="Our History" className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300" />
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="py-20 bg-gradient-radial from-amber-400 to-[#E0AF2A] shadow-inner h-screen flex flex-col md:flex-row items-center">
                {/* Image block */}
                <div className="w-full md:w-1/2 p-6 order-1 md:order-none">
                    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
                        <img src="/HossieSanchez.JPG" alt="David 'Hossie' Sanchez" className="w-full h-full object-cover rounded-lg shadow-2xl transform hover:scale-105 transition duration-300" />
                    </div>
                </div>
                {/* Text block */}
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-8xl md:text-6xl text-center md:text-left mb-4 text-white">Leadership</h2>
                    <hr className="w-full mb-4 border-t-4 border-black" />
                    <div className="p-6 bg-white rounded-2xl mt-6 border-8 border-black">
                        <p className="text-black leading-relaxed mb-6 text-center md:text-left font-serif text-xl">
                            David "Hossie" Sanchez, the visionary founder of San Bar Construction Corp., leads a dedicated team of professionals who drive the company's success. With his extensive industry knowledge and commitment to excellence, Hossie has built a strong foundation for San Bar. Our team, inspired by his leadership, ensures every project meets the highest standards of quality and safety. Together, we bring innovation, integrity, and outstanding customer service to every endeavor, making San Bar a trusted leader in the road construction and signage industry across the Southwest.
                        </p>
                    </div>
                    <div className="w-full text-center mt-10">
                        <a href="/leadership" className="inline-block bg-black hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
                            Meet the Team
                        </a>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="py-20 bg-gradient-to-r from-gray-100 to-gray-250 shadow-inner min-h-screen">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-6xl font-bold mb-4 text-gray-800">Our Core Values</h2>
                        <hr className="w-1/2 mb-4 border-t-4 border-amber-400" />
                        <div className="bg-white p-4 rounded-xl mb-6 border-8 border-black">
                            <ul className="list-disc list-inside">
                                <li className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">Integrity: We conduct our business with the highest level of honesty and ethical standards.</li>
                                <li className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">Quality: We are committed to delivering superior workmanship and materials on every project.</li>
                                <li className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">Safety: We prioritize the safety of our employees, clients, and the community.</li>
                                <li className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">Innovation: We embrace modern technology and innovative practices to enhance our services.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <img src="/placeholder.png" alt="Core Values" className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300" />
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="py-20 bg-gradient-radial from-amber-400 to-[#E0AF2A] shadow-inner min-h-screen">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-6xl font-bold mb-4 text-white">Contact Us</h2>
                        <hr className="w-1/2 mb-4 border-t-4 border-black" />
                        <div className="bg-white p-4 rounded-xl mb-6 border-8 border-black">
                            <p className="text-gray-700 mb-6 leading-relaxed text-xl font-serif">
                                Ready to start your next project? Contact us today for a consultation.
                                <br /><br />
                                <strong>Phone:</strong> [Phone Number]
                                <br />
                                <strong>Email:</strong> [Email Address]
                                <br />
                                <strong>Address:</strong> [Office Address]
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <img src="/placeholder.png" alt="Contact Us" className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
