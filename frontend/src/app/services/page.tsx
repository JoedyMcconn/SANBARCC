"use client"

import React, { useState } from 'react';
import { FaCheckCircle, FaRoad, FaPaintRoller, FaSign, FaShieldAlt } from 'react-icons/fa';

const servicesData = {
    signage: [
        {
            title: "Roadway Signs",
            description: "San Bar is constantly updating our procedures, materials and equipment to insure that we meet or exceed the specifications of your project.  We also stay current with the regulations in the Manual of Uniform Traffic Control Devices (MUTCD). We insure your signs are compliant with Local, State, and Federal regulations.   ---------------------------------------------------   San Bar takes great pride in being a 3M Certified(tm) Sign Fabricator. Our 13,000 square foot state-of-the-art sign shop is one of the largest sign shops in the Southwest. We can manufacture and install any type of signs from a single Handicap sign to the largest overhead sign structure. Not only do we produce and install standard signs, we can also manufacture and install any custom sign you may need.",
            bullets: [
                "Regulatory Signs",
                "Warning Signs",
                "Guide Signs",
                "Political Signs",
                "Specialty Signs"
            ],
            icon: <FaSign />,
            imageUrl: "/path-to-image-2.jpg",
            link: "/services/roadway-signs"
        },
        {
            title: "Erecting Overhead Sign Structures",
            description: "Sign structures come in 3 different styles; Cantilever, Bridge or Butterfly (“T” shape) and in various sizes ranging from 18” in diameter up to the larger 40” diameter structures.The basic components of any sign structure installation consist of a drilled shaft; rebar cage, bolt assembly, 3000 psi concrete, sign structure and the sign(s) themselves.  Some drilled shafts can reach up to 65’ in depth depending on the terrain and size of the structure.  Anyone who has traveled the interstate systems here in New Mexico has either passed by or gone under a sign structure that San Bar has installed.  Variable Message Systems are becoming more popular across the States interstate system and San Bar is installing the structure for these as well.",
            bullets: [
                "Custom Designs",
                "Installation Services",
                "Maintenance"
            ],
            icon: <FaSign />,
            imageUrl: "public/SignStructure1.JPG",

        },
    ],
    roadConstruction: [
        {
            title: "Pavement Markings",
            description: "Our expert team specializes in providing high-quality pavement markings that ensure safety, organization, and efficiency on roadways and parking areas. We use durable materials and state-of-the-art equipment to deliver precise and long-lasting results, whether for highways, city streets, parking lots, or custom projects. Our comprehensive services include a wide range of marking options designed to meet your specific needs and enhance the functionality and appearance of your surfaces.",
            bullets: [
                "Hot applied Thermoplastic Pavement Markings",
                "Painted Pavement Marking",
                "Preformed (Tape) Pavement Markings",
                "Preformed Thermoplastic Pavement Markings",
                "Contrast Pavement Markings",
                "Raised and Recessed Pavement Markers"
            ],
            icon: <FaRoad />,
            imageUrl: "/Striping1.jpg",
            link: "/services/pavement-markings"
        },
        {
            title: "Guardrail: Installation & Repair",
            description: "Our expert team specializes in providing high-quality guardrail installation and repair services that ensure safety and protection on roadways. We use durable materials and state-of-the-art equipment to deliver precise and long-lasting results, whether for highways, city streets, or custom projects. Our comprehensive services include a wide range of guardrail solutions designed to meet your specific needs and enhance the safety and functionality of your infrastructure. Whether installing new guardrails or repairing existing ones, we are committed to maintaining the highest standards of quality and safety.",
            bullets: [
                "Guardrail Installation",
                "Guardrail Repair",
                "Custom Guardrail Solutions"
            ],
            icon: <FaShieldAlt />,
            imageUrl: "public/GuardRailTruck.JPG",
            link: "/services/guardrail"
        },
        {
            title: "Rumble Strip Installation",
            description: "Our expert team specializes in providing high-quality rumble strip installation services that enhance safety and alertness on roadways. We use state-of-the-art equipment to deliver precise and long-lasting results, whether for highways, city streets, or custom projects. Our comprehensive services include a wide range of rumble strip options designed to meet your specific needs and improve the functionality and safety of your roads. We are committed to maintaining the highest standards of quality and effectiveness.",
            bullets: [
                "Asphalt Rumble Strips",
                "Concrete Rumble Strips",
                "Custom Rumble Strips"
            ],
            icon: <FaCheckCircle />,
            imageUrl: "/path-to-image-4.jpg",
            link: "/services/rumble-strip"
        },
        {
            title: "Cable Barrier: Installation & Repair",
            description: "Our expert team specializes in providing high-quality cable barrier installation and repair services that enhance safety and protection on roadways. We use durable materials and state-of-the-art equipment to deliver precise and long-lasting results, whether for highways, medians, or custom projects. Our comprehensive services include a wide range of cable barrier solutions designed to meet your specific needs and improve the safety and functionality of your infrastructure. Whether installing new cable barriers or repairing existing ones, we are committed to maintaining the highest standards of quality and safety.",
            bullets: [
                "Cable Barrier Installation",
                "Cable Barrier Repair",
                "Custom Cable Barrier Solutions"
            ],
            icon: <FaShieldAlt />,
            imageUrl: "/path-to-image-5.jpg",
            link: "/services/cable-barrier"
        },
        {
            title: "Water & Sand Blasting",
            description: "San Bar Construction Corp specializes in providing high-quality water and sand blasting pavement marking services that ensure clear, precise, and durable results on roadways and parking areas. We use advanced materials and state-of-the-art equipment to deliver long-lasting markings, whether for highways, city streets, parking lots, or custom projects. Our comprehensive services include a wide range of marking options designed to meet your specific needs and enhance the safety, organization, and appearance of your surfaces. Whether applying new markings or refreshing existing ones, we are committed to maintaining the highest standards of quality and efficiency.",
            bullets: [
                "Standard Rumble Bars",
                "High-Visibility Rumble Bars",
                "Custom Rumble Bars"
            ],
            icon: <FaPaintRoller />,
            imageUrl: "/path-to-image-6.jpg",
            link: "/services/water-sand-blasting"
        }
    ]
};

