import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";

const BurgerIngredient = (props) => {
  const burgerContext = useContext(BurgerContext);

  return (
    <div>
      {burgerContext.tuuver[props.type][1][1].Нэр}{" "}
      {burgerContext.tuuver[props.type][1][1].Ангилал},{" "}
      {burgerContext.tuuver[props.type][1][1].НийтҮнэ}
      {burgerContext.tuuver[props.type][1][1].ХэмжихНэгж}
    </div>
  );
};

export default BurgerIngredient;
