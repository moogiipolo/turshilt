import React, { useState, useEffect } from "react";
import axios from "../axios-orders";

const BurgerContext = React.createContext();

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  totalPrice: 0,
  purchasing: false,
  ingredientNames: {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    salad: "Салад",
  },
  effect: true,
  saving: false,
  finished: false,
  error: null,
};

export const BurgerStore = (props) => {
  const [burger, setBurger] = useState(initialState);
  const [tuuver, setTuuver] = useState();
  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        setTuuver(response.data);
        setBurger({...burger, effect: false});
        // console.log("==>",tuuver);
      })
  }, [burger.effect]);

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
    setBurger(initialState);
  };

  const addIngredient = (orts) => {
    if (tuuver[orts].Тоо !== tuuver[orts].НийтҮнэ)
    {
    setBurger({
      ...burger,
      totalPrice: burger.totalPrice + tuuver[orts].НэгжҮнэ,
      purchasing: true,
    });
    setTuuver({
        ...tuuver,
        [orts]: {
          userId: tuuver[orts].userId,
          Ангилал: tuuver[orts].Ангилал,
          Брэнд: tuuver[orts].Брэнд,
          ДагалдахХэрэгсэл: tuuver[orts].ДагалдахХэрэгсэл,
          Загвар: tuuver[orts].Загвар,
          Линк: tuuver[orts].Линк,
          НэгжҮнэ: tuuver[orts].НэгжҮнэ,
          Тайлбар: tuuver[orts].Тайлбар,
          Тоо: tuuver[orts].Тоо,
          Хэзээ: tuuver[orts].Хэзээ,
          ХэмжихНэгж: tuuver[orts].ХэмжихНэгж,
          Эвдэрэл: tuuver[orts].Эвдэрэл,
          Нэр: tuuver[orts].Нэр,
          if: true,
          НийтҮнэ: tuuver[orts].НийтҮнэ + 1,}
      },
    );}
    };

  const removeIngredient = (orts) => {
    const newPrice = burger.totalPrice - tuuver[orts].НэгжҮнэ;
      setBurger({
      ...burger,
      totalPrice: newPrice,
      purchasing: newPrice > 0,
    });
    setTuuver({
        ...tuuver,
        [orts]: {
          userId: tuuver[orts].userId,
          Ангилал: tuuver[orts].Ангилал,
          Брэнд: tuuver[orts].Брэнд,
          ДагалдахХэрэгсэл: tuuver[orts].ДагалдахХэрэгсэл,
          Загвар: tuuver[orts].Загвар,
          Линк: tuuver[orts].Линк,
          НэгжҮнэ: tuuver[orts].НэгжҮнэ,
          Тайлбар: tuuver[orts].Тайлбар,
          Тоо: tuuver[orts].Тоо,
          Хэзээ: tuuver[orts].Хэзээ,
          ХэмжихНэгж: tuuver[orts].ХэмжихНэгж,
          Эвдэрэл: tuuver[orts].Эвдэрэл,
          Нэр: tuuver[orts].Нэр,
          if: tuuver[orts].if,
          НийтҮнэ: tuuver[orts].НийтҮнэ - 1,}
      },
    );
    };

  return (
    <BurgerContext.Provider
      value={{
        burger,
        tuuver,
        addIngredient,
        removeIngredient,
        saveBurger,
        clearBurger,
        toggle,
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContext;
