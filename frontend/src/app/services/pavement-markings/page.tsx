'use client'

import React, {useState} from 'react';

const PavementMarkingsPage: React.FC = () => {
    return (
        <section id="pavement-markings" className="relative min-h-screen py-16 bg-[#F7D117] mt-8">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/PavementMarkingsBanner.jpg')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Pavement Markings: Installation & Maintenance</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Introduction */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">

                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Professional Pavement
                                Marking Services</h2>
                            <hr className="w-full border-t-4 border-yellow-300 mb-4"/>

                            <div className='lg:hidden flex'>
                                <ProfPavementImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Pavement markings are essential for guiding and managing traffic on roadways. They
                                provide critical information to drivers and pedestrians, enhancing safety and efficiency
                                on our roads. San Bar Construction Corp offers comprehensive pavement marking services
                                using high-quality materials and state-of-the-art application techniques.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 hidden gap-4">
                        <img src="/IntersectionStriping.jpg" alt="Intersection Striping" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 1: Longitudinal Markings */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Longitudinal
                                Markings</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <LongitudinalMarkingImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Longitudinal markings are the lines that run parallel to the direction of travel. These
                                include centerlines, edge lines, and lane lines. They help delineate traffic lanes,
                                provide guidance, and improve overall road safety.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Paint</li>
                                    <li>Thermoplastic</li>
                                    <li>Preformed tape</li>
                                    <li>Epoxy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="/placeholder.png" alt="Longitudinal Markings"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Longitudinal Markings"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Longitudinal Markings"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Longitudinal Markings"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 2: Transverse Markings */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Transverse Markings</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <TransverseMarkingImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Transverse markings include stop lines, crosswalks, and other markings that run
                                perpendicular to the flow of traffic. These markings indicate where vehicles should stop
                                and where pedestrians can cross safely.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Thermoplastic</li>
                                    <li>Preformed tape</li>
                                    <li>Paint</li>
                                    <li>Epoxy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                                <img src="/placeholder.png" alt="Transverse Markings"
                                     className="m-5 w-full h-auto rounded-lg"/>
                                <img src="/placeholder.png" alt="Transverse Markings"
                                     className="m-5 w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Symbols and Legends */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Symbols and Legends</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <SymbolsLegendImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Symbols and legends on the roadway provide important information to drivers. These
                                include arrows, text legends like "STOP" or "ONLY," and various other symbols that guide
                                and control traffic.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Preformed thermoplastic</li>
                                    <li>Stencil and paint</li>
                                    <li>Preformed tape</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="/placeholder.png" alt="Symbols and Legends"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Symbols and Legends"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Symbols and Legends"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Symbols and Legends"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 4: Raised Pavement Markers */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Raised & Recessed Pavement
                                Markers</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <RaisedPavementMarkerImages/>
                            </div>

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Raised pavement markers (RPMs) provide enhanced visibility and guidance, especially at
                                night and during adverse weather conditions. They are often used to supplement other
                                types of pavement markings.
                            </p>
                            <div>
                                <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Epoxy adhesives</li>
                                    <li>Butyl pads</li>
                                    <li>Mechanical fasteners</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="/placeholder.png" alt="Raised Pavement Markers"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Raised Pavement Markers"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Raised Pavement Markers"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="Raised Pavement Markers"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Section 5: High-Performance Pavement Markings */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">High-Performance Pavement
                                Markings</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>

                            <div className='lg:hidden flex'>
                                <PerformancePavementMarkingImages/>
                            </div>

                            <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                High-performance pavement markings are designed for enhanced durability and visibility.
                                These markings are ideal for areas with high traffic volumes and severe weather
                                conditions.
                            </p>
                            <div>
                                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <strong>Application Methods</strong>
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>Thermoplastic</li>
                                    <li>Epoxy</li>
                                    <li>Preformed tape</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 hidden lg:grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="/placeholder.png" alt="High-Performance Pavement Markings"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="High-Performance Pavement Markings"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="High-Performance Pavement Markings"
                                 className="m-5 w-full h-auto rounded-lg"/>
                            <img src="/placeholder.png" alt="High-Performance Pavement Markings"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>
                {/* Section 6: Drone Video */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-4 md:p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Interstate Striping</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 font-sans">
                                Watch our drone footage to see our pavement marking projects from a unique aerial perspective.
                            </p>
                            <div className="w-full">
                                <video controls className="w-full rounded-lg">
                                    <source src="/OverheadStripingTucumcari.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default PavementMarkingsPage;


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

const ProfPavementImages = () => {
    const images = [
        { src: '/IntersectionStriping.jpg'},
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

const LongitudinalMarkingImages = () => {
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

const TransverseMarkingImages = () => {
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

const SymbolsLegendImages = () => {
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

const RaisedPavementMarkerImages = () => {
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

const PerformancePavementMarkingImages = () => {
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
