import React from 'react';
const PavementMarkingsPage: React.FC = () => {
    return (
        <section id="pavement-markings" className="relative min-h-screen py-16 bg-yellow-300 mt-8">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/PavementMarkingsBanner.jpg')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Pavement Markings: Installation & Maintenance</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Professional Pavement Marking Services</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Pavement markings are essential for guiding and managing traffic on roadways. They provide critical information to drivers and pedestrians, enhancing safety and efficiency on our roads. San Bar Construction Corp offers comprehensive pavement marking services using high-quality materials and state-of-the-art application techniques.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Professional Pavement Marking Services" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Professional Pavement Marking Services" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Professional Pavement Marking Services" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 1: Longitudinal Markings */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Longitudinal Markings</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Longitudinal markings are the lines that run parallel to the direction of travel. These include centerlines, edge lines, and lane lines. They help delineate traffic lanes, provide guidance, and improve overall road safety.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Paint</li>
                                    <li>Thermoplastic</li>
                                    <li>Preformed tape</li>
                                    <li>Epoxy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Longitudinal Markings" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Longitudinal Markings" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Longitudinal Markings" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Longitudinal Markings" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 2: Transverse Markings */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Transverse Markings</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Transverse markings include stop lines, crosswalks, and other markings that run perpendicular to the flow of traffic. These markings indicate where vehicles should stop and where pedestrians can cross safely.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Thermoplastic</li>
                                    <li>Preformed tape</li>
                                    <li>Paint</li>
                                    <li>Epoxy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <img src="/placeholder.png" alt="Transverse Markings" className="m-5 w-full h-auto rounded-lg"/>
                                <img src="/placeholder.png" alt="Transverse Markings" className="m-5 w-full h-auto rounded-lg"/>
                            </div>
                            <div className="mt-5 md:mt-0">
                                <video controls className="w-full rounded-lg md:hidden">
                                    <source src="" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="hidden md:block">
                                    <video controls className="w-full rounded-lg mt-5">
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section 3: Symbols and Legends */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Symbols and Legends</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Symbols and legends on the roadway provide important information to drivers. These include arrows, text legends like "STOP" or "ONLY," and various other symbols that guide and control traffic.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Preformed thermoplastic</li>
                                    <li>Stencil and paint</li>
                                    <li>Preformed tape</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Symbols and Legends" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Symbols and Legends" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Symbols and Legends" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Symbols and Legends" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 4: Raised Pavement Markers */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Raised Pavement Markers</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Raised pavement markers (RPMs) provide enhanced visibility and guidance, especially at night and during adverse weather conditions. They are often used to supplement other types of pavement markings.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Epoxy adhesives</li>
                                    <li>Butyl pads</li>
                                    <li>Mechanical fasteners</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Raised Pavement Markers" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Raised Pavement Markers" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Raised Pavement Markers" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Raised Pavement Markers" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 5: High-Performance Pavement Markings */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">High-Performance Pavement Markings</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                High-performance pavement markings are designed for enhanced durability and visibility. These markings are ideal for areas with high traffic volumes and severe weather conditions.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Thermoplastic</li>
                                    <li>Epoxy</li>
                                    <li>Preformed tape</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="High-Performance Pavement Markings" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="High-Performance Pavement Markings" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="High-Performance Pavement Markings" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="High-Performance Pavement Markings" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PavementMarkingsPage;
