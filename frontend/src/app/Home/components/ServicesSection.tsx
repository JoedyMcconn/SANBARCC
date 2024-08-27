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
        title: "Striping",
        description: "Professional striping services for parking lots and roads."
    },
    {
        src: "/TrafficSafety1.webp",
        alt: "Traffic Safety Equipment",
        title: "Traffic Safety",
        description: "Equipment and tools to ensure road safety."
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
        src: "https://www.researchgate.net/publication/341509281/figure/fig1/AS:911297331879936@1594281623421/the-installation-of-Shoulder-Rumble-Strip-left-and-Centerline-rumble-strips-right.jpg",
        alt: "Roadway milling",
        title: "Rumble Strip Installation",
        description: "Rumble Strip Installation."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 text-center">
            <div className="container mx-auto px-4">
                <div
                    className="flex flex-col md:flex-row justify-center items-center mb-5 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="md:w-1/2">
                        <h1 className="font-semibold text-4xl text-[#F7D117] font-sans bg-black rounded-3xl pt-2t">Serving all of New Mexico,<br/>and more!</h1>
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-700 text-xl font-mono bg-[#F7D117] rounded-3xl ">San Bar Construction Corp. is committed to providing a diverse array of services tailored to your needs. We prioritize exceptional craftsmanship and unparalleled customer service in every project we undertake.</p>
                    </div>
                </div>

                <hr className="mb-0.5 border-l-current border-2 border-[#E0AF2A]"/>
                <hr className="mb-0.5 border-dashed border-2 border-black"/>
                <hr className="mt-0.5 mb-8 border-l-current border-2 border-[#E0AF2A]"/>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map(service => (
                        <div key={service.title} className="shadow-lg rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
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
