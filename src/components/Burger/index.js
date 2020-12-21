import React, { useContext, useMemo } from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";

const Burger = (props) => {
  const burgerContext = useContext(BurgerContext);
  const dondog = {...burgerContext.tuuver};
  const dondg = {...burgerContext.burger};
  // console.log(dondog);
    console.log("hkh", dondog);
    // Object.keys(dondog).map((el, key) => {
    //   console.log("ashguidee", el,  dondog[el].НийтҮнэ);
    // });
    
    //{bacon: 2, cheese: 2, meat: 1, salad: 1}
    const items = Object.keys(dondog);
    let content = [];
    // console.log(content);
    // console.log("ooo", burgerContext.burger.ingredients);
    console.log("map,el => ", dondog);
    items.map((el) => {
      // console.log("el => ", el);
         
     
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
