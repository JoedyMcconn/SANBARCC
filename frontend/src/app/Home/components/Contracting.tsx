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
                <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className="bg-white text-black p-6 border-2 border-[#F7D117] rounded-2xl shadow-lg lg:w-1/2">
                        <p className="text-2xl font-serif">
                            <strong>San Bar Construction Corp.</strong> remains a leader in delivering high-quality, professional services to our industry partners. But our commitment doesn’t stop there. We are constantly exploring new ways to enhance productivity and expand into new markets. As the industry evolves, San Bar Construction Corp. will continue to adapt and meet its needs well into the future.
                        </p>
                    </div>
                    <div className="bg-white text-black p-6 border-2 border-[#F7D117] rounded-2xl shadow-lg lg:w-1/2">
                        <p className="text-2xl font-serif">
                            <strong>San Bar Construction Corp.</strong> lets you rest assured that our team is aware of what the job requires. We have received the necessary training, and the right attitude to complete the job on time. San Bar Construction Corp. works within specification to meet your expectations. Our satisfied customers are some of the largest agencies and most respected contractors in the area, such as:
                        </p>
                    </div>
                </div>

                {/* Updated Lists */}
                <div className="flex justify-center mb-8 space-x-8">
                    <ul className="text-lg lg:text-xl font-serif space-y-4">
                        <li className="bg-white text-center rounded-full p-2">New Mexico Dept of Transportation</li>
                        <li className="bg-white text-center rounded-full p-2">City of Albuquerque</li>
                        <li className="bg-white text-center rounded-full p-2">Mountain States Constructors, Inc.</li>
                        <li className="bg-white text-center rounded-full p-2">City of Roswell</li>
                        <li className="bg-white text-center rounded-full p-2">Fisher Sand & Gravel Co.</li>
                        <li className="bg-white text-center rounded-full p-2">Bernalillo County Public Works</li>
                        <li className="bg-white text-center rounded-full p-2">Constructors, Inc.</li>
                        <li className="bg-white text-center rounded-full p-2">Holloman AFB</li>
                        <li className="bg-white text-center rounded-full p-2">James Hamilton Construction Co.</li>
                        <li className="bg-white text-center rounded-full p-2">FNF Construction, Inc</li>
                        <li className="bg-white text-center rounded-full p-2">Taos County Public Works</li>
                        <li className="bg-white text-center rounded-full p-2">Bureau of Indian Affairs</li>
                    </ul>
                    <ul className="text-lg lg:text-xl font-serif space-y-4">
                        <li className="bg-white text-center rounded-full p-2">Kiewit New Mexico Company</li>
                        <li className="bg-white text-center rounded-full p-2">Mesa Verde Enterprises, Inc.</li>
                        <li className="bg-white text-center rounded-full p-2">Navajo Engineering & Construction Auth.</li>
                        <li className="bg-white text-center rounded-full p-2">White Sands Missile Range</li>
                        <li className="bg-white text-center rounded-full p-2">City of El Paso</li>
                        <li className="bg-white text-center rounded-full p-2">Santa Fe County Public Works</li>
                        <li className="bg-white text-center rounded-full p-2">Skanska USA Civil West</li>
                        <li className="bg-white text-center rounded-full p-2">MWI</li>
                        <li className="bg-white text-center rounded-full p-2">El Terrero Construction, LLC</li>
                        <li className="bg-white text-center rounded-full p-2">City of Las Cruces</li>
                        <li className="bg-white text-center rounded-full p-2">Ames Construction, Inc</li>
                        <li className="bg-white text-center rounded-full p-2">Cannon AFB</li>
                    </ul>
                </div>

                <div className="bg-white text-black p-6 border-2 border-[#F7D117] rounded-2xl shadow-lg">
                    <p className="text-2xl font-serif mb-6">
                        When we work as a subcontractor on a large scale highway project or as the prime contractor on a state price agreement, we do the job right. <strong>San Bar Construction Corp.</strong> will complete every project with skill and responsibility. This results in a job to be proud of. Contact any of our customers to ask them about the level of satisfaction.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContractingServices;
