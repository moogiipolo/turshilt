import React, { useState, useEffect } from "react";
import axios from "../axios-orders";

const BurgerContext = React.createContext();
const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
const Mdata = {};
const initialState = {
  ingredients: { salad: 0, cheese: 0, bacon: 0, meat: 0 },
  totalPrice: 1000,
  purchasing: false,
  ingredientNames: {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    salad: "Салад",
  },
  baseTatah: "tataagui",
  saving: false,
  finished: false,
  error: null,
};

export const BurgerStore = (props) => {
  const [burger, setBurger] = useState(initialState);
  const [Mdata, setMdata] = useState();
  useEffect(() => {
    axios.get("/orders.json").then((dorj) => {
      setMdata(dorj.data);
      console.log("?????????", dorj.data);
      // Object.keys(dorj.data).map((el, key) => {
      //   console.log("el", el, "key", key, "==>", dorj.data[el].НэгжҮнэ);
      //   setBurger({
      //     ...burger,
      //     ingredients: {
      //       ...burger.ingredients,
      //       bacon: "1",
      //     },
      //   });
      // });
      // console.log("haha", Mdata);
    });
    console.log("!!!!!!!!!!!!", [burger.baseTatah]);
  }, [burger.baseTatah]);
  // const poloDoh = () => {
  //   if (burger.zogsooh === 0) {
  //     axios.get("/orders.json").then((dorj) => {
  //       console.log(dorj.data);
  //       setMdata(dorj.data);
  //       console.log(Mdata);
  //       // Object.keys(dorj.data).map((elw) => {
  //       //   console.log("==>", elw);
  //       //   const dugar = elw;
  //       //   // setBurger({ ...burger, saving: false, finished: true, error: null });
  //       //   setMdata({
  //       //     ...Mdata,
  //       //     [dorj.data[elw].Загвар]: dorj.data[elw],
  //       //   });
  //       // });
  //       // const as = dorj.data[1];
  //       // setMdata({
  //       //   as,
  //       // });
  //     });
  //     console.log("mdata", Mdata);
  //     setBurger({ ...burger, zogsooh: "1" });
  //   }
  // };
  const toggle = () => {
    setBurger({ ...burger, saving: !burger.saving });
  };
  const saveBurger = (newOrder, token) => {
    // Spinner ergelduulne
    setBurger({ ...burger, saving: true });

    // Firebase ruu hadgalna
    axios
      .post(`orders.json?auth=${token}`, newOrder)
      .then((response) => {
        setBurger({ ...burger, saving: false, finished: true, error: null });
      })
      .catch((error) => {
        setBurger({ ...burger, saving: false, finished: true, error });
      });
  };

  const clearBurger = () => {
    console.log("lalalar");
    setBurger({ ...burger, baseTatah: "Tat" });
    setBurger(initialState);
  };

  const addIngredient = (orts) => {
    setBurger({
      ...burger,
      ingredients: {
        ...burger.ingredients,
        [orts]: burger.ingredients[orts] + 1,
      },
      totalPrice: burger.totalPrice + INGREDIENT_PRICES[orts],
      purchasing: true,
    });
  };
  const removeIngredient = (orts) => {
    const newPrice = burger.totalPrice - INGREDIENT_PRICES[orts];
    setBurger({
      ...burger,
      ingredients: {
        ...burger.ingredients,
        [orts]: burger.ingredients[orts] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 1000,
    });
  };

  return (
    <BurgerContext.Provider
      value={{
        burger,
        Mdata,
        addIngredient,
        removeIngredient,
        saveBurger,
        clearBurger,
        toggle,
        // poloDoh,
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContext;
