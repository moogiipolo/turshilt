import React, { useContext } from "react";
import css from "./style.module.css";
import BurgerContext from "../../context/BurgerContext";
import Nemeh from "./nemeh";
import Hasah from "./hasah";
import Bairlal from "./bairlal";
import TegToo from "./tegToo";
const BuildControl = (props) => {
  const burgerContext = useContext(BurgerContext);
  if (props.turul !== 0)
    return (
      <tr>
        <th>
          <Bairlal bairlal={props.bairlal} />
        </th>
        {/* <th>{props.bairlal}</th> */}
        {/* <th>{props.turul}</th> */}
        <th>{props.angilal}</th>
        <th className={css.thzag}>{props.ner}</th>
        <th>
          <Hasah turul={props.tegToo} type={props.type} />
          <strong className={css.Zai}> </strong>
          <TegToo turul={props.tegToo} type={props.type} />
          <strong className={css.Zai}> </strong>
          <Nemeh
            turul={props.tegToo}
            baigaaToo={props.baigaaToo}
            type={props.type}
          />
          <strong className={css.Zai}> </strong>
          <strong>
            {props.baigaaToo}
            {props.hemjihNegj}
          </strong>
          {/* <button
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
          </button> */}
          {/* <strong>
          {props.baigaaToo}, {props.tegToo}
        </strong> */}
        </th>
        <th>{props.zagvar}₮</th>
        <th>{props.evderel}</th>
        <th>{props.dagaldah}</th>
      </tr>
    );
  else {
    return null;
  }
};
export default BuildControl;
