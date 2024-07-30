import React from 'react';
const SandWaterBlastingPage: React.FC = () => {
    return (
        <section id="sand-water-blasting" className="relative min-h-screen bg-[#F7D117] py-8 mt-12">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.png')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Sand & Water Blasting Services</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Water Blasting Services */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10 min-h-screen flex items-center">
                <div className="w-full bg-black p-4 md:p-6 rounded-lg">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Professional Water
                                Blasting Services</h2>
                            <hr className="w-full border-t-4 border-blue-300 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/placeholder.png" alt="Professional Water Blasting Services"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Our "Stripe Hog" waterblaster features a double 8” head, allowing it to
                                remove a 16” wide line in one pass, saving both time and money. The
                                adjustable water pressure ranges from 10,000 psi to 40,000 psi, enabling
                                precise control for delicate or aggressive removal as needed. The New Mexico
                                D.O.T. requires this process for both temporary and permanent traffic
                                marking removal.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/placeholder.png" alt="Professional Water Blasting Services"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sand Blasting Services */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10 min-h-screen flex items-center">
                <div className="w-full bg-black p-6 rounded-lg">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Professional Sand
                                Blasting Services</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/placeholder.png" alt="Professional Sand Blasting Services"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Sand blasting is a powerful method for cleaning and surface preparation, using
                                compressed air to propel abrasive materials against a surface. This technique
                                effectively removes rust, paint, and other contaminants, leaving the surface clean and
                                ready for further treatment.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/placeholder.png" alt="Professional Sand Blasting Services"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SandWaterBlastingPage;
