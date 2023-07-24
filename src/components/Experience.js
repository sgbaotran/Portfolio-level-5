import '../styles/experience.css';
import experiences from '../data/experience.json';
import { FaArrowTrendUp } from "react-icons/fa6";
import React, { useState } from 'react';

export default function Experience() {
    const [hoveredId, setHoveredId] = useState('');

    const handleMouseEnter = (id) => {
        setHoveredId(id);
    };

    const handleMouseLeave = () => {
        setHoveredId('');
    };

    return (
        <div id='experience'>
            {experiences.map((experience) => (
                <section
                    onMouseEnter={() => handleMouseEnter(experience.id)}
                    onMouseLeave={handleMouseLeave}
                    className={`experience ${hoveredId !== experience.id && hoveredId !== '' ? "not-focus" : ""}`}
                >
                    <a href="facebook.com" className='experience-item'>

                        <p className='experience-date'>{experience.date}</p>

                        <div className='experience-info'>
                            <h3 className='experience-title'>{experience.title} <div className='arrow-symbol'> <FaArrowTrendUp /></div></h3>
                            <p className='experience-description'>{experience.description}</p>

                            <ul className='experience-skill-list'>
                                {experience.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className='experience-skill'>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </a>

                </section>
            ))}
        </div>
    );
}


