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

                <p> I am a recent computer science graduate eager to leverage my experience and passion in a software engineering role. While my background as a graphic designer naturally gravitates me towards front-end development, I also garner strong skills in back-end development. My experience spans from collaborating in a team to build web apps, to teaching the next generation of coders. My favorite programming languages are JavaScript and Python. As technology constantly evolves, I find it both exciting and essential to keep learning and staying up-to-date with new developments. In my free time, I enjoy coding iOS apps because I like seeing my ideas come to life. </p>
            </div>
        </div>


    )
}