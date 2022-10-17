import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  //   align-items: flex-end;
  padding-block: 1em;
  background-color: #0f131fc4;

  @media (max-width: 550px) {
    height: 25vh;
  }

  > a {
    margin-top: 1vh;
    font-weight: bold;
    font-size: large;
    text-decoration: none;
  }

  @media (max-width: 550px) {
    .navbar-wrapper {
      background-color: none;
      height: 10vh;
      width: 40vw;
      display: flex;
      justify-content: flex-end;
    }

    .navbar-wrapper > div {
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export { HeaderStyle };
