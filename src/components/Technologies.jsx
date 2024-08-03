import React from "react";

export default function Technologies() {
    function Tech(name, icon, color) {
        this.name = name;
        this.icon = icon;
        this.color = color;
    }

    const techs = [
        new Tech("Python", "fa-brands fa-python", "#3870a1"),
        new Tech("Javascript", "fa-brands fa-js", "#e2bc25"),
        new Tech("React", "fa-brands fa-react", "#00d8ff"),
        new Tech("Node", "fa-brands fa-node-js", "#4caf50"),
        new Tech("Swift", "fa-brands fa-swift", "#fc9039"),
        new Tech("Java", "fa-brands fa-java", "#5382a1"),
        new Tech("HTML", "fa-brands fa-html5", "#e44d26"),
        new Tech("CSS", "fa-brands fa-css3-alt", "#2196f3"),
        new Tech("Git", "fa-brands fa-git-alt", "#f05133"),
    ]

    return (
        <div className="section">
            <h3>Technologies</h3>
            <div className="technologies-container">
                {techs.map(tech => (
                    <p style={{color: tech.color, borderColor: tech.color}}><span><i
                        className={tech.icon}></i></span> {tech.name}</p>
                ))}
            </div>
            <div id="projects"></div>
        </div>

    )
}