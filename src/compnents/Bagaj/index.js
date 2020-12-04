import React from "react";
import Bagajnuud from "../Bagajnuud";
import css from "./style.module.css";

const Bagaj = props => { //Burger => Bagaj
  // console.log(props.orts);
  const items = Object.entries(props.orts);
   //items.map((el, op, j) => { geed olong neej bolno})
  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<Bagajnuud key={`${el[0]}${i + 1}`} type={el[0]} />); //contentruu base hiih
  });

  if (content.length === 0) 
    content = <p>Багаж материалаа сонгоно уу...</p>; 

  return (
    <div className={css.Bagaj}>
      <br /><br /><br />
      <Bagajnuud type="HoolHuns" />
      {content}
      <Bagajnuud type="HoolHuns" />
    </div>
  );
};

export default Bagaj;
