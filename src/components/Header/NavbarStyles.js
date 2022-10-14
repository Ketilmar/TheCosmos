import styled from "styled-components";

const NavbarStyle = styled.div`
  display: flex;
  // justify-content: flex-end;

  > a {
    margin-top: 1.3vh;
    margin-left: 4vw;
    font-weight: normal;
    font-size: revert;
    text-decoration: none;
  }
`;

const MobileView = styled.div`
  .burgermenu-toggle {
    display: none;
  }

  @media (max-width: 500px) {
    .burgermenu-toggle {
      display: fixed;
      padding-top: 10px;
      margin-left: 10px;
      font-weight: normal;
      font-size: revert;
    }
  }
`;

export { NavbarStyle, MobileView };
