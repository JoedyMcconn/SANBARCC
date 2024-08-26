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
            <div className="my-20 space-y-24">
                {/* Projects Categories */}
                {projectsData.map((category) => (
                    <div key={category.category} className="mb-16">
                        {/* Category Title */}
                        <div className="flex items-center mb-8">
                            <span className="inline-block w-2 h-10 bg-[#F7D117] mr-4"></span>
                            <h2 className="text-4xl font-extrabold text-[#F7D117]">
                                {category.category}
                            </h2>
                        </div>

                        {/* Project Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:p-5">
                            {category.projects.map((project, index) => (
                                <div key={index} className="bg-white border-y-2 border-l-2 border-solid md:border-[#F7D117] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                    <div className="overflow-hidden rounded-t-lg">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 bg-black rounded-b-lg">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600">
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


// const Projects = () => {
//     return (
//         <div className="mt-20 relative bg-gray-100 py-12">
//             {/* Banner */}
//             <div className="relative w-full h-96 bg-cover bg-top mb-6" style={{ backgroundImage: "url('/SignWarehouse.JPG')" }}>
//                 <div className="absolute inset-0 flex justify-center items-center">
//                     <div className="bg-black p-4">
//                         <div className="bg-yellow-500 p-4">
//                             <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Projects</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Map */}
//             <div className="flex justify-center mb-8 bg-black">
//                 <img src="/SanBarMap.webp" alt="San Bar Map of New Mexico" className="max-w-full h-auto" />
//             </div>
//
//             {/* Projects Categories */}
//             <div className="relative">
//                 {/* Road Graphic */}
//                 <div className="absolute inset-0 flex justify-center">
//                     <div className="w-1 bg-gradient-to-b from-gray-500 to-gray-800 h-full"></div>
//                 </div>
//
//                 {/* Projects List */}
//                 {projectsData.map((category, categoryIndex) => (
//                     <div key={category.category} className={`flex justify-${categoryIndex % 2 === 0 ? 'start' : 'end'} mb-8 relative`}>
//                         <div className="w-1/2 p-4 transform transition-transform">
//                             <div className={`rounded-lg overflow-hidden shadow-lg border-4 border-[#F7D117] ${categoryIndex % 2 === 0 ? 'border-r-0' : 'border-l-0'}`}>
//                                 <h2 className="text-3xl font-bold text-[#F7D117] bg-black p-2 mb-4 text-center">{category.category}</h2>
//                                 <div className="space-y-4">
//                                     {category.projects.map((project, projectIndex) => (
//                                         <div key={projectIndex} className="bg-white shadow-md p-4 relative hover:shadow-xl transition-shadow">
//                                             <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
//                                             <h3 className="text-xl font-semibold text-[#F7D117] bg-black p-2 rounded-lg">{project.title}</h3>
//                                             <p className="text-black mt-2">{project.description}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* Add an arrow or line indicator */}
//                         <div className={`absolute top-1/2 transform -translate-y-1/2 ${categoryIndex % 2 === 0 ? 'right-[45%]' : 'left-[45%]'}`}>
//                             <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
//                                 <div className="w-4 h-4 bg-black rotate-45 transform"></div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

export default Projects;
