import React from "react";

const MusicalRoad = () => {
    return (
        <section id="about" className="bg-white bg-gradient-to-r from-yellow-400/10 to-black/10 py-36">
            <div className="flex justify-center mb-4">
                <div className="bg-yellow-500 p-2 mx-5">
                    <div className="bg-black p-4 shadow-lg">
                        <h2 className="text-white text-3xl lg:text-8xl font-semibold">Musical Roads</h2>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 mt-20">
                {/* Grid Layout for Large Screens */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
                <div className="w-full h-full flex flex-col">
                        {/* Musical Road Logo on the left for large screens */}
                        <div className="relative w-full h-1/2 rounded-lg overflow-hidden shadow-2xl mb-8">
                            <img
                                src="/MusicRoadLogo.webp"
                                alt="Musical Road Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* YouTube Video on the left for large screens */}
                        <div className="relative w-full h-1/2 rounded-lg overflow-hidden shadow-2xl">
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

                    {/* Description and Information on the right for large screens */}
                    <div className="flex flex-col justify-center h-full text-left space-y-6">
                        {/* Paragraph with white background */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-xl text-gray-700 leading-relaxed mb-4 font-serif">
                                When it comes to new products and services <br/> <strong className="text-xl">San Bar
                                Construction Corp. </strong> has always been and always will be a leader in innovation.
                                Because of this reputation in the market, we were approached by National Geographic and
                                City of Palmdale, California to help them create two of the most high profile Musical
                                Roads in the United States.
                            </p>

                            <p className="text-xl text-gray-700 leading-relaxed font-serif">
                                A <strong>Musical Road™</strong> is created by carefully calibrating grooves or rumble
                                strips at precise intervals on the road surface. As a vehicle travels over these grooves
                                at a specific speed, the vibrations created produce a recognizable melody or tune,
                                offering an interactive and entertaining experience for drivers while highlighting our
                                innovative engineering capabilities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout: Image on top, text in middle, iframe below text */}
                <div className="lg:hidden flex flex-col items-center space-y-6">
                    {/* Musical Road Logo */}
                    <div className="w-full mb-8">
                        <img
                            src="/MusicRoadLogo.webp"
                            alt="Musical Road Logo"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Description and Information */}
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <p className="text-xl text-gray-700 leading-relaxed mb-4 font-serif">
                            When it comes to new products and services <br/> <strong className="text-xl">San Bar
                            Construction Corp. </strong> has always been and always will be a leader in innovation.
                            Because of this reputation in the market, we were approached by National Geographic and
                            City of Palmdale, California to help them create two of the most high profile Musical
                            Roads in the United States.
                        </p>

                        <p className="text-xl text-gray-700 leading-relaxed font-serif">
                            A <strong>Musical Road™</strong> is created by carefully calibrating grooves or rumble
                            strips at precise intervals on the road surface. As a vehicle travels over these grooves
                            at a specific speed, the vibrations created produce a recognizable melody or tune,
                            offering an interactive and entertaining experience for drivers while highlighting our
                            innovative engineering capabilities.
                        </p>
                    </div>

                    {/* YouTube Video */}
                    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
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
            </div>
        </section>
    );
};

export default MusicalRoad;
