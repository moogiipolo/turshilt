import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../../context/BurgerContext";
const Nemeh = (props) => {
  const burgerContext = useContext(BurgerContext);
  if (props.turul !== props.baigaaToo)
    return (
      <button
        onClick={() => burgerContext.addIngredient(props.type)}
        className={css.More}
      >
        +
      </button>
    );
  else {
    return <strong>=</strong>;
  }
};
export default Nemeh;
