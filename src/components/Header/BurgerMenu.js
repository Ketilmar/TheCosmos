import { BurgerStyle } from "./BurgermenuStyles";

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

export { BurgerMenu };
