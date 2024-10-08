import { useState } from 'react'
import Landing from "./components/Landing.jsx";
import Projects from "./components/Projects.jsx";
import useScreenSize from "./components/useScreenSize.jsx";
import NavBar from "./components/NavBar.jsx";
import Contact from "./components/Contact.jsx";
import Technologies from "./components/Technologies.jsx";


function App() {
    const isSmallScreen = useScreenSize();
  return (
    <div className="main">
        <NavBar isSmallScreen={isSmallScreen} />
        <div className="container">
            <Landing isSmallScreen={isSmallScreen} />
            <Technologies/>
            <Projects/>
            <Contact/>
        </div>

    </div>
  )
}

export default App
