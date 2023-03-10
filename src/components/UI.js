import React from "react";
import BurgerMenu from "./BurgerMenu";
import NavBar from "./NavBar";
import { useState } from "react";
const MyContext = React.createContext();

export default function UI() {
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
  return (
    <MyProvider>
      <NavBar />
      <BurgerMenu context={MyContext} />
    </MyProvider>
  );
}
