import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  //   align-items: flex-end;
  padding-block: 1em;

  > a {
    margin-top: 1vh;
    font-weight: bold;
    font-size: large;
    text-decoration: none;
  }
`;

export { HeaderStyle };