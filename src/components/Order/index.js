import React from "react";

import css from "./style.module.css";

const Order = props => {
  return (
    <div className={css.Order}>
      <p>
        Нэр: 
        {props.order.Нэр}, {" "}
        {props.order.Тайлбар},{props.order.Ангилал}, Тоо :{" "}
        {props.order.Тоо}{props.order.ХэмжихНэгж}
      </p>
      {/* <p>
        Хаяг : {props.order.hayag.name} | {props.order.hayag.street} |
        {props.order.hayag.city}
      </p>
      <p>
        өҮнийн дүн : <strong>{props.order.dun}₮</strong>
      </p> */}
    </div>
  );
};

export default Order;
