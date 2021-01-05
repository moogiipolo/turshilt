import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../../context/BurgerContext";
const Nemeh = (props) => {
  const burgerContext = useContext(BurgerContext);
  if (props.turul !== 0)
    return (
      <button
        onClick={() => burgerContext.addIngredient(props.type)}
        className={css.More}
      >
        +
      </button>
    );
  else {
    return null;
  }
};
export default Nemeh;
