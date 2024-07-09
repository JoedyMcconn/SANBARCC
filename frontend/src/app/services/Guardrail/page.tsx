"use client"
import React from 'react';
const GuardrailPage: React.FC = () => {
    return (
        <section id="guardrail" className="relative min-h-screen py-16 bg-amber-300 mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/GuardRailTruck.JPG')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Guardrail Installation & Repair</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Professional Guardrail Services</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Guardrails serve as a safety barrier designed to prevent vehicles from leaving the roadway and to reduce the severity of crashes when they occur. They are typically installed in areas where the consequences of a vehicle leaving the roadway would be more severe than striking the guardrail itself, such as near steep embankments, bridge piers, or roadside obstacles.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/placeholder.png" alt="Professional Guardrail Services" className=" m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 1: Expertise and Experience */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Expertise and Experience</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                With decades of experience in the industry, San Bar Construction Corp has built a reputation for excellence in guardrail services. Our team is trained to handle all aspects of guardrail installation and repair, ensuring that every project is completed to the highest standards.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/placeholder.png" alt="Expertise and Experience" className=" m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 2: Safety and Compliance */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Safety and Compliance</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                At San Bar Construction Corp, we adhere to the highest standards of safety and compliance in guardrail installation and maintenance. Our materials and designs comply with federal guidelines, including those outlined by the Federal Highway Administration (FHWA) and the Manual for Assessing Safety Hardware (MASH).
                            </p>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <strong>Key Safety Guidelines</strong><br/>
                                <em>Crashworthiness</em><br/>
                                Guardrails must meet specific crash test criteria to be considered crashworthy. These tests evaluate the guardrail's ability to safely redirect vehicles and absorb impact energy. The crash tests are performed under controlled conditions to simulate real-world scenarios and assess the guardrail's performance.
                            </p>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <em>Clear Zones</em><br/>
                                The clear zone is the area immediately adjacent to the roadway that should be free of fixed objects that could be hazardous to errant vehicles. Guardrails are installed to protect vehicles from more severe hazards within the clear zone. The clear zone width varies depending on factors such as traffic speed, volume, and roadway geometry.
                            </p>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <em>Installation and Maintenance</em><br/>
                                Proper installation is crucial for the guardrail to function as intended. This includes ensuring correct post spacing, height, and the use of appropriate end terminals. Regular maintenance and inspection are required to ensure that guardrails remain effective over time. This includes repairing any damage promptly and replacing worn-out components.
                            </p>
                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <em>End Terminals</em><br/>
                                End terminals must be designed to absorb impact energy and minimize the risk of vehicle penetration or vaulting. Energy-absorbing end terminals are a common design that helps dissipate impact forces safely.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="/placeholder.png" alt="Safety and Compliance" className=" m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 4: Drone Footage */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="w-full bg-white p-6 rounded-lg">
                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Drone Footage</h2>
                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                        <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                            Take a look at our guardrail installations from a unique perspective. Our drone footage showcases the precision and professionalism that go into every project.
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
};
export default GuardrailPage;