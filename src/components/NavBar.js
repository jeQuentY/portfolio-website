import React from "react";
import { Link } from "react-scroll";

export default function Header(props) {
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  console.log(props.outside);

  return (
    <nav className="header-container">
      <Link to="homepage" spy={true} smooth={true} offset={-200} duration={200}>
        <img
          className="header-logo"
          src="../images/ca_photography.png"
          alt="logo-icon"
        />
      </Link>
      <div className={windowSize >= 550 ? "button-container" : "invisible"}>
        <Link to="about" spy={true} smooth={true} offset={-250} duration={200}>
          ABOUT
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          PORTFOLIO
        </Link>
        <Link
          to="contactz"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
