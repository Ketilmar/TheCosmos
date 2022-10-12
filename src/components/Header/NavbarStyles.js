import styled from "styled-components";

const NavbarStyle = styled.div`
  display: flex;
  justify-content: flex-end;

  & p {
    margin-left: 4vw;
  }
`;

const MobileView = styled.div`
  .burgermenu-toggle {
    display: none;
  }

  @media (max-width: 600px) {
    .burgermenu-toggle {
      display: fixed;
      padding-top: 10px;
      margin-left: 10px;
    }
  }
`;

export { NavbarStyle, MobileView };
