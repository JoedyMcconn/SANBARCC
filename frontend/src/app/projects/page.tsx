"use client"

import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const bottom = window.innerHeight + window.scrollY;
            const element = document.getElementById('projects-section');
            if (element) {
                const offset = element.offsetTop;
                setIsVisible(bottom > offset + 100); // Adjust offset as needed
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Banner */}
            <div className="h-80 bg-cover bg-center flex items-center justify-center mt-20 mb-8" style={{ backgroundImage: `url('/SanBarFrontEnhanced.png')` }}>
                <div className="text-center text-black bg-white">
                    <h1 className="text-4xl font-bold">Our Projects</h1>
                    <p className="text-lg mt-2">Explore our latest projects and see our work in action.</p>
                </div>
            </div>

            {/* Projects Section */}
            <div id="projects-section" className={`container mx-auto py-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                {/* Signage Category */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Signage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="/path-to-signage-image1.jpg" alt="Project 1" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Project Title 1</h3>
                                <p className="text-gray-600 mb-4">Description of the project goes here.</p>
                                <ul className="list-disc list-inside">
                                    <li>Point 1</li>
                                    <li>Point 2</li>
                                    <li>Point 3</li>
                                </ul>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white rounded-lg overflow-hidden shadow-md">
                            <img src="/path-to-signage-image2.jpg" alt="Project 2" className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
                                <p className="text-gray-600 mb-4">Description of the project goes here.</p>
                                <ul className="list-disc list-inside">
                                    <li>Point 1</li>
                                    <li>Point 2</li>
                                    <li>Point 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Road Milling Category */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Road Milling</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Road Milling projects */}
                        {/* Add projects here */}
                    </div>
                </div>

                {/* Traffic Safety Category */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Traffic Safety</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Traffic Safety projects */}
                        {/* Add projects here */}
                    </div>
                </div>

                {/* Road/Parking Lot Striping Category */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center">Road/Parking Lot Striping</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Striping projects */}
                        {/* Add projects here */}
                    </div>
                </div>

                {/* Overhead Signs/Structures Category */}
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Overhead Signs/Structures</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Overhead Signs/Structures projects */}
                        {/* Add projects here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;