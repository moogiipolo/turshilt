import React from "react";

import logoImage from "../../assets/images/burger-logo.png";
import css from "./style.module.css";

function Logo() {
  return (
    <div className={css.Logo}>
      <img src={logoImage} />
    </div>
  );
}

export default Logo;
