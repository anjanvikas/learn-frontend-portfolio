import React from 'react';
import { PROJECTS } from '../constants/data';

const Projects = () => {

    return (
        <section id="projects" className='projects'>
            <h1 className='projects-title'>Projects</h1>
            <div className='projects-list'>
                {PROJECTS.map((project,index) => (
                    <div key={index} className='project-item'>
                        <img className="project-img" src={project.image} alt={project.title}/>
                        <div className='project-info'>
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-description'>{project.description}</p>
                            <div className='tech-list'>
                                {project.technologies.map((tech,i) => (
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

export default Projects;