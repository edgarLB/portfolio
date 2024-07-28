import React, {useEffect} from "react";

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
                {showName && <li className="nav-logo">{!isSmallScreen ? "Edgar Rodriguez" : "Edgar Rodriguez"}</li>}
                <div></div>
                <ul>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Resume</a></li>
                </ul>
            </div>
        </div>
    )
}