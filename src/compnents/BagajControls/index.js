import React from "react";

import BagajControl from "../Bagajcontrol";
import css from "./style.module.css";

const BagajControls = props => (
  <div className={css.BagajControls}>
    <BagajControl ortNemeh={props.ortsNemeh} type="BagajBaterei" orts="Багаж Батерей" />
    <BagajControl ortNemeh={props.ortsNemeh} type="BagajGaz" orts="Багаж Газ" />
    <BagajControl ortNemeh={props.ortsNemeh} type="BagajGar" orts="Багаж Гар" />
    <BagajControl
      ortNemeh={props.ortsNemeh}
      type="BagajTsahilgaan"
      orts="Багаж Цахилгаан"
    />
    <BagajControl ortNemeh={props.ortsNemeh} type="Dagaldah" orts="Дагалдах" />
    <BagajControl ortNemeh={props.ortsNemeh} type="Material" orts="Материал" />
    <BagajControl ortNemeh={props.ortsNemeh} type="HoolHuns" orts="Хоол хүнс" />
  </div>
); //Buildcontrols => Bagajcontrols

export default BagajControls;
