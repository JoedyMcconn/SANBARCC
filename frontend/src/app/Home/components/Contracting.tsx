import React from 'react';

const ContractingServices = () => {
    return (
        <section className="bg-black text-black p-8 mt-16">
            <div className="max-w-screen-lg mx-auto">
                <div className="text-center">
                    <h2 className="bg-[#F7D117] text-6xl lg:text-5xl font-bold text-center mb-8 border-4 text-black p-2 inline-block">
                        Contracting Services
                    </h2>
                </div>

                {/* Updated Paragraphs */}
                <div className=" justify-between items-center mb-8 space-y-6 mx-auto">
                    <div className="bg-white text-black p-6 border-2 border-[#F7D117] rounded-2xl shadow-lg lg:w-auto">
                        <p className="text-2xl font-serif">
                            <strong>San Bar Construction Corp.</strong> remains a leader in delivering high-quality,
                            professional services to our industry partners. We
                            are constantly exploring new ways to enhance productivity with the latest technologies. As
                            the industry evolves, San Bar Construction Corp. will continue to adapt and meet its needs
                            well into the future. <br/>
                            Whether we work as the prime or subcontractor, rest assured we will provide the highest level of quality and service to meet your needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContractingServices;
