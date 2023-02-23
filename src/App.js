import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import Header from "./components/Header.js";
import MainPage from "./components/MainPage.js";

// make a new context

const MyContext = React.createContext();
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};


const Navigation = () => {
  const ctx = useContext(MyContext);
  return (
    <>
      <Menu
        customBurgerIcon={false}
        isOpen={ctx.isMenuOpen}
        onStateChange={(state) => ctx.stateChangeHandler(state)}
      />
        <Menu right className="burger-menu-menu">
            <img className="burger-icon" src="../images/ca_photography.png" alt="burger-menu icon"/>
            <hr/>
            <p id="portfolio" className="menu-item">
              PORTFOLIO
            </p>
            <p id="contact" className="menu-item">
              CONTACT
            </p>
            <p id="about" className="menu-item">
              ABOUT
            </p>
        </Menu>
    </>
  );
};

// default export here
const App = () => {
  return (
    
    <MyProvider>
        <Navigation />
        <Header />
        <MainPage />
    </MyProvider>
  );
};

export default App;
