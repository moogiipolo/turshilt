import React, { useEffect, useContext } from "react";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import OrderContext from "../../context/OrdersContext";
import UserContext from "../../context/UserContext";
const OrderPage = () => {
  useEffect(() => {
    orderContext.loadOrders(userContext.state.userId, userContext.state.token);
  }, []);

  const orderContext = useContext(OrderContext);
  const userContext = useContext(UserContext);

  return (
    <div>
      {orderContext.state.loading ? (
        <Spinner />
      ) : (
        orderContext.state.orders.map((el, key) => (
          <Order key={key + 1} order={el[1]} />
          // , console.log(key + 1, el)
        ))
      )}
    </div>
  );
};

export default OrderPage;
