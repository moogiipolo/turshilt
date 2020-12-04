import React from "react";
import css from "./style.module.css";

const Bagajnuud = props => {
  //BurgerIngredient => Bagajnuud
  if (props.type == "BagajBaterei")
    return <div className={css.BagajBaterei}>{props.type}</div>;
  if (props.type == "BagajGaz")
    return <div className={css.BagajGaz}>{props.type}</div>;
  if (props.type == "BagajGar")
    return <div className={css.BagajGar}>{props.type}</div>;
  if (props.type == "BagajTsahilgaan")
    return <div className={css.BagajTsahilgaan}>{props.type}</div>;
  if (props.type == "Dagaldah")
    return <div className={css.Dagaldah}>{props.type}</div>;
  if (props.type == "Material")
    return <div className={css.Material}>{props.type}</div>;
  if (props.type == "HoolHuns")
    return <div className={css.HoolHuns}>{props.type}</div>;
  return <div>busad</div>;
};


export default Bagajnuud;
