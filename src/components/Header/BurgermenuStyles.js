import styled from "styled-components";

const BurgerStyle = styled.div`
  width: 2rem;
  height: 2rem;
  margin-top: 1vh;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  flex-wrap: wrap;
  z-index: 10;

  .burger {
    width: 2rem;
    height: 4px;
    border-radius: 10px;
    background-color: white;
    transform-origin: 1px;
    transition: all 0.3s linear;
  }
`;

export { BurgerStyle };
