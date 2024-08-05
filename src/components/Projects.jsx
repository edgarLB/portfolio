import React from 'react';
import Placeholder from '../assets/placeholder.png'
import projects from "../utils/projects.js";
import techs from "../utils/technologies.js";
import AI from "../pdfs/AI.pdf";
import CampusTalk from "../pdfs/campus_talk.pdf";
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
                                {project.id === 1 ?
                                    <div className="details-double">
                                        <p>[Project is in a private team repo]</p>
                                        <a className="details" href={CampusTalk}><p>Documentation</p></a>
                                    </div>
                                    : project.id === 4 ?
                                        <div className="details-double">
                                            <a className="details" href={AI}><p>Report</p></a>
                                            <a className="details" href={project.link}><p>Github</p></a>
                                        </div> :
                                        <a className="details" href={project.link}><p>Github</p></a>}


                            </div>
                        </div>
                        <h4>{project.name}</h4>
                        <div className="mini-techs-container">
                            {project.techs.map(techId => {
                                const tech = techs.find(t => t.id === techId);
                                if (tech) {
                                    return (
                                        <p key={tech.id} style={{color: tech.color, borderColor: tech.color}}>
                                            <span><i className={tech.icon}></i></span> {tech.name}
                                        </p>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>

                        <p>{project.description}</p>

                    </div>
                ))}


            </div>

        </div>
    )
}