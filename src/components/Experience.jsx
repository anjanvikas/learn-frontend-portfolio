import React from 'react';
import { EXPERIENCES } from '../constants/data';

const Experiences = () => {

    return (
        <section id="experiences" className='experiences'>
            <h1 className='experiences-title'>Experiences</h1>
            <div className='experiences-list'>
                {EXPERIENCES.map((experience,index) => (
                    <div key={index} className='experience-item'>
                        <p className='experience-year'>{experience.year}</p>
                        <div className='experience-info'>
                            <h2 className='experience-company'>{experience.company}</h2>
                            <h4 className='experience-role'>{experience.role}</h4>
                            <p className='experience-description'>{experience.description}</p>
                            <div className='tech-list'>
                                {experience.technologies.map((tech,i) => (
                                    <div className='tech-item'>{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;