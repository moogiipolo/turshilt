import React, { useContext, useState, Fragment } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import BurgerContext from "../../context/BurgerContext";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext);
  const [songoltNeg, setSongoltNeg] = useState(""); //userId
  const [songoltHoyor, setSongoltHoyor] = useState(""); //Angilal
  const disabledIngredients = { ...burgerContext.tuuver };
  for (let key in burgerContext.tuuver) {
    disabledIngredients[key][1][1].if =
      disabledIngredients[key][1][1].НийтҮнэ <= 0;
  }
  const changeBichih = (e) => {
    burgerContext.searchHiih(e.target.value);
  };
  const changeSongoh1 = (e) => {
    setSongoltNeg(e.target.value);
  };
  const changeSongoh2 = (e) => {
    setSongoltHoyor(e.target.value);
  };
  return (
    <div className={css.BuildControls}>
      <button
        onClick={props.showConfirmModal}
        disabled={!burgerContext.burger.purchasing}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
      <table>
        <tr>
          <th>
            хаана, хэнээс:
            <select
              type="text"
              placeholder="сонгох"
              value={songoltNeg}
              onChange={changeSongoh1}
            >
              <option value="">ALL</option>
              <option value="гэрт">гэрт</option>
              <option value="агуулах">агуулах</option>
            </select>
          </th>
          <th>
            Ангилал:
            <select
              type="text"
              placeholder="сонгох"
              value={songoltHoyor}
              onChange={changeSongoh2}
            >
              <option value="">ALL</option>
              <option value="багаж батерей">Багаж батерей</option>
              <option value="багаж газ">Багаж газ</option>
              <option value="багаж гар">Багаж гар</option>
              <option value="багаж цахилгаан">Багаж цахилгаан</option>
              <option value="дагалдах">Дагалдах</option>
            </select>
          </th>
          <th>
            <input
              type="text"
              placeholder="Нэрнээс хайх"
              onChange={changeBichih}
            />
          </th>
        </tr>
      </table>

      {Object.entries(burgerContext.tuuverS).map((el, key) => {
        let x;

        // console.log(resp)
        if (
          (burgerContext.tuuverS[key][1][1].Ангилал === songoltHoyor &&
            burgerContext.tuuverS[key][1][1].userId == songoltNeg) ||
          (burgerContext.tuuverS[key][1][1].userId === songoltNeg &&
            songoltHoyor === "") ||
          (burgerContext.tuuverS[key][1][1].Ангилал === songoltHoyor &&
            songoltNeg === "") ||
          (songoltNeg === "" && songoltHoyor === "")
        ) {
          return (
            <Fragment key={key}>
              <BuildControl
                key={key}
                disabled={disabledIngredients}
                type={burgerContext.tuuverS[key][0]}
                ortsa={
                  burgerContext.tuuver[burgerContext.tuuverS[key][0]][1][1].Нэр
                }
                ortsb={", "}
                ortsc={" "}
                baigaaToo={
                  burgerContext.tuuver[burgerContext.tuuverS[key][0]][1][1].Тоо
                }
                tegToo={
                  burgerContext.tuuver[burgerContext.tuuverS[key][0]][1][1]
                    .НийтҮнэ
                }
              />
            </Fragment>
          );
        }
      })}
      <p>
        Үнэ : <strong>{burgerContext.burger.totalPrice}</strong>
      </p>
    </div>
  );
};

export default BuildControls;
