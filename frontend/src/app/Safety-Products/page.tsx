import React from 'react';

const SafetyProducts: React.FC = () => {
    return (
        <section id="pavement-markings" className="relative min-h-screen py-16 bg-yellow-300 mt-8" style={{background: "url('/caution-background.jpg')"}}>
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/PavementMarkingsBanner.jpg')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Safety Products</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Traffic Cones */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Traffic Cones</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className={"pb-2.5"}>18″ – 3# Reflective</li>
                                    <li className={"pb-2.5"}>28″ – 7# Non-Reflective</li>
                                    <li className={"pb-2.5"}>28″ – 7# Reflective</li>
                                    <li className={"pb-2.5"}>36″ – 10# Reflective</li>
                                </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/traffic-cone.webp" alt="traffic cones" className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Buster Sign Stand */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Buster Sign Stand</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className={"pb-2.5"}>Designed to hold 24″ to 48″ signs</li>

                                    <li className={"pb-2.5"}>Adjustable mast with adjustable
                                        rigid brackets for variable sign height
                                    </li>

                                    <li className={"pb-2.5"}>Dual spring mounted base for
                                        high wind stability
                                    </li>

                                    <li className={"pb-2.5"}>Flag holder will hold standard
                                        3/4″ diameter dowel flags
                                    </li>
                                </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/Buster-sign-flags.webp" alt="Buster Sign Stand"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Orange Safety Fence */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Orange Safety Fence</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className={"pb-2.5"}>Temporary hazard identification</li>
                                    <li className={"pb-2.5"}>Lightweight</li>
                                    <li className={"pb-2.5"}>Reusable</li>
                                </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <img src="/Orange-Safety-Fence.jpeg" alt="Orange Saftey Fence"
                                     className="m-5 w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pavement Markers */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Pavement Markers</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className={"pb-2.5"}>Chip seal markers</li>
                                    <li className={"pb-2.5"}>Barrier wall markers</li>
                                    <li className={"pb-2.5"}>Raised pavement markers</li>
                                </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/markers.jpeg" alt="Pavement Markers"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Traffic Paint and Glass Beads */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Traffic Paint & Glass
                                Beads</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className="pb-2.5"> 5 gallon water-based white,
                                        yellow, black, red & blue paint
                                    </li>
                                    <li className="pb-2.5"> Beads – 50 lb. bags</li>
                                </ul>

                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/traffic-paint.jpeg" alt="Traffic Paint & Glass Beads"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/* Channelizer Barrels with Tire Collars */}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Channelizer Barrels with
                                Tire Collars</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className={"pb-2.5"}>Bright fluorescent orange</li>
                                    <li className={"pb-2.5"}>Stackable</li>
                                    <li className={"pb-2.5"}>Two 4′ hi intensity white
                                        & two 4″ diamond orange bands
                                    </li>
                                </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/traffic-channelizer-drums.jpg" alt="Channelizer Barrel with Tire Collars"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*Caution Tape*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Caution Tape</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className={"pb-2.5"}>3″ X 100′ roll yellow</li>
                                    <li className={"pb-2.5"}>Polyethylene (non-reflective)</li>
                                </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/caution-tape.jpg" alt="Caution Tape"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*Panel Lites*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Panel Lights</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className={"pb-2.5"}>Diamond Grade Sheeting</li>
                                    <li className={"pb-2.5"}>2 sided</li>
                                    <li className={"pb-2.5"}>6″ x 8″</li>
                                    <li className={"pb-2.5"}>Pre-drilled</li>
                                </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Panel Lites"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*Sand Bags*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Sand Bags</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/sand-bags.jpg" alt="Sand Bags"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*Barricade Lights*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Barricade Lights</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className={"pb-2.5"}>3-way-steady, flashing
                                        & continuous</li>
                                    <li className={"pb-2.5"}>D-cell</li>
                                    <li className={"pb-2.5"}>Batteries – In stock</li>
                                </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/barricade-lights.jpeg" alt="Barricade Lights"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*Conspicuity Tape*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Conspicuity Tape</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <li className={"pb-2.5"}>2″ X 50 yard roll</li>
                                <li className={"pb-2.5"}>Red/white high intensity
                                    sheeting</li>
                                <li className={"pb-2.5"}>Orange/white high intensity
                                    sheeting</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Conspicuity Tape"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*Personal Protection Equipment*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Personal Protection Equipment</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                                <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                    <li className={"pb-2.5"}>Safety Glasses –
                                        smoke, clear, blue & over
                                        the glasses</li>
                                    <li className={"pb-2.5"}>Work gloves</li>
                                    <li className={"pb-2.5"}>Hard hats with ratchets –
                                        white – standard & bull brim</li>
                                </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/PPE.jpeg" alt="Personal Protection Equipment, PPE"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*PSE Amber Vehicle Lights*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">PSE Amber Vehicle Lights</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <li className={"pb-2.5"}>Both permanent & magnetic mounts in stock</li>
                                <li className={"pb-2.5"}>Single or mini light bars</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/pse-amber-matrix.avif" alt="Personal Protection Equipment, PPE"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*Temporary Removable Tape*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Temporary Removable Tape</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <li className={"pb-2.5"}>60 mil tape</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/placeholder.png" alt="Personal Protection Equipment, PPE"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*6′ Concrete Parking Bumpers*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">6′ Concrete Parking Bumpers</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <li className={"pb-2.5"}>Stakes Included</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/concrete-parking-bumper.png" alt="Personal Protection Equipment, PPE"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

                {/*Detectable Warning Surface Mats*/}
                <div className="w-full bg-black p-6 rounded-lg mb-12">
                    <div className="bg-white p-6 rounded-lg flex flex-wrap items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl lg:text-6xl font-semibold text-black mb-4">Detectable Warning Surface Mats</h2>
                            <hr className="w-full border-t-4 border-yellow-500 mb-4"/>
                            <ul className="text-2xl md:text-xl text-gray-800 leading-relaxed mb-4 font-sans">
                                <li className={"pb-2.5"}>Hardware included</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/warning-mat.png" alt="Personal Protection Equipment, PPE"
                                 className="m-5 w-full h-auto rounded-lg"/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default SafetyProducts;