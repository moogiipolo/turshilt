import React, { useContext, useState } from "react";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
import Logo from "../Logo";
const BuildCon = () => {
  const burgerContext = useContext(BurgerContext);
  const mdata = { ...burgerContext.Mdata };
  return (
    <div className={css.BuildControls}>
      {/* {console.log(burgerContext.burger, "haha")} */}
      {Object.keys(mdata).map((el, key) => (
        <p>{mdata[el].Нэр}{", "}{mdata[el].Тайлбар}{", ангилал: "}{mdata[el].Ангилал}{", Тоо: "}{mdata[el].Тоо}</p>
      ))}
      <button>ЗАХИАЛАХ</button>
    </div>
  );
};

export default BuildCon;
