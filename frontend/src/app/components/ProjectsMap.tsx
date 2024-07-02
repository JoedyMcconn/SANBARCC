import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';

const projectLocations = [
    { id: 1, name: 'Project 1', position: [35.0844, -106.6504] },
    { id: 2, name: 'Project 2', position: [36.4072, -105.5731] },
    // Add more project locations here
];

const ProjectsMap: React.FC = () => {
    return (
        <MapContainer center={[34.5199, -105.8701]} zoom={7} style={{ height: '600px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {projectLocations.map((project) => (
                <Marker key={project.id} position={project.position}>
                    <Popup>
                        <Link to={`/project/${project.id}`}>{project.name}</Link>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default ProjectsMap;
