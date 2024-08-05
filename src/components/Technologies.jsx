import React from "react";
import techs from "../utils/technologies.js";
export default function Technologies() {

    return (
        <div className="section">
            <h3>Technologies</h3>
            <div className="technologies-container">
                {techs.slice(0, -2).map(tech => (
                    <p style={{color: tech.color, borderColor: tech.color}}><span><i
                        className={tech.icon}></i></span> {tech.name}</p>
                ))}
            </div>
            <div id="projects"></div>
        </div>

    )
}