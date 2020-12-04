import React from "react";
import css from "./style.module.css";

const BagajControl = props =>  (
    <div className={css.BagajControl}>
      <div className={css.Label}>{props.orts}</div>
      <button className={css.Less}>Хасах</button>
      <button onClick={() => props.ortsNemeh(props.type)} className={css.More}>Нэмэх</button>
    </div>
  );


export default BagajControl;
