import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";
import Button from "../General/Button";

const OrderSummary = (props) => {
  const ctx = useContext(BurgerContext);
  return (
    <div>
      <h3>Сайн шалгаарай</h3>
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
