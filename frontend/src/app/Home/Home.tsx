'use client'
import { FaBuilding, FaUsers, FaCheckCircle } from 'react-icons/fa';
import {useEffect, useState} from "react";


const Hero = () => {
    // Static background image
    const backgroundImage = '/SanBarFrontEnhanced.png';

    return (
        <div className="relative h-screen flex justify-end">
            {/* Background Image shifted to the right on mobile */}
            <img
                src={backgroundImage}
                alt="SanBar Front Enhanced Background"
                className="absolute inset-0 w-full h-full object-cover object-left md:object-center"
            />

            {/* Subtle Overlay on Desktop Only (hidden on mobile) */}
            <div
                className="hidden md:block absolute inset-y-0 right-0 w-1/3 h-full"
                style={{
                    background: 'linear-gradient(to left, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0))',
                }}
            ></div>

            {/* Wrapper for Top Left Images */}
            <div className="absolute top-0 left-0 hidden md:flex flex-row space-x-2 p-4">
                <img
                    src="/TopLeftHeroLogos.png"
                    alt="ACON New Mexico & ATSSA"
                    className="h-48 md:h-60"
                />
                <img
                    src="/3M_CertifiedEB!.png"
                    alt="3M certified"
                    className="h-36 md:h-48 mt-10"
                />
            </div>

            {/* Text, Button, and Phone Number */}
            <div className="z-10 flex flex-col justify-center w-full md:max-w-lg mr-4 md:mr-8 h-full text-center md:text-right px-4">
                <p className="hidden md:block text-base md:text-xl border-r-amber-400 border-r-4 pr-1 text-gray-300">
                    Serving all of New Mexico since 1989, contact us
                </p>
                <p className="hidden md:block text-base md:text-xl border-r-amber-400 border-r-4 pr-1 mb-10 text-gray-300">
                    today to find out how we can help.
                </p>
                <h2 className="text-8xl md:text-5xl lg:text-4xl font-bold text-white mb-4">San Bar Construction Corp.</h2>
                {/* Contact Button and Phone Number Smaller Side-by-Side on Mobile */}
                <div className="flex flex-row justify-center md:justify-end space-x-2 md:space-x-4">
                    <a
                        href="/contact-us"
                        className="inline-block bg-yellow-400 hover:bg-blue-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg">
                        Contact Us
                    </a>
                    <div className="bg-white text-black p-1 md:p-2 rounded text-sm md:text-lg flex items-center">
                        Call Us: +1 (505) 123-4567
                    </div>
                </div>
            </div>
        </div>
    );
};



