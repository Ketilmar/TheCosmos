import { useState, useContext, createContext } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { NavbarStyle, MobileView } from "./NavbarStyles";
import { Link } from "react-router-dom";

const StateContext = createContext({
  useState: false,
  setBurgerOpen: () => {},
});

export const useStateContext = () => useContext(StateContext);

// for open/close mobile menu
const ToggleBurgerMenu = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
    console.log("TOGGLEBURGER");
  };
  return [burgerOpen, toggleBurger];
};

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <NavbarStyle>
        <Link to="/" onClick={ToggleBurgerMenu}>
          HOME
        </Link>
        <Link to="/planets" onClick={ToggleBurgerMenu}>
          PLANETS
        </Link>
        <Link to="/about" onClick={ToggleBurgerMenu}>
          ABOUT
        </Link>
        <Link to="/contact" onClick={ToggleBurgerMenu}>
          CONTACT
        </Link>
      </NavbarStyle>

      <MobileView>
        <div className="burgermenu-toggle" onClick={ToggleBurgerMenu}>
          <BurgerMenu />
        </div>
      </MobileView>

      <style jsx>
        {`
          @media (max-width: 550px) {
            .navbar-wrapper > div > a {
              display: ${burgerOpen ? "inline" : "none"};
              // color: red;
            }
          }
        `}
      </style>
    </div>
  );
};

export { Navbar };
