import React, { useContext, useState, useEffect } from "react";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../BuildControl";
import BuildHaih from "../BuildHaih";
import css from "./style.module.css";

const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext);
  const disabledIngredients = { ...burgerContext.tuuver};
  const [bicHih, setBichih] = useState("");
  const [searchleh, setSearchleh] = useState(burgerContext.tuuver);
 
  for (let key in burgerContext.tuuver) {
    disabledIngredients[key].if = disabledIngredients[key].НийтҮнэ <= 0;
    }
    const changeBichih = e => {
      setBichih(e.target.value); 
    // setSearchleh( burgerContext.tuuver.filter( el => 
    //   el.Нэр.toLowerCase().includes(bicHih.toLowerCase())
    //   ))
  };
  useEffect(() => {
    setSearchleh( burgerContext.tuuver.filter( el => 
      el.Нэр.toLowerCase().includes(bicHih.toLowerCase())))
  }, [bicHih]);
  return (
    <div className={css.BuildControls}>
        <p>Бургерийн үнэ : <strong>{burgerContext.burger.totalPrice}</strong></p>
      {/* <BuildHaih /> */}
      <input
                  type="text"
                  placeholder='Хайх'
                  onChange={changeBichih}
                />
                {console.log("searchleh => ", searchleh, "bichih => ", bicHih)}
      {Object.keys(searchleh).map((el) => (
        (<BuildControl
          key={el}
          disabled={disabledIngredients}
          type={el}
          ortsa={searchleh[el].Нэр}
          ortsb={", "}
          ortsc={searchleh[el].Тайлбар}
          baigaaToo={searchleh[el].Тоо}
          tegToo={searchleh[el].НийтҮнэ}
        />)
      
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={!burgerContext.burger.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
