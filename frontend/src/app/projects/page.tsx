"use client"

// San Bar cc/frontend/src/app/projects/page.tsx
import React from 'react';
import MapComponent from "@/app/components/ProjectsMap";
const Projects: React.FC = () => {
    return (
        <div className="mt-28">
            <main>
                <h2 className="text-6xl text-center font-extrabold text-yellow-400 my-10">Our Projects</h2>
                <div className="my-24 p-10">
                    <MapComponent />
                </div>
            </main>
        </div>
    );
};

export default Projects;
