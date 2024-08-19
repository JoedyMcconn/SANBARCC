import React from 'react';

const projectsData = [
    {
        category: 'Striping',
        projects: [
            {
                image: '/striping1.jpg',
                title: 'Highway Striping',
                description: 'Completed striping on a major highway in New Mexico.'
            },
            {
                image: '/striping2.jpg',
                title: 'City Road Striping',
                description: 'Performed striping for city roads with precision and durability.'
            }
        ]
    },
    {
        category: 'Signage',
        projects: [
            {
                image: '/signage1.jpg',
                title: 'Road Sign Installation',
                description: 'Installed essential road signs across multiple districts.'
            },
            {
                image: '/signage2.jpg',
                title: 'Custom Signage',
                description: 'Designed and installed custom signage for city landmarks.'
            }
        ]
    },
    {
        category: 'Cable Barrier/Guard Rail',
        projects: [
            {
                image: '/cable-barrier1.jpg',
                title: 'Highway Cable Barrier',
                description: 'Installed cable barriers on high-traffic highways.'
            }
        ]
    },
    {
        category: 'Overhead Sign Structure',
        projects: [
            {
                image: '/overhead-sign1.jpg',
                title: 'Overhead Sign Installation',
                description: 'Installed large overhead signs for freeway guidance.'
            }
        ]
    },
    {
        category: 'Rumble Strip Installation',
        projects: [
            {
                image: '/rumble-strip1.jpg',
                title: 'Rumble Strip Installation',
                description: 'Installed rumble strips on various state roads.'
            }
        ]
    },
    {
        category: 'Water/Sand Blasting',
        projects: [
            {
                image: '/blasting1.jpg',
                title: 'Road Surface Cleaning',
                description: 'Water blasting for road surface preparation and cleaning.'
            }
        ]
    },
    {
        category: 'Others',
        projects: [
            {
                image: '/other1.jpg',
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
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Projects</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="flex justify-center mb-8 bg-black">
                <img src="/SanBarMap.webp" alt="San Bar Map of New Mexico" className="max-w-full h-auto" />
            </div>

            {/* Projects Categories */}
            {projectsData.map((category) => (
                <div key={category.category} className="mb-8">
                    <h2 className="text-3xl font-bold text-[#F7D117] bg-black p-2 mb-4">{category.category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.projects.map((project, index) => (
                            <div key={index} className="bg-white shadow-md p-4">
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
                                <h3 className="text-xl font-semibold text-[#F7D117] bg-black p-2">{project.title}</h3>
                                <p className="text-black mt-2">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
