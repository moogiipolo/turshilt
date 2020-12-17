import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../BuildControl";
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
      <p>
        Бургерийн үнэ : <strong>{burgerContext.burger.totalPrice}</strong>
      </p>
      {/* {console.log(Tuuver)} */}
      {Object.keys(Tuuver).map((el) => (
        // console.log("==>", el),
        // ("Tuuver", Tuuver[el].Нэр),
        // console.log("==>", el),
      {/* {Object.keys(burgerContext.burger.ingredientNames).map((el) => ( */},{/* //))} */},
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
