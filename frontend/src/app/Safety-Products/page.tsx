import React from 'react';
import {
    FaTrafficLight,
    FaFlag,
    FaPaintBrush,
    FaRoad,
    FaTape,
    FaLightbulb,
    FaCogs,
    FaShieldAlt,
    FaBolt, FaScrewdriver, FaStopCircle, FaSign, FaHardHat, FaBatteryFull, FaExclamationTriangle
} from 'react-icons/fa';
import {
    FaBuildingCircleExclamation,
    FaRoadBarrier,
    FaRoadBridge,
    FaRoadCircleCheck,
    FaRoadCircleExclamation,
    FaRoadLock
} from "react-icons/fa6";

interface ProductItem {
    text: string;
    icon?: JSX.Element;
}

interface Product {
    title: string;
    image: string;
    alt: string;
    items: ProductItem[];
}

const rentals: Product[] = [
    {
        title: "Message Boards",
        image: "/MessageBoard.webp",
        alt: "Message Board",
        items: [
            { text: "Solar Powered", icon: <FaLightbulb /> },
            { text: "High visibility LEDs", icon: <FaCogs /> },
            { text: "Portable", icon: <FaFlag /> },
        ]
    },
    {
        title: "Arrow Boards",
        image: "/ArrowBoard.webp",
        alt: "Arrow Board",
        items: [
            { text: "Solar Powered", icon: <FaLightbulb /> },
            { text: "8 or 15 lamp options", icon: <FaFlag /> },
            { text: "Directional Traffic Control", icon: <FaRoad /> },
        ]
    },
    {
        title: "Impact Attenuator",
        image: "/rental-placeholder.webp",
        alt: "Impact Attenuator",
        items: [
            { text: "", icon: <FaTrafficLight /> },
            { text: "", icon: <FaRoadBarrier /> },
            { text: "P", icon: <FaSign /> },
        ]
    }
];

