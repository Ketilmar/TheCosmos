// import React from "react";
import styled from "styled-components";
import { BurgerMenu } from "./BurgerMenu";
import { Navbar } from "./Navbar";
import { HeaderStyle } from "./HeaderStyles";

const Header = () => {
  return (
    <header className="header-wrapper">
      <HeaderStyle>
        <a href="/">The Solar System</a>
        <Navbar />
      </HeaderStyle>
    </header>
  );
};

export { Header };
