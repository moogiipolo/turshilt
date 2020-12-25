import React, { useContext } from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";

const Burger = (props) => {
  const burgerContext = useContext(BurgerContext);
  const dondog = {...burgerContext.tuuver};
  const dondg = {...burgerContext.burger};
  const items = Object.keys(dondog)
    let content = [];
    items.map((el) => {
        if (dondog[el].НийтҮнэ !== 0)
        {content.push(
          <BurgerIngredient key={el} type={el} />
        );}
    });
    if (dondg.totalPrice === 0)
      content = <p>Ажилд хэрэглэх багаж, материалыг сонгоно уу...</p>;
    return (
      <div className={css.Burger}>
        {content}
      </div>
    );
};
export default Burger;
