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
            <div className="absolute top-0 left-0 hidden lg:flex flex-row space-x-2 pt-6">
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
                <h2 className="text-5xl lg:text-8xl font-bold text-white mb-4">San Bar Construction Corp.</h2>
                {/* Contact Button and Phone Number Smaller Side-by-Side on Mobile */}
                <div className="flex flex-row justify-center md:justify-end space-x-2 md:space-x-4">
                    <a
                        href="/contact-us"
                        className="inline-block bg-yellow-400 hover:bg-blue-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded text-sm md:text-lg">
                        Contact Us
                    </a>
                    <div className="bg-white text-black p-1 md:p-2 rounded text-sm md:text-lg flex items-center">
                        Call Us: +1 505-452-8000
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
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const screenWidth = window.innerWidth || document.documentElement.clientWidth;

            images.forEach(image => {
                const rect = image.getBoundingClientRect();

                if (rect.top <= windowHeight * 1.25) {
                    image.classList.add('is-visible');
                } else if (screenWidth < 1024 && windowHeight * 0.01) {
                    image.classList.add('no-transition');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section id="About" className="relative min-h-screen py-20 bg-white bg-gradient-to-r from-yellow-400/10 to-black/10">
            <div className="container relative text-center mx-auto px-6 md:px-12 lg:px-16 lg:flex">
                {/* Text block */}
                <div className="w-full lg:w-1/2 text-center max-w-2xl z-10 p-6 md:p-12 mx-auto">
                    <div className="relative mb-12">
                        <div className="flex justify-center mb-4">
                            <div className="bg-yellow-500 p-2 mx-5">
                                <div className="bg-black p-4 shadow-lg">
                                    <h2 className="text-white text-3xl lg:text-6xl font-semibold">About San Bar</h2>
                                </div>
                            </div>
                        </div>

                        <hr className="border-t-4 border-yellow-500 mt-8 mb-8"/>
                    </div>

                    <div className="mb-4 p-4 rounded-lg bg-white text-left">
                        <ul className="space-y-6">
                            <li className="flex flex-col lg:flex-row items-start mb-16">
                                <FaBuilding style={{ fontSize: '6rem' }} className="text-yellow-500 mt-1 mr-3" />
                                <div>
                                    <h3 className="text-4xl font-bold">Built To Last</h3>
                                    <p className="text-lg md:text-2xl text-gray-800 leading-relaxed font-serif">
                                        <strong>San Bar Construction Corp.</strong> provides a large variety of services ranging from the design and manufacturing of permanent roadway signing, to roadway construction services.
                                    </p>
                                </div>
                            </li>
                            <li className="flex flex-col lg:flex-row items-start mt-16">
                                <FaUsers style={{ fontSize: '10rem' }} className="text-yellow-500 mt-1 mr-3" />
                                <div>
                                    <h3 className="text-3xl font-bold">Family Owned Business</h3>
                                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-serif">
                                        As a locally owned, family-run construction company, we have an innate understanding of our State's needs, enabling us to provide tailored solutions. Our deep roots within the State of New Mexico grant us a distinctive perspective and insight into our State's preferences and demands.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Images collage */}
                <div className="w-full lg:w-1/2 p-6 mt-40">
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                        <div className="col-span-2 row-span-2">
                            <img src="/NMwelcomeSign.JPG" alt="Welcome to NM sign" className="fade-slide-image w-full h-full object-cover rounded-lg" data-direction="up"/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <img src="/Striping1.jpg" alt="Striping" className="fade-slide-image w-full h-full object-cover rounded-lg" data-direction="left"/>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <img src="/SignStructure5.JPG" alt="Sign Shop" className="fade-slide-image w-full h-full object-cover rounded-lg" data-direction="right"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const JobOpportunitiesSection = () => {
    return (
        <section className="relative h-full bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/LogoBackground.png')" }}>
            <div className="flex items-center justify-center h-full">
                <div className="bg-black bg-opacity-50 w-full p-12 md:p-28 rounded-lg text-center">
                    <h2 className="text-8xl md:text-8xl font-bold text-white mb-4">We're Hiring!</h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-6">
                        We have various job opportunities available for dedicated and skilled individuals.
                    </p>
                    <a
                        href="/job-opportunities"
                        className="inline-block bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                        View Job Opportunities
                    </a>
                </div>
            </div>
        </section>
    );
};


const servicesData = [
    { src: "/SignShop2.JPG", alt: "Sign Printing", title: "Signage", description: "We offer high-quality signage for various purposes." },
    { src: "/Striping1.jpg", alt: "Striping", title: "Striping", description: "Professional striping services for parking lots and roads." },
    { src: "/TrafficSafety.JPG", alt: "Traffic Safety Equipment", title: "Traffic Safety", description: "Equipment and tools to ensure road safety." },
    { src: "/Guardrail4.JPG", alt: "Guard rails and repairs", title: "Guard Rail Repair/Installation", description: "Repair and install guard rails effectively." },
    { src: "/ABQoverheadSign.jpg", alt: "Overhead Signs and Structures", title: "Overhead Signs/Structures", description: "Overhead signs and structures for guidance." },
    { src: "https://www.researchgate.net/publication/341509281/figure/fig1/AS:911297331879936@1594281623421/the-installation-of-Shoulder-Rumble-Strip-left-and-Centerline-rumble-strips-right.jpg", alt: "Roadway milling", title: "Rumble Strip Installation", description: "Rumble Strip Installation." }
];

