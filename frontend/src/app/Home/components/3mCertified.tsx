import React from 'react';

const ThreeMCertified = () => {
    return (
        <section className="py-20 bg-black flex flex-col md:flex-row items-center">
            {/* Image block */}
            <div className="w-full md:w-1/2 p-6">
                <img
                    src="/3MCertifiedSign.png"
                    alt="3M Certified Sign Fabricator"
                    className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
                />
            </div>
            {/* Text block */}
            <div className="w-full md:w-1/2 p-6">
                <h2 className="text-6xl text-center md:text-left mb-4 text-[#F7D117]">3M Certified Sign Fabricator</h2>
                <hr className="w-full mb-4 border-t-4 border-black" />
                <div className="p-6 bg-[#F7D117] rounded-2xl mt-6 border-8 border-black">
                    <p className="text-black leading-relaxed mb-6 text-center md:text-left font-serif text-xl">
                        San Bar Construction Corp. is proud to be one of the few certified 3M Sign Fabricators in the United States. This prestigious certification ensures that our signs meet the highest standards of quality and durability, reflecting our commitment to excellence in every project we undertake. As a 3M Certified Sign Fabricator, we use only the best materials and techniques to produce signage that stands the test of time, ensuring safety and reliability on the roads.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ThreeMCertified;
