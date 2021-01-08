import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../../context/BurgerContext";
const TegToo = (props) => {
  const burgerContext = useContext(BurgerContext);
  if (props.turul !== 0) return <strong>{props.turul}</strong>;
  else {
    return null;
  }
};
export default TegToo;