const Services = () => {
    return (
        <section id="services" className="py-20 text-center">
            <div className="container mx-auto px-4">
                <div
                    className="flex flex-col md:flex-row justify-center items-center mb-5 space-y-4 md:space-y-0 md:space-x-4">
                    <div className="md:w-1/2">
                        <h1 className="font-semibold text-4xl text-yellow-400">Quality you expect, the service<br/>you
                            deserve!</h1>
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-700 text-xl">We provide a wide range of services to meet your
                            needs. Our team is dedicated <br/> to delivering the highest quality work and
                            exceptional customer service.</p>
                    </div>
                </div>

                <hr className="mb-0.5 border-l-current border-2 border-[#E0AF2A]"/>
                <hr className="mb-0.5 border-dashed border-2 border-black"/>
                <hr className="mt-0.5 mb-8 border-l-current border-2 border-[#E0AF2A]"/>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map(service => (
                        <div key={service.title} className="shadow-lg rounded-lg overflow-hidden">
                            <img src={service.src} alt={service.alt}
                                 className="w-full h-60 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"/>
                            <div className="p-4 bg-white">
                                <h2 className="font-bold text-xl mb-2">{service.title}</h2>
                                <p className="text-gray-700">{service.description}</p>
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


const MusicalRoad = () => {
    return (
        <section id="about" className="bg-white bg-gradient-to-r from-yellow-400/10 to-black/10 py-36">
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
                        {/* Musical Road Logo */}
                        <div className="flex justify-center lg:justify-start mb-8">
                            <img
                                src="/Musical%20Road%20Logo.png"
                                alt="Musical Road Logo"
                                className="h-12 lg:h-16"
                            />
                        </div>

                        <h1 className="text-6xl font-extrabold text-gray-800 mb-4 text-center lg:text-left">
                            Musical Roads
                        </h1>

                        {/* Underline */}
                        <div className="flex justify-center lg:justify-start">
                            <hr className="my-4 border-t-4 border-amber-400 w-1/2 lg:w-1/3"/>
                        </div>

                        {/* Paragraph with white background */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-xl text-gray-700 leading-relaxed mb-4">
                                When it comes to new products and services San Bar has always been and always will be a leader in innovation. Because of this reputation in the market, we were approached by National Geographic and City of Palmdale, California to help them create two of the most high profile Musical Roads in the United States.
                            </p>

                            <p className="text-xl text-gray-700 leading-relaxed">
                                A Musical Road™ is created by carefully calibrating grooves or rumble strips at precise intervals on the road surface. As a vehicle travels over these grooves at a specific speed, the vibrations created produce a recognizable melody or tune, offering an interactive and entertaining experience for drivers while highlighting our innovative engineering capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



type CarouselProps = {
    props: { src: string, title: string, text:string }[];
}

const Shop = () => {
    const Carousel: React.FC<CarouselProps> = ({ props }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.length - 1 : prevIndex - 1));
        };

        const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === props.length - 1 ? 0 : prevIndex + 1));
        };

        return (
            <div className="relative w-full max-w-3xl mx-auto">
                <a href='/Safety-Products'>
                    <div className="overflow-hidden md:rounded-xl relative">
                        <img src={props[currentIndex].src} alt={`Slide ${currentIndex}`}
                             className="w-full h-96 object-contain"/>
                        <div className="overlay text-white p-10">
                            <h2 className="text-4xl">{props[currentIndex].title}</h2>
                            <pre className="text-2xl leading-9">{props[currentIndex].text}</pre>
                        </div>
                    </div>
                </a>
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black/60 text-white ms-1 p-2 rounded-full hover:bg-gray-600"
                >
                    &#9664;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black/60 text-white me-1 p-2 rounded-full hover:bg-gray-600"
                >
                    &#9654;
                </button>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {props.map((_, index) => (
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

    const props = [
        { src: 'https://cdn11.bigcommerce.com/s-s2do0/images/stencil/1280x1280/products/1119/4143/61mkxgtxxWL__47363.1710189944.jpg?text=Slide+1',
            title: 'Traffic Cones',
            text: ` 18″ – 3# Reflective 
 28″ – 7# Non-Reflective 
 28″ – 7# Reflective
 36″ – 10# Reflective`},
        { src: '/traffic-paint.jpeg',
            title: 'Traffic Paint & Glass Beads',
            text: ` 5 gallon water-based white, yellow, black, red & blue paint 
 Beads – 50 lb. bags `},
        { src: '/PanelLite.png',
            title: 'Panel Light',
            text: ` Diamond Grade Sheeting 
 2 Sided
 6" x 8" 
 Pre-drilled`},
        { src: '/PavementMarkers.png',
            title: 'Pavement Markers',
            text: `Raised Pavement Markers  
 Barrier Wall Markers 
 Chip Seal Markers`},
        { src: '/road-construction-raffic-safety.png',
            title: 'Click Here to View Full Shop!',
            text: '...'}
    ];

    return (
        <section className="my-24">
            <h2 className="text-6xl text-center font-extrabold text-yellow-400">
                Check Out Our Shop!
            </h2>
            <h3 className='text-center text-2xl pb-5'>Some Items We Offer...</h3>
            <Carousel props={props}/>
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
                <JobOpportunitiesSection/>
                <Services/>
                <MusicalRoad/>
                <Shop/>
            </main>
        </div>
    );
};

