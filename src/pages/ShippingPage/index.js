import React, { useContext } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { Route } from "react-router-dom";
import css from "./style.module.css";
import ContactData from "../../components/ContactData";
import BurgerContext from "../../context/BurgerContext";

const ShippingPage = (props) => {
  const ctx = useContext(BurgerContext);
  const cancelOrder = () => {
    props.history.goBack();
  };

  const showContactData = () => {
    props.history.replace("/ship/contact");
  };

  return (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "16px" }}>
        <strong>Таны захиалга</strong>
      </p>
      <p style={{ fontSize: "12px" }}>
        <strong>Дүн : {ctx.burger.totalPrice}₮</strong>
      </p>

      <Burger />

      <Button
        daragdsan={cancelOrder}
        btnType="Danger"
        text="ЗАХИАЛГЫГ ЦУЦЛАХ"
      />

      <Button
        daragdsan={showContactData}
        btnType="Success"
        text="АЖЛЫН МЭДЭЭЛЭЛ ОРУУЛАХ"
      />

      <Route path="/ship/contact">
        <ContactData />
      </Route>
    </div>
  );
};

export default ShippingPage;
