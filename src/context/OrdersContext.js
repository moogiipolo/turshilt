import React, { useState } from "react";
import axios from "../axios-orders";

const OrderContext = React.createContext();

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const OrderStore = (props) => {
  const [state, setState] = useState(initialState);
  const [sfile, setSfile] = useState([]);

  const loadOrders = (userId, token) => {
    // Захиалгыг татаж эхлэлээ гэдгийг мэдэгдэнэ.
    // Энийг хүлээж аваад Spinner ажиллаж эхлэнэ.
    setState({ ...state, loading: true });

    axios
      .get(`orders.json?&auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        setState({ ...state, orders: loadedOrders });
        const file = response.data;
        setSfile(file);
      })
      .catch((err) => setState({ ...state, error: err }));
  };

  return (
    <OrderContext.Provider value={{ state, loadOrders, sfile }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
