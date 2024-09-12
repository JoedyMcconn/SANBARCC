import React from 'react';
const WaterBlastingPage: React.FC = () => {
    return (
        <section id="sand-water-blasting" className="relative min-h-screen bg-[#F7D117] py-8 mt-10">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/WaterBlasting2.webp')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Water Blasting</h1>
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
                                Blasting</h2>
                            <hr className="w-full border-t-4 border-blue-300 mb-4"/>

                            <div className="lg:hidden flex w-full">
                                <img src="/placeholder.png" alt="Professional Water Blasting Services"
                                     className="w-full h-auto rounded-lg"/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                San Bar owns 2 high power and  adjustable water pressure ranges from 10,000 psi to 40,000 psi, enabling
                                precise control for delicate or aggressive removal as needed. The New Mexico
                                D.O.T. requires this process for both temporary and permanent traffic
                                marking removal.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:flex">
                            <img src="/c" alt="Professional Water Blasting Services"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};
export default WaterBlastingPage;
