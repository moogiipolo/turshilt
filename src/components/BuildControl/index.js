import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";
import Nemeh from "./nemeh";
import Hasah from "./hasah";
const BuildControl = (props) => {
  const burgerContext = useContext(BurgerContext);
  if (props.turul !== 0)
    return (
      <tr>
        <th>{props.bairlal}</th>
        <th>{props.turul}</th>
        <th>{props.angilal}</th>
        <th>{props.ner}</th>
        <th>
          <Nemeh turul={props.turul} />
          <Hasah turul={props.turul} />
          <button
            disabled={props.disabled[props.type][1][1].if}
            onClick={() => burgerContext.removeIngredient(props.type)}
            className={css.Less}
          >
            -
          </button>
          <strong className={css.Zai}>-+</strong>
          <button
            onClick={() => burgerContext.addIngredient(props.type)}
            className={css.More}
          >
            +
          </button>
          {/* <strong>
          {props.baigaaToo}, {props.tegToo}
        </strong> */}
        </th>
        <th>{props.zagvar}</th>
        <th>{props.evderel}</th>
        <th>{props.dagaldah}</th>
      </tr>
    );
  else {
    return null;
  }
};
export default BuildControl;
