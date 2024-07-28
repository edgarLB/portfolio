import React from "react";

export default function Contact() {
    const email = "edgarjrodriguezcodes@gmail.com"
    return (
        <div>
            <h3>Get In Touch</h3>
            <div className="contact-container">
                <p><span><i className="fa-regular fa-envelope"></i></span> {email}</p>
                <a href=""><p><span> <i className="fa-regular fa-face-grin-wide"></i></span> Resume</p></a>
                <div className="socials">
                    <button>
                        <i className="fa-brands fa-linkedin"></i>
                    </button>
                    <button>
                        <i className="fa-brands fa-github"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}