import React, {useEffect} from "react";
import Resume from "../pdfs/Edgar_Rodriguez_Resume.pdf";
export default function NavBar( props ) {
    const { isSmallScreen } = props;
    const [showName, setShowName] = React.useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const h1 = document.querySelector('h1');
            const navBarHeight = 0;
            const h1Position = h1.getBoundingClientRect().top;

            if (h1Position <= navBarHeight) {
                setShowName(true);
            } else {
                setShowName(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    return (
        <div className="nav-bar">
            <div className="nav-bar-container">
                {showName && <li className="nav-logo"><a href="#root">Edgar Rodriguez</a></li>}
                <div></div>
                <ul>
                    <li><a href="#projects">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href={Resume}>Resume</a></li>
                </ul>
            </div>
        </div>
    )
}