const About = () => {

    useEffect(() => {
        const images = document.querySelectorAll('.fade-slide-image');

        const handleScroll = () => {
            images.forEach(image => {
                // Get the rectangle for the image
                const rect = image.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;

                // Add 'is-visible' if the image is in view
                if (rect.top <= windowHeight * 1.25) {
                    image.classList.add('is-visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="About" className="relative min-h-screen py-20 bg-white bg-gradient-to-r from-yellow-400/10 to-black/10">
            <div className="container relative text-center mx-auto px-6 md:px-12 lg:px-16 flex flex-wrap">
                {/* Text block */}
                <div className="w-full md:w-1/2 text-center max-w-2xl z-10 p-6 md:p-12 mx-auto">
                    <div className="relative mb-12">
                        <div className="flex justify-center mb-4">
                            <div className="bg-yellow-500 p-2 mx-5">
                                <div className="bg-black p-4 shadow-lg">
                                    <h2 className="text-white text-6xl lg:text-3xl font-semibold">About San Bar</h2>
                                </div>
                            </div>
                        </div>

                        <hr className="w-96 border-t-4 border-yellow-500 mx-auto mt-8 mb-8"/>
                    </div>

                    <div className="mb-10 p-4 rounded-lg bg-white text-left">
                        <ul className="space-y-6">
                            <li className="flex flex-col md:flex-row items-start mb-6">
                                <FaBuilding style={{ fontSize: '6rem' }} className="text-yellow-500 mt-1 mr-3" />
                                <div>
                                    <h3 className="text-3xl font-bold">Build To Last</h3>
                                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-serif">
                                        Established in 1989 in Albuquerque, NM, San Bar construction provides a large variety of services ranging from the design and manufacturing of construction of permanent roadway signing, to installing and repairing roadway guardrails.
                                    </p>
                                </div>
                            </li>
                            <li className="flex flex-col md:flex-row items-start mb-6">
                                <FaUsers style={{ fontSize: '6rem' }} className="text-yellow-500 mt-1 mr-3" />
                                <div>
                                    <h3 className="text-3xl font-bold">Family Owned Business</h3>
                                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-serif">
                                        As a locally owned, family-run construction company, we have an innate understanding of our community's needs, enabling us to provide tailored solutions. Our deep roots within the community grant us a distinctive perspective and insight into local preferences and demands.
                                    </p>
                                </div>
                            </li>
                            <li className="flex flex-col md:flex-row items-start mb-6">
                                <FaCheckCircle style={{ fontSize: '6rem' }} className="text-yellow-500 mt-1 mr-3" />
                                <div>
                                    <h3 className="text-3xl font-bold">Certified Professionals</h3>
                                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-serif">
                                        Our team of seasoned builders and installers are not just experienced, but they are dedicated to turning your visions into reality. Simply reach out with your ideas, and we'll take care of the rest. With our team, your satisfaction isn't just a hope – it's guaranteed.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Images collage */}
                <div className="w-full md:w-1/2 p-6">
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                        <div className="col-span-2 row-span-2">
                            <img src="/GuardRailTruck.JPG" alt="Guard Rail Truck" className="fade-slide-image w-full h-full object-cover rounded-lg" data-direction="up"/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <img src="/Striping1.jpg" alt="Striping" className="fade-slide-image w-full h-full object-cover rounded-lg" data-direction="left"/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <img src="/SignShop2.JPG" alt="Sign Shop" className="fade-slide-image w-full h-full object-cover rounded-lg" data-direction="right"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const servicesData = [
    { src: "/Signage.jpeg", alt: "Sign Printing", title: "Signage", description: "We offer high-quality signage for various purposes." },
    { src: "/Striping1.jpg", alt: "Striping", title: "Striping", description: "Professional striping services for parking lots and roads." },
    { src: "/road-construction-raffic-safety.png", alt: "Traffic Safety Equipment", title: "Traffic Safety", description: "Equipment and tools to ensure road safety." },
    { src: "/Guardrail.png", alt: "Guard rails and repairs", title: "Guard Rail Repair/Installation", description: "Repair and install guard rails effectively." },
    { src: "/overhead_signs.jpg", alt: "Overhead Signs and Structures", title: "Overhead Signs/Structures", description: "Overhead signs and structures for guidance." },
    { src: "/RoadMilling.jpg", alt: "Roadway milling", title: "Roadway milling", description: "Roadway milling services for smooth roads." }
];

const Services = () => {
    return (
        <section id="services" className="py-20 text-center">
            <div className="container mx-auto px-4">
                <div className="mb-5">
                    <h1 className="font-semibold text-4xl text-yellow-400 lg:mr-10">Quality you expect, the service
                        you<br/>deserve!</h1>
                </div>
                <div>
                    <p className="text-gray-700">We provide a wide range of services to meet your construction needs.
                        Our team is dedicated to<br/>delivering the highest quality work and exceptional customer
                        service.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map(service => (
                        <div key={service.title} className="shadow-lg rounded-lg overflow-hidden">
                            <img src={service.src} alt={service.alt} className="w-full h-60 object-cover hover:scale-105" />
                            <div className="p-4 bg-white">
                                <h2 className="font-bold text-xl mb-2">{service.title}</h2>
                                <p className="text-gray-700">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="/services"
                   className="mt-12 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                    View All Services
                </a>
            </div>
        </section>
    );
};



const MusicalRoad = () => {
    return (
        <section id="about" className="min-h-screen bg-white bg-gradient-to-r from-yellow-400/10 to-black/10 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Grid Layout for Video and Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* YouTube Video on the left */}
                    <div className="w-full h-full">
                        <div className="relative w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-2xl">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/5eCTk8Yp01A?si=aklSLBcUVo6ezRTj"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Description and Information on the right */}
                    <div className="flex flex-col justify-center h-full text-center lg:text-left space-y-6">
                        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">
                            Musical Road
                        </h1>
                        {/* Underline */}
                        <hr className="my-4 border-t-4 border-amber-400 mx-auto lg:mx-0 w-1/2 lg:w-1/3"/>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            The Musical Road is a unique project designed for National Geographic that plays a musical tune when driven over at a specific speed. This innovation demonstrates our specialized expertise in engineering and technical skills.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            A musical road is created by carefully calibrating grooves or rumble strips at precise intervals on the road surface. As a vehicle travels over these grooves at a specific speed, the vibrations created produce a recognizable melody or tune, offering an interactive and entertaining experience for drivers while highlighting our innovative engineering capabilities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};




type CarouselProps = {
    images: string[];
}


const Shop = () => {
    const Carousel: React.FC<CarouselProps> = ({ images }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        };

        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        };

        return (
            <div className="relative w-full max-w-3xl mx-auto">
                <div className="overflow-hidden rounded-lg">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-64 object-cover"/>
                </div>
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                >
                    &#9664;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                >
                    &#9654;
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>
        );
    };

    const images = [
        'https://via.placeholder.com/800x400.png?text=Slide+1',
        'https://via.placeholder.com/800x400.png?text=Slide+2',
        'https://via.placeholder.com/800x400.png?text=Slide+3',
    ];

    return (
        <section className="Shop">
            <h1 className="text-6xl text-center font-extrabold text-yellow-400 my-12">
                Check Out Our Shop!
            </h1>
            <Carousel images={images}/>
        </section>
    );
};


// Main HomePage component that assembles all the sections
export default function HomePage() {
    return (
        <div className="mt-10">
            <main>
                <Hero/>
                <About/>
                <Services/>
                <MusicalRoad/>
                <Shop/>
            </main>
        </div>
    );
};

