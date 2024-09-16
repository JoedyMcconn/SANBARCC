import React from "react";

const JobOpportunitiesSection = () => {
    return (
        <section className="relative h-full bg-cover bg-top"
                 style={{backgroundImage: "url('/San-Bar-Construction-Corp1.webp')"}}>
            <div className="flex items-center justify-center h-full">
                <div className="bg-black bg-opacity-85 w-full p-12 md:p-28 rounded-lg text-center">
                    <h2 className="text-8xl md:text-8xl font-bold text-white mb-4">We're Hiring!</h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-6">
                        We have various job opportunities available for dedicated and skilled individuals.
                    </p>
                    <a
                        href="/job-opportunities"
                        className="inline-block bg-blue-500 hover:bg-yellow-500 text-white text-lg font-sans py-2 px-6 rounded transition duration-300">
                        View Job Opportunities
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JobOpportunitiesSection;