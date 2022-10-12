// import React from "react";
import styled from "styled-components";
import { BurgerMenu } from "./BurgerMenu";
import { Navbar } from "./Navbar";

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

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 1em;

  & a {
    margin-top: 1em;
    font-weight: bold;
    text-decoration: none;
  }
`;

export { Header };
