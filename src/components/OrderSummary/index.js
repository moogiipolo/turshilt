import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";
import Button from "../General/Button";

const OrderSummary = (props) => {
  const ctx = useContext(BurgerContext);
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд: </p>
      <ul>
        {/* {Object.keys(ctx.tuuver).map(
          (el) => (
            // <li key={el}>
            //   {ctx.burger.ingredientNames[el]} : {ctx.burger.ingredients[el]}
            // </li>
            console.log("haha", el), (<p>sda yum aa</p>)
          )
        )} */}
      </ul>
      <p>
        <strong>Захиалгын дүн: {ctx.burger.totalPrice}₮ </strong>
      </p>
      <p>Цаашаа үргэлжлүүлэх үү?</p>
      <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ" />
      <Button
        daragdsan={props.onContinue}
        btnType="Success"
        text="ҮРГЭЛЖЛҮҮЛЭХ"
      />
    </div>
  );
};

export default OrderSummary;
