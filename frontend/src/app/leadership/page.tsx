import React from 'react';

const Leadership = () => {
    return (
        <div className="bg-gray-100 py-8 mt-8"> {/* Added mt-10 for spacing */}
            {/* Banner Section */}
            <div className="relative h-96 flex items-center justify-center text-white">
                <img
                    src="/path-to-banner-image.jpg" // Replace with the actual path to your banner image
                    alt="Leadership Banner"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                <h1 className="relative z-10 text-5xl font-bold">Leadership</h1>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-8">
                <p className="text-gray-600 text-lg">
                    Our leadership team at SanBar Construction is composed of experienced and dedicated professionals who ensure the highest standards of excellence, innovation, and safety across all our projects.
                </p>

                {/* Placeholder for Team Members */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

                    <div className="bg-yellow-400 shadow-lg rounded-lg p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Owner</h3>
                        <img
                            src="/HossieSanchez.JPG"
                            alt="Hossie Sanchez"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-gray-800 font-semibold">David "Hossie" Sanchez</p>
                        <p className="text-gray-600">Hossie@sanbarcc.com</p>
                    </div>

                    <div className="bg-yellow-400 shadow-lg rounded-lg p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Chief Financial Officer</h3>
                        <img
                            src="/ShaunBerry.JPG"
                            alt="Shaun Berry"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-gray-800 font-semibold">Shaun Berry</p>
                        <p className="text-gray-600">Email: Shaun@sanbarcc.com</p>
                    </div>

                    <div className="bg-yellow-400 shadow-lg rounded-lg p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">SVP of Business & Market Dev.</h3>
                        <img
                            src="/FrankSanchez.JPG"
                            alt="Frank Sanchez"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-gray-800 font-semibold">Frank Sanchez</p>
                        <p className="text-gray-600">Email: Frank@sanbarcc.com</p>
                    </div>


                    <div className="bg-yellow-400 shadow-lg rounded-lg p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fleet Manager</h3>
                        <img
                            src="/SamBoggs.JPG"
                            alt="Sam Boggs"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-gray-800 font-semibold">Sam Boggs</p>
                        <p className="text-gray-600">sam@sanbarcc.com</p>
                    </div>


                    <div className="bg-yellow-400 shadow-lg rounded-lg p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Purchasing agent, Retail sales</h3>
                        <img
                            src="/LarryMoritomo.JPG"
                            alt="Larry Moritomo"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-gray-800 font-semibold">Larry Moritomo</p>
                        <p className="text-gray-600">Larry@sanbarcc.com</p>
                    </div>

                    <div className="bg-yellow-400 shadow-lg rounded-lg p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Operations Manager</h3>
                        <img
                            src="/KyleMoritomo.JPG"
                            alt="Kyle Moritomo"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-gray-800 font-semibold">Kyle Moritomo</p>
                        <p className="text-gray-600">Kyle@sanbarcc.com</p>
                    </div>

                    <div className="bg-yellow-400 shadow-lg rounded-lg p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sign Shop Manager</h3>
                        <img
                            src="/OctaviaChavez.JPG"
                            alt="Octavia Chavez"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-gray-800 font-semibold">Octavia Chavez</p>
                        <p className="text-gray-600">Email: Octavia@sanbarcc.com</p>
                    </div>


                    <div className="bg-yellow-400 shadow-lg rounded-lg p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Operations Manager Assistant</h3>
                        <img
                            src="/MicahSanchez.JPG"
                            alt="Micah Sanchez"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-lg text-gray-800 font-semibold">Micah Sanchez</p>
                        <p className="text-gray-600">Email: Micah@sanbarcc.com</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Leadership;
