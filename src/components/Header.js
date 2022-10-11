// import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <header className="header-wrapper">
      <HeaderStyle>
        <a href="/">The Solar System</a>

        <div className="navbar-wrapper">
          <NavbarStyle>
            <p>Home</p>
            <p>Planets</p>
            <p>About</p>
            <p>Contact</p>
          </NavbarStyle>
        </div>
      </HeaderStyle>
    </header>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1vh 4vw 0 4vw;

  & a {
    margin-top: 1em;
    font-weight: bold;
    text-decoration: none;
  }
`;

const NavbarStyle = styled.div`
  display: flex;
  justify-content: flex-end;

  & p {
    margin-left: 4vw;
  }
`;

export { Header };
