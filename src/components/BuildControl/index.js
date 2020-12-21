import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";

const BuildControl = (props) => {
  const burgerContext = useContext(BurgerContext);
  return (
    
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.ortsa}{props.ortsb}{props.ortsc}</div>
      <button
        disabled={props.disabled[props.type].if}
        onClick={() => burgerContext.removeIngredient(props.type)}
        className={css.Less}
      >
        -
        </button>
      <button
        onClick={() => burgerContext.addIngredient(props.type)}
        className={css.More}
      >
        +
      </button>
      <button className={css.More}>{props.baigaaToo},__{props.tegToo}</button>
    </div>
  );
};

export default BuildControl;
