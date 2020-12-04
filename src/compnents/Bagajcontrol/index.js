import React from "react";
import BagajControls from "../BagajControls";
import css from "./style.module.css";

const BagajControl = (
  props //Buildcontrols => Bagajcontrols
) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.orts}</div>
    <button className={css.Less}>хасах</button>
    <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>
      нэмэх
    </button>
  </div>
);

export default BagajControl;
