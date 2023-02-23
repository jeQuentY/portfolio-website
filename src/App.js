import React, { useState } from "react";
import NavBar from "./components/NavBar.js";
import MainPage from "./components/MainPage.js";
import BurgerMenu from "./components/BurgerMenu.js";

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

// default export here
const App = () => {
  return (
    <MyProvider>
      <BurgerMenu context={MyContext} />
      <NavBar />
      <MainPage />
    </MyProvider>
  );
};

export default App;
