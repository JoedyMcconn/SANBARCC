import React from "react";

const MusicalRoad = () => {
    return (
        <section id="about" className="bg-white bg-gradient-to-r from-yellow-400/10 to-black/10 py-36">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Grid Layout for Video and Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* YouTube Video on the left */}
                    <div className="w-full h-full mb-12">
                        <div className="relative w-full h-96 lg:h-1/2 rounded-lg overflow-hidden shadow-2xl">
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
                        {/* Musical Road Logo */}
                        <div className="justify-center mb-8">
                            <img
                                src="/MusicalRoadLogo.png"
                                alt="Musical Road Logo"
                                className="h-1/2 mt-8 rounded-2xl overflow-hidden shadow-2xl mb-8"
                            />
                        </div>
                    </div>

                    {/* Description and Information on the right */}
                    <div className="flex flex-col justify-center h-full text-center lg:text-left space-y-6">


                        <h1 className="text-6xl font-extrabold text-gray-800 mb-4 text-center lg:text-left font-sans">
                            Musical Roads
                        </h1>

                        {/* Underline */}
                        <div className="flex justify-center lg:justify-start">
                            <hr className="my-4 border-t-4 border-amber-400 w-1/2 lg:w-1/3"/>
                        </div>

                        {/* Paragraph with white background */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-xl text-gray-700 leading-relaxed mb-4 font-serif">
                                When it comes to new products and services <br/> <strong className="text-xl">San Bar Construction Corp. </strong> has always been and always will be a leader in innovation. Because of this reputation in the market, we were approached by National Geographic and City of Palmdale, California to help them create two of the most high profile Musical Roads in the United States.
                            </p>

                            <p className="text-xl text-gray-700 leading-relaxed font-serif">
                                A  <strong>Musical Road™</strong> is created by carefully calibrating grooves or rumble strips at precise intervals on the road surface. As a vehicle travels over these grooves at a specific speed, the vibrations created produce a recognizable melody or tune, offering an interactive and entertaining experience for drivers while highlighting our innovative engineering capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MusicalRoad;