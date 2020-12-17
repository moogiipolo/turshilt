import React, { useContext, useState } from "react";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
// import NemehHasah from "../NemehHasah";

const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext);
  const disabledIngredients = { ...burgerContext.burger.ingredients };
if (burgerContext.burger.zogsooh === 0)
{
  burgerContext.poloDoh();
  console.log("ok ok ")
  burgerContext.addmiIngredient();

}
else {console.log("else", burgerContext.burger.zogsooh)}
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{burgerContext.burger.totalPrice}</strong>
      </p>
      {console.log(burgerContext.burger, "haha")}

      {Object.keys(burgerContext.burger.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabled={disabledIngredients}
          type={el}
          orts={burgerContext.burger.ingredientNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={!burgerContext.burger.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
