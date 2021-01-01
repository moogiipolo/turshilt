import React, { useContext, useState, useEffect } from "react";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext);
  const disabledIngredients = { ...burgerContext.tuuver };
  for (let key in burgerContext.tuuver) {
    disabledIngredients[key][1][1].if =
      disabledIngredients[key][1][1].НийтҮнэ <= 0;
  }
  const changeBichih = (e) => {
    burgerContext.searchHiih(e.target.value);
    // setBichih(e.target.value);
  };
  return (
    <div className={css.BuildControls}>
      <p>
        Үнэ : <strong>{burgerContext.burger.totalPrice}</strong>
      </p>
      <input type="text" placeholder="Хайх" onChange={changeBichih} />
      {Object.entries(burgerContext.tuuverS).map((el, key) => (
        <BuildControl
          key={key}
          disabled={disabledIngredients}
          type={burgerContext.tuuverS[key][0]}
          ortsa={burgerContext.tuuver[burgerContext.tuuverS[key][0]][1][1].Нэр}
          ortsb={", "}
          ortsc={" "}
          baigaaToo={
            burgerContext.tuuver[burgerContext.tuuverS[key][0]][1][1].Тоо
          }
          tegToo={
            burgerContext.tuuver[burgerContext.tuuverS[key][0]][1][1].НийтҮнэ
          }
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
