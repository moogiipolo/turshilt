import React, { useState, useEffect, useContext } from "react";
import axios from "../axios-orders";
import UserContext from "../context/UserContext";

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
  const userCtx = useContext(UserContext);
  const [burger, setBurger] = useState(initialState);
  const [tuuver, setTuuver] = useState(props.firebase);
  const [tuuverS, setTuuverS] = useState(tuuver);
  const [hevlehEh, setHevlehEh] = useState(tuuver);
  const saveBurger = (newOrder, token) => {
    setBurger({ ...burger, saving: true });
    Object.keys(tuuver).map((el, orts) => {
      if (tuuver[orts][1][1].НийтҮнэ !== 0) {
        const hevl = {
          Ангилал: tuuver[orts][1][1].Ангилал,
          ДагалдахХэрэгсэл: tuuver[orts][1][1].ДагалдахХэрэгсэл,
          Загвар: tuuver[orts][1][1].Загвар,
          Линк: tuuver[orts][1][1].Линк,
          НэгжҮнэ: tuuver[orts][1][1].НэгжҮнэ,
          Тоо: tuuver[orts][1][1].НийтҮнэ,
          Хэзээ: Date(),
          ХэмжихНэгж: tuuver[orts][1][1].ХэмжихНэгж,
          Эвдэрэл: tuuver[orts][1][1].Эвдэрэл,
          Нэр: tuuver[orts][1][1].Нэр,
          if: true,
          userId: userCtx.state.userId,
          НийтҮнэ: 0,
          hayag: newOrder.hayag,
        };
        axios
          .post(`orders.json?auth=${token}`, hevl)
          .then((response) => {
            // setBurger({ ...burger, saving: false, finished: true, error: null });
          })
          .catch((error) => {
            setBurger({ ...burger, saving: false, finished: true, error });
          });
      } else {
        console.log("whaha");
      }
    });
    setBurger({ ...burger, saving: false, finished: true, error: null });
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
