import React from "react";
import Resume from "../pdfs/Edgar_Rodriguez_Resume.pdf";
export default function Contact() {
    const email = "edgarjrodriguezcodes@gmail.com";
    const linkedIn = "https://www.linkedin.com/in/edgarjrodriguezcodes";
    const gitHub = "https://github.com/edgarlb";

    return (
        <div id="contact" className="section">
            <h3>Get In Touch</h3>
            <div className="contact-container">
                <p><span><i className="fa-regular fa-envelope"></i></span> {email}</p>
                <a href={Resume}><p><span> <i className="fa-regular fa-face-grin-wide"></i></span> Resume</p></a>
                <div className="socials">
                    <button>
                        <a href={linkedIn}><i className="fa-brands fa-linkedin"></i></a>
                    </button>
                    <button>
                        <a href={gitHub}><i className="fa-brands fa-github"></i></a>
                    </button>
                </div>
            </div>
        </div>
    )
}