import React, { useState, useEffect } from "react";
import axios from "../axios-orders";

const BurgerContext = React.createContext();
const initialState = {
  totalPrice: 0,
  purchasing: false,
  effect: true,
  saving: false,
  finished: false,
  error: null,
};
export const BurgerStore = (props) => {
  const [burger, setBurger] = useState(initialState);
  const [tuuver, setTuuver] = useState(props.firebase);
  const [tuuverS, setTuuverS] = useState(tuuver);
  // useEffect(() => {
  //   tuuver.map((el, key) => {
  //     console.log(tuuver[key]);
  //     setTuuver({
  //       ...tuuver,
  //       [key]: [
  //         ...[tuuver[key][0]],
  //         ...[tuuver[key][1]],
  //         { label: tuuver[key][1][1].Ангилал },
  //       ],
  //     });
  //   });
  // }, []);
  const saveBurger = (newOrder, token) => {
    setBurger({ ...burger, saving: true });
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
    setTuuver(props.firebase);
    setBurger(props.firebase);
  };
  const searchHiih = (ugs) => {
    setTuuverS(
      props.firebase.filter((el) =>
        el[1][1].Нэр.toLowerCase().includes(ugs.toLowerCase())
      )
    );
  };
  const addIngredient = (orts) => {
    if (tuuver[orts][1][1].Тоо !== tuuver[orts][1][1].НийтҮнэ) {
      setBurger({
        ...burger,
        totalPrice: burger.totalPrice + tuuver[orts][1][1].НэгжҮнэ,
        purchasing: true,
      });
      setTuuver({
        ...tuuver,
        [orts]: [
          ...[tuuver[orts][0]],
          [
            ...[tuuver[orts][1][0]],
            {
              userId: tuuver[orts][1][1].userId,
              Ангилал: tuuver[orts][1][1].Ангилал,
              ДагалдахХэрэгсэл: tuuver[orts][1][1].ДагалдахХэрэгсэл,
              Загвар: tuuver[orts][1][1].Загвар,
              Линк: tuuver[orts][1][1].Линк,
              НэгжҮнэ: tuuver[orts][1][1].НэгжҮнэ,
              Тоо: tuuver[orts][1][1].Тоо,
              Хэзээ: tuuver[orts][1][1].Хэзээ,
              ХэмжихНэгж: tuuver[orts][1][1].ХэмжихНэгж,
              Эвдэрэл: tuuver[orts][1][1].Эвдэрэл,
              Нэр: tuuver[orts][1][1].Нэр,
              if: false,
              НийтҮнэ: tuuver[orts][1][1].НийтҮнэ + 1,
            },
          ],
        ],
      });
    }
  };
  const removeIngredient = (orts) => {
    const newPrice = burger.totalPrice - tuuver[orts][1][1].НэгжҮнэ;
    setBurger({
      ...burger,
      totalPrice: newPrice,
      purchasing: newPrice > 0,
    });
    setTuuver({
      ...tuuver,
      [orts]: [
        ...[tuuver[orts][0]],
        [
          ...[tuuver[orts][1][0]],
          {
            userId: tuuver[orts][1][1].userId,
            Ангилал: tuuver[orts][1][1].Ангилал,
            ДагалдахХэрэгсэл: tuuver[orts][1][1].ДагалдахХэрэгсэл,
            Загвар: tuuver[orts][1][1].Загвар,
            Линк: tuuver[orts][1][1].Линк,
            НэгжҮнэ: tuuver[orts][1][1].НэгжҮнэ,
            Тоо: tuuver[orts][1][1].Тоо,
            Хэзээ: tuuver[orts][1][1].Хэзээ,
            ХэмжихНэгж: tuuver[orts][1][1].ХэмжихНэгж,
            Эвдэрэл: tuuver[orts][1][1].Эвдэрэл,
            Нэр: tuuver[orts][1][1].Нэр,
            if: tuuver[orts][1][1].if,
            НийтҮнэ: tuuver[orts][1][1].НийтҮнэ - 1,
          },
        ],
      ],
    });
  };
  return (
    // console.log(tuuver.q001),
    <BurgerContext.Provider
      value={{
        burger,
        tuuver,
        tuuverS,
        addIngredient,
        removeIngredient,
        saveBurger,
        clearBurger,
        searchHiih,
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContext;
