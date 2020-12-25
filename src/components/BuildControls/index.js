import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../BuildControl";
import BuildHaih from "../BuildHaih";
import css from "./style.module.css";

const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext);
  const Tuuver = {...burgerContext.tuuver};
  const disabledIngredients = { ...burgerContext.tuuver};

  for (let key in Tuuver) {
    disabledIngredients[key].if = disabledIngredients[key].НийтҮнэ <= 0;
    }
  return (
    <div className={css.BuildControls}>
        <p>Бургерийн үнэ : <strong>{burgerContext.burger.totalPrice}</strong></p>
      <BuildHaih />
      {Object.keys(Tuuver).map((el) => (
        (<BuildControl
          key={el}
          disabled={disabledIngredients}
          type={el}
          ortsa={Tuuver[el].Нэр}
          ortsb={", "}
          ortsc={Tuuver[el].Тайлбар}
          baigaaToo={Tuuver[el].Тоо}
          tegToo={Tuuver[el].НийтҮнэ}
        />)
      
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