const products: Product[] = [
    {
        title: "Traffic Cones",
        image: "/traffic-cone.webp",
        alt: "traffic cones",
        items: [
            { text: "18″ – 3# Reflective", icon: <FaTrafficLight /> },
            { text: "28″ – 7# Reflective", icon: <FaTrafficLight /> },
            { text: "36″ – 10# Reflective", icon: <FaTrafficLight /> }
        ]
    },
    {
        title: "Portable Sign Stand",
        image: "/PortableSignStand.webp",
        alt: "Buster Sign Stand",
        items: [
            { text: "Designed to hold 24″ to 48″ signs", icon: <FaFlag /> },
            { text: "Adjustable mast with adjustable rigid brackets for variable sign height", icon: <FaCogs /> },
            { text: "Dual spring mounted base for high wind stability", icon: <FaShieldAlt /> },
            { text: "Flag holder will hold standard 3/4″ diameter dowel flags", icon: <FaFlag /> }
        ]
    },
    {
        title: "Roll-up Sign",
        image: "/RollUpSigns.webp",
        alt: "Roll-up Sign",
        items: [
            { text: "All sizes", icon: <FaFlag /> },
            { text: "Reflective or Non-Reflective", icon: <FaCogs /> },
            { text: "Fiberglass cross bracing", icon: <FaShieldAlt /> },
            { text: "Call for Quote.", icon: <FaFlag /> }
        ]
    },
    {
        title: "Stop/Slow Paddles",
        image: "/StopSlowPaddles.webp",
        alt: "Stop/Slow Paddles",
        items: [
            { text: "18″ or 24″ signs", icon: <FaFlag /> },
            { text: "Reflective", icon: <FaShieldAlt /> },
            { text: "5ft. extension handle.", icon: <FaFlag /> }
        ]
    },
    {
        title: "Street Name Brackets",
        image: "/StreetSignBracket1.webp",
        alt: "Street Name Brackets",
        items: [
            { text: "5″ or 12″ ", icon: <FaSign /> },
            { text: "90°, 180°, or Cross T ", icon: <FaShieldAlt /> },
            { text: "With Hardware", icon: <FaHardHat /> }
        ]
    },
    {
        title: "Traffic Barrel Tape",
        image: "/BarrelTape1.webp",
        alt: "Traffic Barrel Tape",
        items: [
            { text: "4″ x 150'", icon: <FaFlag /> },
            { text: "White High Intensity", icon: <FaShieldAlt /> },
            { text: "Orange Diamond Grade.", icon: <FaFlag /> }
        ]
    },
    {
        title: "Pavement Markers",
        image: "/PavementMarkers1.webp",
        alt: "Pavement Markers",
        items: [
            { text: "Chip seal markers", icon: <FaRoad /> },
            { text: "Barrier wall markers", icon: <FaRoadCircleCheck /> },
            { text: "Raised pavement markers", icon: <FaRoadBridge /> }
        ]
    },
    {
        title: "Barrier Markers",
        image: "/BarrierMarkers1.webp",
        alt: "Barrier Markers",
        items: [
            { text: "Delineator Buttons", icon: <FaBuildingCircleExclamation /> },
            { text: "Concrete Barrier Wall Markers", icon: <FaExclamationTriangle /> },
        ]
    },
    {
        title: "Hardware",
        image: "/HardwarePoster1.webp",
        alt: "Hardware",
        items: [
            { text: "Sign Hardware", icon: <FaBolt /> },
            { text: "Post HDW", icon: <FaScrewdriver /> },
            { text: "Delineator Button HDW", icon: <FaStopCircle /> }
        ]
    },
    {
        title: "OZARK Traffic Paint & Glass Beads",
        image: "/ozarkPaint.webp",
        alt: "Traffic Paint & Glass Beads",
        items: [
            { text: "5 gallon water-based white, yellow, black, red & blue paint", icon: <FaPaintBrush /> },
            { text: "Beads – 50 lb. bags", icon: <FaPaintBrush /> }
        ]
    },
    {
        title: "Channelizer Barrels with Tire Collars",
        image: "/traffic-channelizer-drums1.webp",
        alt: "Channelizer Barrel with Tire Collars",
        items: [
            { text: "Bright fluorescent orange", icon: <FaLightbulb /> },
            { text: "Stackable", icon: <FaLightbulb /> },
            { text: "Two 4′ hi intensity white & two 4″ diamond orange bands", icon: <FaLightbulb /> }
        ]
    },
    {
        title: "Vertical Panel",
        image: "/VerticalPanel1.webp",
        alt: "Vertical Panel",
        items: [
            { text: "8″ X 36″", icon: <FaRoadLock /> },
            { text: "20lb. Base", icon: <FaRoad /> },
            { text: "Shoulder or Center Line", icon: <FaRoadBarrier /> }
        ]
    },
    {
        title: "Type-2 & Type-3 Barricades",
        image: "/Type2-3Barricades1.webp",
        alt: "Type-2 & Type-3 Barricades",
        items: [
            { text: "Type-2 : 24″", icon: <FaRoadCircleExclamation /> },
            { text: "Type-3 : 3 panel 96″", icon: <FaRoadBarrier /> },
        ]
    },
    {
        title: "Barricade Lights",
        image: "/BarricadeLights1.webp",
        alt: "Barricade Lights",
        items: [
            { text: "3-way-steady, flashing & continuous", icon: <FaLightbulb /> },
            { text: "D-Cell Batteries – In stock", icon: <FaBatteryFull /> }
        ]
    },
    {
        title: "Caution Tape",
        image: "/caution-tape1.webp",
        alt: "Caution Tape",
        items: [
            { text: "3″ X 100′ roll yellow", icon: <FaTape /> },
            { text: "Polyethylene (non-reflective)", icon: <FaTape /> }
        ]
    },
    {
        title: "Impact Attenuator",
        image: "/rental-placeholder.webp",
        alt: "Impact Attenuator",
        items: [
            { text: "", icon: <FaTrafficLight /> },
            { text: "", icon: <FaRoadBarrier /> },
            { text: "P", icon: <FaSign /> },
        ]
    },
    {
        title: "Panel Lights",
        image: "/PanelLite1.webp",
        alt: "Panel Lights",
        items: [
            { text: "Diamond Grade Sheeting", icon: <FaLightbulb /> },
            { text: "2 sided", icon: <FaLightbulb /> },
            { text: "6″ x 8″", icon: <FaLightbulb /> },
            { text: "Pre-drilled", icon: <FaLightbulb /> }
        ]
    },
    {
        title: "Sand Bags",
        image: "/sand-bags1.webp",
        alt: "Sand Bags",
        items: [
            { text: "14″ x 27″", icon: <FaShieldAlt /> },
            { text: "Drawstring", icon: <FaShieldAlt /> }
        ]
    },
    {
        title: "Temporary Removable Tape",
        image: "/TempRemovableTape1.webp",
        alt: "Temporary Removable Tape",
        items: [
            { text: "White and Yellow", icon: <FaTape /> },
            { text: "4″ x 360'", icon: <FaTape /> },
        ]
    },
    {
        title: "Foil Back Temporary Removable Tape",
        image: "/FoilBackRemovableTape1.webp",
        alt: "Temporary Removable Tape",
        items: [
            { text: "White and Yellow", icon: <FaTape /> },
            { text: "4″ x 300'", icon: <FaTape /> },
        ]
    },
    {
        title: "Pennant Flagline",
        image: "/PennantFlagline1.webp",
        alt: "Pennant Flagline",
        items: [
            { text: "60 ft.", icon: <FaFlag /> },
        ]
    }
];

export default function SafetyProducts() {
    return (
        <section id="safety-products" className="relative min-h-screen py-16 bg-yellow-300 mt-8" style={{background: "url('/caution-background1.webp')"}}>

            {/* Banner for Rentals */}
            <div className="relative w-full h-96 bg-cover bg-center mb-10" style={{ backgroundImage: "url('/PavementMarkingsBanner.jpg')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Rentals</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rentals Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                {rentals.map((rental, index) => (
                    <div key={index} className="w-full bg-black p-6 rounded-lg mb-12">
                        <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">{rental.title}</h2>
                                <hr className="w-full border-t-4 border-yellow-500 mb-4" />
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    {rental.items.map((item, i) => (
                                        <li key={i} className="pb-2.5 flex items-center">
                                            <span className="mr-2">{item.icon}</span>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center items-center">
                                <img src={rental.image} alt={rental.alt} className="m-5 w-full h-auto max-w-xs rounded-lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Banner for Safety Products */}
            <div className="relative w-full h-96 bg-cover bg-center mb-10" style={{ backgroundImage: "url('/PavementMarkingsBanner.jpg')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Safety Products</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Safety Products Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                {products.map((product, index) => (
                    <div key={index} className="w-full bg-black p-6 rounded-lg mb-12">
                        <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">{product.title}</h2>
                                <hr className="w-full border-t-4 border-yellow-500 mb-4" />
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    {product.items.map((item, i) => (
                                        <li key={i} className="pb-2.5 flex items-center">
                                            <span className="mr-2">{item.icon}</span>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 flex justify-center items-center">
                                <img src={product.image} alt={product.alt} className="m-5 w-full h-auto max-w-xs rounded-lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
