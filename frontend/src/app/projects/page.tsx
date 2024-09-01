import React from 'react';

const projectsData = [
    {
        category: 'Striping',
        projects: [
            {
                image: '/HighwayStripingProject1.webp',
                title: 'Highway Striping',
                description: 'Completed striping on a major highway in New Mexico.'
            },
            {
                image: '/HighwayStripingProject2.webp',
                title: 'Interstate Striping',
                description: 'Performed striping for city roads with precision and durability.'
            }
        ]
    },
    {
        category: 'Signage',
        projects: [
            {
                image: '/SanFidelSign.webp',
                title: 'Road Sign Installation',
                description: 'Installed essential road signs across multiple districts.'
            },
            {
                image: '/SanBarParkingSign.webp',
                title: 'Custom Signage',
                description: 'Designed and installed custom signage for city landmarks.'
            }
        ]
    },
    {
        category: 'Guard Rail',
        projects: [
            {
                image: '/GuardRailProject1.webp',
                title: 'Highway Cable Barrier',
                description: 'Installed cable barriers on high-traffic highways.'
            }
        ]
    },
    {
        category: 'Overhead Sign Structure',
        projects: [
            {
                image: '/SignStructure3-1.webp',
                title: 'Overhead Sign Installation',
                description: 'Installed large overhead signs for freeway guidance.'
            }
        ]
    },
    {
        category: 'Rumble Strip Installation',
        projects: [
            {
                image: '/RumbleStripProject1.webp',
                title: 'Rumble Strip Installation',
                description: 'Installed rumble strips on various state roads.'
            }
        ]
    },
    {
        category: 'Water Blasting',
        projects: [
            {
                image: '/WaterBlastingTruck.webp',
                title: 'Road Surface Cleaning',
                description: 'Water blasting for road surface preparation and cleaning.'
            }
        ]
    },
    {
        category: 'Others',
        projects: [
            {
                image: '/OtherProject1.webp',
                title: 'Miscellaneous Project',
                description: 'Various other construction projects handled by our team.'
            }
        ]
    }
];

const Projects = () => {
    return (
        <div className="mt-20">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-top mb-6" style={{ backgroundImage: "url('/SignWarehouse.JPG')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className=" bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Projects</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="flex justify-center mb-8 bg-white">
                <img src="/SanBarMap.webp" alt="San Bar Map of New Mexico" className="max-w-3xl h-auto " />
            </div>

            {/* Projects Categories */}
            <div className="my-20 space-y-24">
                {projectsData.map((category) => (
                    <div key={category.category} className="mb-16 text-center">
                        {/* Category Title */}
                        <div className="flex justify-center mb-8">
                            <h2 className="text-4xl font-extrabold text-black bg-yellow-500 border-black border-2 px-4 py-2">
                                {category.category}
                            </h2>
                        </div>

                        {/* Project Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center md:p-5">
                            {category.projects.map((project, index) => (
                                <div key={index} className="bg-white border-y-2 border-l-2 border-solid md:border-[#F7D117] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs lg:max-w-md mx-auto">
                                    <div className="overflow-hidden rounded-t-lg">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 bg-black rounded-b-lg">
                                        <h3 className="text-2xl font-semibold text-yellow-500 mb-2 text-center">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-center">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
