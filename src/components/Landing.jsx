import React from 'react';
import landingImage from '../assets/landing_img.png'
import GradientBG from '../assets/noisy_gradient.png'
export default function Landing( props ) {
    const { isSmallScreen } = props;
    return (
        <div className="landing-container">
            {isSmallScreen && (
                <div className="landing-gradient-container">

                    <div className="landing-img-wrapper">

                        <img src={landingImage} alt="Edgar"/>
                        <div className="landing-name-wrapper">
                            <h1>EDGAR <br/> RODRIGUEZ</h1>
                            <h2>Software Engineer</h2>
                        </div>
                    </div>
                    <img src={GradientBG} className="gradient-bg"/>

                </div>

            )}
            {!isSmallScreen && (
                <div className="landing-img-wrapper">
                    <div className="landing-name-wrapper">
                        <h1>EDGAR <br/> RODRIGUEZ</h1>
                        <h2>Software Engineer</h2>
                    </div>

                    <img src={landingImage} alt="Edgar"/>
                </div>
            )}
            <div>

                <p> I’m an ambitious and passionate Software Engineer with an entrepreneurial mindset. I enjoy exploring
                    the possibilities of technology and software. I have experience helping businesses integrate
                    solutions towards their vision and growth, working as a Full-Stack Software Engineer, Project
                    Manager and Engineering Lead. My favorite programming languages include JavaScript and Python. I
                    love to experiment with TensorFlow, PyTorch, and A.I. models. Topics I enjoy exploring are: AI,
                    Genetics, Business and Quantum Computing.</p>
            </div>
        </div>


    )
}