'use client'

import React, {useState} from 'react';

export default function RoadwaySigns() {
    return (
        <section id="roadway-signs" className="relative min-h-screen py-16 bg-center bg-yellow-300 mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover" style={{ backgroundImage: "url('/SignShop1.JPG')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Roadway Signs: Fabrication & Installation</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">

                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white rounded-lg flex flex-wrap items-center p-4 md:p-6">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black">3M Certified Sign
                                Fabricator</h2>
                            <hr className="w-full border-b-4 border-yellow-300 mb-4"/>

                            <div className='lg:hidden flex'>
                                <FabSignImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                We take great pride in being a 3M Certified Sign Fabricator. Our 13,000 square foot
                                state-of-the-art sign shop is one of the largest in the Southwest. We manufacture and
                                install a wide range of signs, from single Handicap signs to the largest overhead sign
                                structures.
                            </p>
                        </div>
                        <div className="hidden w-full lg:w-1/2 lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="3M Certified Sign Fabricator" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="3M Certified Sign Fabricator" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="3M Certified Sign Fabricator" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 1: Regulatory Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white rounded-lg flex flex-wrap items-center p-4 md:p-6">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Regulatory Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <RegulatorySignImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Ensure compliance with local, state, and federal regulations with our high-quality
                                regulatory signs.
                            </p>
                        </div>
                        <div className="hidden w-full lg:w-1/2 lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="/placeholder.png" alt="Regulatory Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Regulatory Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Regulatory Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Regulatory Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 2: Warning Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white rounded-lg flex items-center p-4 md:p-6">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Warning Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <WarningSignImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Enhance roadway safety with our durable and highly visible warning signs.
                            </p>
                        </div>
                        <div className="hidden w-full lg:w-1/2 lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Warning Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Warning Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Warning Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Warning Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 3: Guide Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white rounded-lg flex items-center p-4 md:p-6">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Guide Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <GuideSignImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Provide clear directions and information with our custom guide signs.
                            </p>
                        </div>
                        <div className="hidden w-full lg:w-1/2 lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Guide Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Guide Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Guide Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Guide Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 4: Political Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Political Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <PoliticalSignImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Create impactful political signs for your campaigns with our expert services.
                            </p>
                        </div>
                        <div className="hidden w-full lg:w-1/2 lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Political Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Political Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Political Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Political Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 5: Specialty Signs */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Specialty Signs</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <SpecialtySignImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Customize any sign you need with our specialty sign services.
                            </p>
                        </div>
                        <div className="hidden w-full lg:w-1/2 lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Specialty Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Specialty Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Specialty Signs" className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Specialty Signs" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

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

const FabSignImages = () => {
    const images = [
        { src: '/placeholder.png?text=Slide+1' },
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

const RegulatorySignImages = () => {
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

const WarningSignImages = () => {
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

const GuideSignImages = () => {
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

const PoliticalSignImages = () => {
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

const SpecialtySignImages = () => {
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