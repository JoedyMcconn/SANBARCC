'use client'

import React, {useState} from 'react';

function OverheadSignStructuresPage() {
    return (
        <section id="overhead-sign-structures" className="relative min-h-screen py-16 bg-[#E0AF2A] mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/SignStructure4.JPG')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Erecting Overhead Sign Structures</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">

                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Professional Overhead
                                Sign Structures</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>

                            <div className='lg:hidden flex mb-4'>
                                <ProfOverheadSignImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Sign structures come in 3 different styles; Cantilever, Bridge or Butterfly (“T” shape)
                                and in various sizes ranging from 18” in diameter up to the larger 40” diameter
                                structures. The basic components of any sign structure installation consist of a drilled
                                shaft; rebar cage, bolt assembly, 3000 psi concrete, sign structure and the sign(s)
                                themselves. Some drilled shafts can reach up to 65’ in depth depending on the terrain
                                and size of the structure.
                            </p>
                        </div>
                        <div className="h-4 gap-4">
                            <img src="/SignStructure3.JPG" alt="Professional Overhead Sign Structures"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>


                {/* Section 1: Installation Services */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Installation
                                Services</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex mb-4'>
                                <InstallationServiceImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Our installation services ensure that your overhead sign structures are installed with
                                precision and expertise. We use high-quality materials and advanced equipment to deliver
                                reliable and durable installations.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Installation Process</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Drilled Shaft Foundations</li>
                                    <li>Rebar Cage Assembly</li>
                                    <li>Bolt Assembly and Concrete Pouring</li>
                                    <li>Sign Structure Erection</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Installation Services"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Installation Services"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Installation Services"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Installation Services"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 3: Maintenance */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Maintenance</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex mb-4'>
                                <MaintenanceImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Regular maintenance is crucial for the longevity and safety of overhead sign structures. Our team provides comprehensive maintenance services to ensure that your signs remain in optimal condition.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Maintenance Services</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Inspection and Assessment</li>
                                    <li>Structural Repairs</li>
                                    <li>Repainting and Resurfacing</li>
                                    <li>Sign Replacement</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Maintenance" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Maintenance" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Maintenance" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Maintenance" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OverheadSignStructuresPage;

const Carousel: React.FC<{ images: { src: string }[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto">
            <div className="overflow-hidden lg:rounded-xl relative">
                <img src={images[currentIndex].src} alt={`Slide ${currentIndex}`} className="w-full h-96 object-cover" />
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black/60 text-white ms-1 p-1 rounded-full hover:bg-gray-600"
            >
                &#9664;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black/60 text-white me-1 p-1 rounded-full hover:bg-gray-600"
            >
                &#9654;
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-black/80'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const ProfOverheadSignImages = () => {
    const images = [
        { src: '/SignStructure4.JPG' },
        { src: '/placeholder.png?text=Slide+2' },
        { src: '/placeholder.png?text=Slide+3' },
        { src: '/placeholder.png?text=Slide+4' },
        { src: '/placeholder.png?text=Slide+5' }
    ];

    return (
        <section>
            <Carousel images={images} />
        </section>
    );
};

const CustomDesignImages = () => {
    const images = [
        { src: '/placeholder.png?text=Slide+A' },
        { src: '/placeholder.png?text=Slide+B' },
        { src: '/placeholder.png?text=Slide+C' },
        { src: '/placeholder.png?text=Slide+D' },
        { src: '/placeholder.png' }
    ];

    return (
        <section>
            <Carousel images={images} />
        </section>
    );
};

const InstallationServiceImages = () => {
    const images = [
        { src: '/placeholder.png?text=Slide+X' },
        { src: '/placeholder.png?text=Slide+Y' },
        { src: '/placeholder.png?text=Slide+Z' },
        { src: '/placeholder.png?text=Slide+W' },
        { src: '/placeholder.png' }
    ];

    return (
        <section>
            <Carousel images={images} />
        </section>
    );
};

const MaintenanceImages = () => {
    const images = [
        { src: '/placeholder.png?text=Slide+A' },
        { src: '/placeholder.png?text=Slide+B' },
        { src: '/placeholder.png?text=Slide+C' },
        { src: '/placeholder.png?text=Slide+D' },
        { src: '/placeholder.png' }
    ];

    return (
        <section>
            <Carousel images={images} />
        </section>
    );
};
