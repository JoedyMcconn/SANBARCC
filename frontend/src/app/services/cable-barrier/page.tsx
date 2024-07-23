import React from 'react';

export default function CableBarrierPage () {
    return (
        <section id="cable-barrier" className="relative min-h-screen py-16 bg-[#E0AF2A] mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.png')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Cable Barrier Installation & Repair</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">

                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Professional Cable
                                Barrier Services</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/placeholder.png" alt="Professional Cable Barrier Services"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Cable barriers are a flexible safety barrier system designed to prevent vehicles from
                                crossing into opposing traffic lanes and to reduce the severity of crashes. They are
                                typically installed in medians and other high-risk areas to enhance road safety.
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:w-1/3 sm:w-full hidden lg:flex">
                            <img src="/placeholder.png" alt="Professional Cable Barrier Services"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 1: Expertise and Experience */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Expertise and
                                Experience</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/placeholder.png" alt="Expertise and Experience"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                With decades of experience in the industry, San Bar Construction Corp has built a
                                reputation for excellence in cable barrier services. Our team is trained to handle all
                                aspects of cable barrier installation and repair, ensuring that every project is
                                completed to the highest standards.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/placeholder.png" alt="Expertise and Experience"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 2: Safety and Compliance, Quality Materials and Equipment */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Safety, Compliance, and
                                Quality Materials</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className="w-full">
                                <img src="/placeholder.png" alt="Safety and Compliance"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                At San Bar Construction Corp, we adhere to the highest standards of safety and
                                compliance in cable barrier installation and maintenance. Our materials and designs
                                comply with federal guidelines, including those outlined by the Federal Highway
                                Administration (FHWA) and the Manual for Assessing Safety Hardware (MASH).
                            </p>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <strong>Key Safety Guidelines</strong><br/>
                                <em>Crashworthiness</em><br/>
                                Cable barriers must meet specific crash test criteria to be considered crashworthy.
                                These tests evaluate the barrier's ability to safely redirect vehicles and absorb impact
                                energy. The crash tests are performed under controlled conditions to simulate real-world
                                scenarios and assess the barrier's performance.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <em>Clear Zones</em><br/>
                                The clear zone is the area immediately adjacent to the roadway that should be free of
                                fixed objects that could be hazardous to errant vehicles. Cable barriers are installed
                                to protect vehicles from more severe hazards within the clear zone. The clear zone width
                                varies depending on factors such as traffic speed, volume, and roadway geometry.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <em>Installation and Maintenance</em><br/>
                                Proper installation is crucial for the cable barrier to function as intended. This
                                includes ensuring correct post spacing, tension, and the use of appropriate end
                                terminals. Regular maintenance and inspection are required to ensure that cable barriers
                                remain effective over time. This includes repairing any damage promptly and replacing
                                worn-out components.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <em>End Terminals</em><br/>
                                End terminals must be designed to absorb impact energy and minimize the risk of vehicle
                                penetration or vaulting. Energy-absorbing end terminals are a common design that helps
                                dissipate impact forces safely.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <strong>State-Specific Standards</strong><br/>
                                Each state may have additional guidelines and standards that complement federal
                                regulations. For example, the Florida Department of Transportation (FDOT) provides
                                specific design standards and installation requirements for cable barriers within the
                                state.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                For detailed information on safety guidelines and standards, you can refer to resources
                                provided by the FHWA, AASHTO, and state transportation departments. These documents
                                provide comprehensive information on all aspects of cable barrier safety, from design
                                and installation to maintenance and performance evaluation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 4: Drone Footage */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="w-full bg-white p-4 md:p-6 rounded-lg">
                        <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Drone Footage</h2>
                        <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                            Take a look at our cable barrier installations from a unique perspective. Our drone footage
                            showcases the precision and professionalism that go into every project.
                        </p>
                        <div className="mt-6">
                            <video controls className="w-full rounded-lg">
                                <source src="/CableBarrierDroneFootage.MP4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
