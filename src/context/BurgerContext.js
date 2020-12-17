import React, { useState } from "react";
import axios from "../axios-orders";
import Axios from 'axios'
// const [firebase, setFirebase] = useState();
//   axios
//   .get("/orders.json")
//   .then((resp) => {
//     setFirebase(resp.data); 
//  console.log(firebase);
//   });

const BurgerContext = React.createContext();
const INGREDIENT_PRICES = {salad: 150, cheese: 250, bacon: 800, meat: 1500};
// componentDidMount() {
//   axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons });
//     })
// }
// const donDog =() => (
// Axios
// .get("https://moogiipolollc.firebaseio.com/orders.json")
// .then(response => {
//   const resp = response.data;
//   donDog({resp})})
// .catch((err) => console.log("aldaa garlaa", err))

// );
  const initialState = {
    ingredients: {salad: 0, cheese: 0, bacon: 0, meat: 0},
    totalPrice: 1000,
    purchasing: false,
    ingredientNames: {
      bacon: "Гахайн мах",
      cheese: "Бяслаг",
      meat: "Үхрийн мах",
      salad: "Салад",
    },
    zogsooh: 0,
    saving: false,
    finished: false,
    error: null,

    };


export const BurgerStore = (props) => {
  const [burger, setBurger] = useState(initialState);
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
    const poloDoh = () => {

    
    axios
    .get("/orders.json")
    .then((dorj) => {
      const loaddOrders = (dorj.data)
      setBurger({...burger, data: loaddOrders, zogsooh: "1"} )
      // console.log("data ==>1", burger)
      // // console.log("===>", loaddOrders);
    });
  }
  const clearBurger = () => {
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
  const addmiIngredient = () => {
    setBurger({
      ...burger,
      zogsooh: true,
    });
    // console.log(direBase, "dddpp");

 
  };
// const [direbase, setDirebase] = useState();
//   axios
//   .get("/orders.json")
//   .then((drj) => {
//     // setDirebase(drj.data) 
//     console.log("fdsfs", direbase);
//     console.log("===>", drj);
//   });
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
        addIngredient,
        addmiIngredient,
        removeIngredient,
        saveBurger,
        clearBurger,
        toggle,
        poloDoh,
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};

export default BurgerContext;
