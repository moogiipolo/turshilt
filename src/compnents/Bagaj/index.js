import React from "react";

import css from "./style.module.css";
import Bagajnuud from "../Bagajnuud";
const Bagaj = (props) => {
  //Burger => Bagaj
  // console.log(props.orts);
  const items = Object.entries(props.orts);
  let content = [];
  items.map((el) => {
    //items.map((el, op, j) => { geed olong neej bolno})
    for (let i = 0; i < el[1]; i++)
      content.push(<Bagajnuud key={"${el[0]}${i + 1}"} type={el[0]} />); //contentruu base hiih
  });

  if (content.length === 0) content = <p>Багаж материалаа сонгоно уу...</p>; //36 r hicheel 24.44cek deer zogosloo

  return (
    <div className={css.Bagaj}>
      <Bagajnuud type="BagajBaterei" />
      {content}
      {/* <Bagajnuud type="BagajGaz" />
    <Bagajnuud type="BagajGar" />
    <Bagajnuud type="BagajTsahilgaan" />
    <Bagajnuud type="Dagaldah" />
    <Bagajnuud type="Material" />
    <Bagajnuud type="HoolHuns" />
    <Bagajnuud type="buuz" /> */}
    </div>
  );
};
export default Bagaj;
