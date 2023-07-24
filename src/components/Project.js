import '../styles/project.css';
import projects from '../data/project.json';
import { FaArrowTrendUp } from "react-icons/fa6";
import React, { useState } from 'react';

export default function Project() {
    const [hoveredId, setHoveredId] = useState('');

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId('');
    };

    return (
        <div id='project'>
            {projects.map((project) => (
                <section
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={handleMouseLeave}
                    className={`project ${hoveredId !== project.id && hoveredId !== '' ? "not-focus" : ""}`}
                >
                    <a href="facebook.com" className='project-item'>

                        <div className='project-info'>
                            <h3 className='project-title'>{project.title} <div className='arrow-symbol'> <FaArrowTrendUp /></div></h3>
                            <p className='project-description'>{project.description}</p>

                            <ul className='project-skill-list'>
                                {project.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className='project-skill'>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </a>

                </section>
            ))}
        </div>
    );
}


