import React from 'react';
export default function GuardrailPage()  {
    return (
        <section id="guardrail" className="relative min-h-screen py-16 bg-[#F7D117] mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/Guardrail4-1.webp')" }}>
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
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center justify-center">
                        <div className="w-full">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black text-center mb-4">Professional Guardrail
                                Services</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/CableBarrierBanner.webp" alt="Professional Guardrail Services"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Guardrails serve as a safety barrier designed to prevent vehicles from leaving the
                                roadway and to reduce the severity of crashes when they occur. They are typically
                                installed in areas where the consequences of a vehicle leaving the roadway would be more
                                severe than striking the guardrail itself, such as near steep embankments, bridge piers,
                                or roadside obstacles.
                            </p>
                        </div>
                        <div className="mt-6">
                            <video controls className="w-full rounded-lg">
                                <source src="/GuardrailFootage.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>

                {/* Section 1: Expertise and Experience */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Expertise and
                                Experience</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/GuardRailProject1.webp" alt="Expertise and Experience"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                With decades of experience in the industry, San Bar Construction Corp has built a
                                reputation for excellence in guardrail services. Our team is trained to handle all
                                aspects of guardrail installation and repair, ensuring that every project is completed
                                to the highest standards.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/GuardRailProject1.webp" alt="Expertise and Experience"
                                 className=" m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 2: Safety and Compliance */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center justify-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Safety and
                                Compliance</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/GuardRailTruck8.webp" alt="Safety and Compliance"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                At San Bar Construction Corp, we adhere to the highest standards of safety and
                                compliance in guardrail installation and maintenance. Our materials and designs comply
                                with federal guidelines, including those outlined by the Federal Highway Administration
                                (FHWA) and the Manual for Assessing Safety Hardware (MASH).
                            </p>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Proper installation is crucial for the guardrail to function as intended. This includes
                                ensuring correct post spacing, height, and the use of appropriate end terminals. Regular
                                maintenance and inspection are required to ensure that guardrails remain effective over
                                time. This includes repairing any damage promptly and replacing worn-out components.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/GuardRailTruck8.webp" alt="Safety and Compliance"
                                 className=" m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
