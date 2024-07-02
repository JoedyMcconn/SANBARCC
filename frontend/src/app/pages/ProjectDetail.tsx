import React from 'react';
import { useParams } from 'react-router-dom';

// Define the ProjectDetail component
const ProjectDetail: React.FC = () => {
    // Extract the projectId from the URL parameters
    const { projectId } = useParams<{ projectId: string }>();

    // For now, we'll just display the projectId
    return (
        <div>
            <h1>Project Detail</h1>
            <p>Project ID: {projectId}</p>
            {/* Add more project details here */}
        </div>
    );
};

export default ProjectDetail;
