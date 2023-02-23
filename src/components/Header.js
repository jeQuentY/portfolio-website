import React from "react";

export default function Header() {

    const [windowSize, setWindowSize] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });

    return (
    <nav className="header-container">
        <img className="header-logo" src="../images/ca_photography.png" alt="logo-icon"/>
        <div className={windowSize >= 550 ? "button-container" : "invisible"}>
            <p>PORTFOLIO</p>
            <p>CONTACT</p>
            <p>ABOUT</p>
        </div>
    </nav>
    )
}