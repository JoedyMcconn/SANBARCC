import React from "react";

const servicesData = [
    {
        src: "/SignShop2-1.webp",
        alt: "Sign Printing",
        title: "Signage",
        description: "We offer high-quality signage for various purposes."
    },
    {
        src: "/Striping1-1.webp",
        alt: "Striping",
        title: "Pavement Markings",
        description: "Professional striping services for roads and airports."
    },
    {
        src: "/Guardrail4-1.webp",
        alt: "Guard rails and repairs",
        title: "Guard Rail Repair/Installation",
        description: "Repair and install guard rails effectively."
    },
    {
        src: "/ABQoverheadSign1.webp",
        alt: "Overhead Signs and Structures",
        title: "Overhead Signs/Structures",
        description: "Overhead signs and structures for guidance."
    },
    {
        src: "/RumbleStripProject1.webp",
        alt: "Rumble strip installation",
        title: "Rumble Strip Installation",
        description: "Rumble Strip Installation and service."
    },
    {
        src: "/Striping1-1.webp",
        alt: "Airport Striping",
        title: "Airport Striping",
        description: "Lines and Symbols."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 text-center">
            <div className="container mx-auto px-4">
                <section className="text-black p-8">
                    <div className="max-w-screen-lg mx-auto">
                        <div className="text-center">
                            <h2 className="bg-[#F7D117] text-6xl lg:text-5xl font-bold text-center mb-8 border-4 text-black p-2 inline-block">
                                Contracting Services
                            </h2>
                        </div>

                        {/* Updated Paragraphs */}
                        <div className=" justify-between items-center mb-8 space-y-6 mx-auto">
                            <div
                                className="bg-white text-black p-6 border-2 border-[#F7D117] rounded-2xl shadow-lg lg:w-auto">
                                <p className="text-2xl font-serif">
                                    <strong>San Bar Construction Corp.</strong> remains a leader in delivering
                                    high-quality,
                                    professional services to our industry partners. We
                                    are constantly exploring new ways to enhance productivity with the latest
                                    technologies. As
                                    the industry evolves, San Bar Construction Corp. will continue to adapt and meet its
                                    needs
                                    well into the future. <br/>
                                    Whether we work as the prime or subcontractor, rest assured we will provide the
                                    highest level of quality and service to meet your needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="mb-0.5 border-l-current border-2 border-[#E0AF2A]"/>
                <hr className="mb-0.5 border-dashed border-2 border-black"/>
                <hr className="mt-0.5 mb-8 border-l-current border-2 border-[#E0AF2A]"/>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map(service => (
                        <div key={service.title}
                             className="shadow-lg rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
                            <img src={service.src} alt={service.alt}
                                 className="w-full h-60 object-cover "/>
                            <div className="p-4 bg-white">
                                <h2 className="font-bold text-xl mb-2 font-sans">{service.title}</h2>
                                <p className="text-gray-700 font-serif">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="/services"
                   className="mt-12 inline-block bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded transition duration-300 shadow-md hover:shadow-lg">
                    View All Services
                </a>
            </div>
        </section>
    );
};

export default Services;
