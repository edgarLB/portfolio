import React from 'react';
import Placeholder from '../assets/placeholder.png'
import projects from "../utils/projects.js";
export default function Projects() {
    return (
        <div>
            <h3>Projects</h3>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project">
                        <div className="project-button">
                            <img src={project.screenshot} alt="Placeholder"/>
                            <div className="project-overlay">
                                <a href=""><p><span> <i className="fa-brands fa-github"></i></span> Github</p>
                                </a>

                            </div>
                        </div>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                    </div>
                ))}


            </div>

        </div>
    )
}