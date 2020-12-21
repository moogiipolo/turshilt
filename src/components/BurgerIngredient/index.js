import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";

import css from "./style.module.css";
  
const BurgerIngredient = props => {
  const burgerContext = useContext(BurgerContext);

  return <div>{burgerContext.tuuver[props.type].Нэр} {burgerContext.tuuver[props.type].Тайлбар} {burgerContext.tuuver[props.type].Ангилал},  {burgerContext.tuuver[props.type].НийтҮнэ}{burgerContext.tuuver[props.type].ХэмжихНэгж}</div>
};

export default BurgerIngredient;
