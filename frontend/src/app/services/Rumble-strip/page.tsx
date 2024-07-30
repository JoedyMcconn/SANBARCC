"use client";
import React from 'react';

export default function RumbleStripPage() {
    return (
        <section id="rumble-strip" className="relative min-h-screen py-16 bg-[#F7D117] mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.png')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Rumble Strip Installation & Maintenance</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Professional Rumble Strip Services</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>
                            <div className="lg:hidden flex w-full">
                                <img src="/placeholder.png" alt="Professional Rumble Strip Services"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Rumble strips are an essential safety feature on roads, providing tactile and auditory
                                feedback to drivers. Our professional installation services ensure that rumble strips
                                are placed accurately and efficiently, enhancing road safety.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/placeholder.png" alt="Professional Rumble Strip Services"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 1: Expertise and Experience */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Expertise and Experience</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <div className="lg:hidden flex w-full">
                                <img src="/placeholder.png" alt="Expertise and Experience"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                With decades of experience in the industry, San Bar Construction Corp has built a
                                reputation for excellence in rumble strip services. Our team is trained to handle all
                                aspects of rumble strip installation and maintenance, ensuring that every project is completed
                                to the highest standards.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/placeholder.png" alt="Expertise and Experience"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 2: Safety and Compliance */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Safety and Compliance</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <div className="lg:hidden flex w-full">
                                <img src="/placeholder.png" alt="Safety and Compliance"
                                     className="w-full h-auto rounded-lg"/>
                            </div>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                At San Bar Construction Corp, we adhere to the highest standards of safety and
                                compliance in rumble strip installation and maintenance. Our materials and designs comply
                                with federal guidelines, ensuring the safety of all road users.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <strong>Key Safety Guidelines</strong><br/>
                                <em>Installation and Maintenance</em><br/>
                                Proper installation is crucial for rumble strips to function as intended. This includes
                                ensuring correct spacing, depth, and placement. Regular maintenance and inspection are required
                                to ensure that rumble strips remain effective over time.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/placeholder.png" alt="Safety and Compliance"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 3: Drone Footage */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="w-full bg-white p-4 md:p-6 rounded-lg">
                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Drone Footage</h2>
                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                            Take a look at our rumble strip installations from a unique perspective. Our drone footage
                            showcases the precision and professionalism that go into every project.
                        </p>
                        <div className="mt-6">
                            <video controls className="w-full rounded-lg">
                                <source src="" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
