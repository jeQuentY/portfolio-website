import React, { useContext } from "react";
import { Link } from "react-scroll";
import { slide as Menu } from "react-burger-menu";

export default function BurgerMenu(props) {
  const ctx = useContext(props.context);
  return (
    <>
      <Menu
        customBurgerIcon={false}
        isOpen={ctx.isMenuOpen}
        onStateChange={(state) => ctx.stateChangeHandler(state)}
      />
      <Menu right className="burger-menu-menu">
        <Link
          className="burger-icon"
          to="homepage"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          <img
            className="burger-icon"
            src="../images/ca_photography.png"
            alt="burger-menu icon"
          />
        </Link>
        <hr />
        <Link
          className="menu-item"
          to="about"
          spy={true}
          smooth={true}
          offset={-250}
          duration={200}
        >
          ABOUT
        </Link>
        <Link
          className="menu-item"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          PORTFOLIO
        </Link>
        <Link
          className="menu-item"
          to="contactz"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
        >
          CONTACT
        </Link>
      </Menu>
    </>
  );
}
