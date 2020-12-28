import React, { useState } from "react";
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
  const [tuuver2, setTuuver2] = useState(props.gigi);
  const [tuuver, setTuuver] = useState(tuuver2);
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
  };
  const searchHiih = (ugs) => {
    setTuuver(
      tuuver2.filter((el) =>
        el[1].Нэр.toLowerCase().includes(ugs.toLowerCase())
      )
    );
  };
  console.log(tuuver);
  const addIngredient = (orts) => {
    if (tuuver[orts][1].Тоо !== tuuver[orts][1].НийтҮнэ) {
      setBurger({
        ...burger,
        totalPrice: burger.totalPrice + tuuver[orts][1].НэгжҮнэ,
        purchasing: true,
      });
      setTuuver({
        ...tuuver,
        [orts]: [
          ...[tuuver[orts][0]],
          {
            userId: tuuver[orts][1].userId,
            Ангилал: tuuver[orts][1].Ангилал,
            Брэнд: tuuver[orts][1].Брэнд,
            ДагалдахХэрэгсэл: tuuver[orts][1].ДагалдахХэрэгсэл,
            Загвар: tuuver[orts][1].Загвар,
            Линк: tuuver[orts][1].Линк,
            НэгжҮнэ: tuuver[orts][1].НэгжҮнэ,
            Тайлбар: tuuver[orts][1].Тайлбар,
            Тоо: tuuver[orts][1].Тоо,
            Хэзээ: tuuver[orts][1].Хэзээ,
            ХэмжихНэгж: tuuver[orts][1].ХэмжихНэгж,
            Эвдэрэл: tuuver[orts][1].Эвдэрэл,
            Нэр: tuuver[orts][1].Нэр,
            if: true,
            НийтҮнэ: tuuver[orts][1].НийтҮнэ + 1,
          },
        ],
      });
    }
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
        НийтҮнэ: tuuver[orts].НийтҮнэ - 1,
      },
    });
  };
  return (
    // console.log(tuuver.q001),
    <BurgerContext.Provider
      value={{
        burger,
        tuuver,
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
