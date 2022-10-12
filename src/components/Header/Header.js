// import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { HeaderStyle } from "./HeaderStyles";

const Header = () => {
  return (
    <header className="header-wrapper">
      <HeaderStyle>
        <Link to="/">The Solar System</Link>
        <Navbar />
      </HeaderStyle>
    </header>
  );
};

export { Header };
