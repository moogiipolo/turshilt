import React, { useState, useEffect } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import BuildCon from "../../components/BuildCon";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const continueOrder = () => {
    props.history.push("/ship");
  };

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  return (
    <div>
      <Modal closeConfirmModal={closeConfirmModal} show={confirmOrder}>
        <OrderSummary onCancel={closeConfirmModal} onContinue={continueOrder} />
      </Modal>
      <Burger />
      <BuildCon />
      <BuildControls showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default BurgerPage;
