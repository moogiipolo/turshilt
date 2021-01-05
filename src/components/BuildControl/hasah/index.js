import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../../context/BurgerContext";
const Hasah = (props) => {
  const burgerContext = useContext(BurgerContext);
  if (props.turul !== 0)
    return (
      <button
        onClick={() => burgerContext.removeIngredient(props.type)}
        className={css.Less}
      >
        -
      </button>
    );
  else {
    return null;
  }
};
export default Hasah;
