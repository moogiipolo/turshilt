import React, { useState } from "react";
import axios from "../axios-orders";

const BurgerContext = React.createContext();
    // axios.get("/orders.json")
    // .then(resp => {
    //   const popop = (resp.data)
    //   console.log("ehleed uguuch", popop);
    // })  
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
  const [tuuver, setTuuver] = useState(props.gigi);
  const toggle = () => {setBurger({ ...burger, saving: !burger.saving }); };
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
  const clearBurger = () => { setBurger(initialState);};
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
