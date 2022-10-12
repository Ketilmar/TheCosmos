// import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { HeaderStyle } from "./HeaderStyles";
import { elementHider, HeaderHider } from "./elementHider";

/** hiding/showing the top menu when scrolling  */
window.addEventListener("scroll", elementHider);

const Header = () => {
  return (
    <HeaderHider>
      <header className="header-wrapper">
        <HeaderStyle>
          <Link to="/">The Solar System</Link>
          <Navbar />
        </HeaderStyle>
      </header>
    </HeaderHider>
  );
};

export { Header };
