import React, { useEffect, useState } from 'react';
import Project from './Project';

const Portfolio = ({ project }) => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-center my-2 text-blue-500'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Portfolio;