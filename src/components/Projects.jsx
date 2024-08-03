import React from 'react';
import Placeholder from '../assets/placeholder.png'
import projects from "../utils/projects.js";
export default function Projects() {
    return (
        <div className="section">
            <h3>Projects</h3>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project">
                        <div className="project-button">
                            <img src={project.screenshot} alt="Placeholder"/>
                            <div className="project-overlay">
                                <a className="details" href=""><p>Details</p></a>
                                <a href=""><p>Github</p>
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