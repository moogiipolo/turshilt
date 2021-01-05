import React from "react";
import css from "./style.module.css";
const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        {props.key}: {props.order.Нэр}
      </p>
    </div>
  );
};
export default Order;
