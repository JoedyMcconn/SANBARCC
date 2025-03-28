import React from 'react';

const Leadership = () => {
    return (
        <div className="bg-black py-8 mt-8"> {/* Black background for the section */}
            {/* Banner Section */}
            <div className="relative h-96 flex items-center justify-center text-white">
                <img
                    src="/path-to-banner-image.jpg" // Replace with the actual path to your banner image
                    alt="Leadership Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="flex justify-center mb-10">
                    <div className="bg-yellow-500 p-2">
                        <div className="bg-black p-4 shadow-lg">
                            <h2 className="text-white text-3xl lg:text-6xl font-semibold">Leadership</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-8">

                {/* Top Paragraph with Border and Background */}
                <div className="bg-gray-900 border-4 border-[#F7D117] text-white p-6 rounded-lg mx-auto max-w-lg md:max-w-3xl mb-6">
                    <p className="text-xl md:text-2xl">
                    Our leadership team at SanBar Construction is composed of experienced and dedicated professionals who ensure the highest standards of excellence, innovation, and safety across all our projects.
                    </p>
                </div>

                {/* Placeholder for Team Members */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center border-4 border-[#F7D117]">
                        <h3 className="text-2xl font-semibold text-black mb-4">Owner</h3>
                        <img
                            src="/HossieSanchez1.webp"
                            alt="Hossie Sanchez"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-black font-semibold">David "Hossie" Sanchez</p>
                        <p className="text-gray-800">Hossie@sanbarcc.com</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center border-4 border-[#F7D117]">
                        <h3 className="text-2xl font-semibold text-black mb-4">Chief Financial Officer</h3>
                        <img
                            src="/ShaunBerry1.webp"
                            alt="Shaun Berry"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-black font-semibold">Shaun Berry</p>
                        <p className="text-gray-800">Shaun@sanbarcc.com</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center border-4 border-[#F7D117]">
                        <h3 className="text-2xl font-semibold text-black mb-4">SVP of Business & Market Dev.</h3>
                        <img
                            src="/FrankSanchez1.webp"
                            alt="Frank Sanchez"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-black font-semibold">Frank Sanchez</p>
                        <p className="text-gray-800">Frank@sanbarcc.com</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center border-4 border-[#F7D117]">
                        <h3 className="text-2xl font-semibold text-black mb-4">Fleet Manager</h3>
                        <img
                            src="/SamBoggs1.webp"
                            alt="Sam Boggs"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-black font-semibold">Sam Boggs</p>
                        <p className="text-gray-800">sam@sanbarcc.com</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center border-4 border-[#F7D117]">
                        <h3 className="text-2xl font-semibold text-black mb-4">Purchasing agent, Retail sales</h3>
                        <img
                            src="/LarryMoritomo1.webp"
                            alt="Larry Moritomo"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-black font-semibold">Larry Moritomo</p>
                        <p className="text-gray-800">Larry@sanbarcc.com</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center border-4 border-[#F7D117]">
                        <h3 className="text-2xl font-semibold text-black mb-4">Operations Manager</h3>
                        <img
                            src="/KyleMoritomo1.webp"
                            alt="Kyle Moritomo"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-black font-semibold">Kyle Moritomo</p>
                        <p className="text-gray-800">Kyle@sanbarcc.com</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center border-4 border-[#F7D117]">
                        <h3 className="text-2xl font-semibold text-black mb-4">Sign Shop Manager</h3>
                        <img
                            src="/OctaviaChavez1.webp"
                            alt="Octavia Chavez"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-black font-semibold">Octavia Chavez</p>
                        <p className="text-gray-800">Octavia@sanbarcc.com</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-4 text-center border-4 border-[#F7D117]">
                        <h3 className="text-2xl font-semibold text-black mb-4">Operations Manager Assistant</h3>
                        <img
                            src="/MicahSanchez1.webp"
                            alt="Micah Sanchez"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-black font-semibold">Micah Sanchez</p>
                        <p className="text-gray-800">Micah@sanbarcc.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;
