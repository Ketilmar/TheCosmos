import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { NavbarStyle, MobileView } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  // for open/close mobile menu
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
    // return burgerOpen;
  };

  return (
    <div className="navbar-wrapper">
      <NavbarStyle>
        <Link to="/">HOME</Link>
        <Link to="/planets">PLANETS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </NavbarStyle>

      <MobileView>
        <div className="burgermenu-toggle" onClick={toggleBurger}>
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
