import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { NavbarStyle, MobileView } from "./NavbarStyles";

const Navbar = () => {
  // for open/close mobile menu
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <div className="navbar-wrapper">
      <NavbarStyle>
        <p>Home</p>
        <p>Planets</p>
        <p>About</p>
        <p>Contact</p>
      </NavbarStyle>

      <MobileView>
        <div className="burgermenu-toggle" onClick={toggleBurger}>
          <BurgerMenu />
        </div>
      </MobileView>

      {/* needed to use <style> here because 'burgerOpen' was outside scope with Styled */}
      <style jsx>
        {`
          @media (max-width: 600px) {
            .navbar-wrapper {
              background-color: none;
              height: 10vh;
              width: 40vw;
              display: flex;
              justify-content: flex-end;
            }

            .navbar-wrapper > div > p {
              display: ${burgerOpen ? "inline" : "none"};
            }

            .navbar-wrapper > div {
              flex-direction: column;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </div>
  );
};

export { Navbar };