const Services: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<'signage' | 'roadConstruction'>('signage');

    const handleCategoryChange = (category: 'signage' | 'roadConstruction') => {
        setActiveCategory(category);
    };

    return (
        <section id="services" className="relative min-h-screen py-16 bg-yellow-500 mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/Striping1.jpg')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Services We Provide</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Buttons */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => handleCategoryChange('signage')}
                    className={`px-6 py-2 mx-2 text-lg font-bold rounded ${activeCategory === 'signage' ? 'bg-white text-black' : 'bg-black text-amber-400'} border border-yellow-300 transition duration-300`}
                >
                    Signage
                </button>
                <button
                    onClick={() => handleCategoryChange('roadConstruction')}
                    className={`px-6 py-2 mx-2 text-lg font-bold rounded ${activeCategory === 'roadConstruction' ? 'bg-white text-black' : 'bg-black text-white'} border border-yellow-300 transition duration-300`}
                >
                    Road Construction
                </button>
            </div>

            {/* Services List */}
            <div className="container relative mx-auto px-6 md:px-12 lg:px-16 py-20">
                {servicesData[activeCategory].map((service, index) => (
                    <div key={index} className="flex flex-wrap mb-12 md:mb-24">
                        <div className="w-full bg-black p-6 rounded-lg">
                            <div className="w-full bg-white p-6 rounded-lg">
                                {/* Text block */}
                                <div className="w-full md:w-1/2 p-6 md:p-12">
                                    <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">{service.title}</h2>
                                    <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                    <p className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">{service.description}</p>

                                    <ul className="space-y-2">
                                        {service.bullets.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex} className="flex items-start">
                                                {service.icon}
                                                <span className="text-lg md:text-xl text-gray-800 leading-relaxed ml-2">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 text-center">
                                        <a
                                            href={service.link}
                                            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>

                                {/* Image block */}
                                <div className="w-full md:w-1/2 p-6 md:p-12">
                                    <div className="h-full w-full bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${service.imageUrl})` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
