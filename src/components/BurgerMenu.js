import styled from "styled-components";

const BurgerMenu = () => {
  return (
    <div className="burgermenu-wrapper">
      <BurgerStyle>
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </BurgerStyle>
    </div>
  );
};

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

// const MobileView = styled.div`
//   div {
//     display: none;
//     // color: white;
//   }

//   @media (max-width: 600px) {
//     div {
//       display: fixed;
//       padding-top: 10px;
//       margin-left: 10px;
//       z-index: 10;
//     }
//   }
// `;

export { BurgerMenu };
