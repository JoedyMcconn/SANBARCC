
import React from 'react';

const RoadwaySigns: React.FC = () => {
    return (
        <section id="roadway-signs" className="min-h-screen bg-gray-100 py-16">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-banner-image.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-5xl font-bold text-white text-center">Roadway Signs</h1>
                </div>
            </div>

            {/* 3M Certification Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">3M Certified Sign Fabricator</h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                    We take great pride in being a 3M Certified Sign Fabricator. Our 13,000 square foot state-of-the-art sign shop is one of the largest in the Southwest. We manufacture and install a wide range of signs, from single Handicap signs to the largest overhead sign structures.
                </p>
            </div>

            {/* Types of Signs Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 text-center">Types of Roadway Signs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Regulatory Signs */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="h-48 bg-gray-300 rounded-lg mb-4">
                            <img src="/path-to-regulatory-signs-image.jpg" alt="Regulatory Signs" className="h-full w-full object-cover rounded-lg" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Regulatory Signs</h3>
                        <p className="text-gray-600">
                            Ensure compliance with local, state, and federal regulations with our high-quality regulatory signs.
                        </p>
                    </div>
                    {/* Warning Signs */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="h-48 bg-gray-300 rounded-lg mb-4">
                            <img src="/path-to-warning-signs-image.jpg" alt="Warning Signs" className="h-full w-full object-cover rounded-lg" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Warning Signs</h3>
                        <p className="text-gray-600">
                            Enhance roadway safety with our durable and highly visible warning signs.
                        </p>
                    </div>
                    {/* Guide Signs */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="h-48 bg-gray-300 rounded-lg mb-4">
                            <img src="/path-to-guide-signs-image.jpg" alt="Guide Signs" className="h-full w-full object-cover rounded-lg" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Guide Signs</h3>
                        <p className="text-gray-600">
                            Provide clear directions and information with our custom guide signs.
                        </p>
                    </div>
                    {/* Political Signs */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="h-48 bg-gray-300 rounded-lg mb-4">
                            <img src="/path-to-political-signs-image.jpg" alt="Political Signs" className="h-full w-full object-cover rounded-lg" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Political Signs</h3>
                        <p className="text-gray-600">
                            Create impactful political signs for your campaigns with our expert services.
                        </p>
                    </div>
                    {/* Specialty Signs */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="h-48 bg-gray-300 rounded-lg mb-4">
                            <img src="/path-to-specialty-signs-image.jpg" alt="Specialty Signs" className="h-full w-full object-cover rounded-lg" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Specialty Signs</h3>
                        <p className="text-gray-600">
                            Customize any sign you need with our specialty sign services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoadwaySigns;
