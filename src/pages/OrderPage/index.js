import React, { useEffect, useContext } from "react";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import OrderContext from "../../context/OrdersContext";
import UserContext from "../../context/UserContext";
import PTest from "../../components/PTest";
const OrderPage = () => {
  useEffect(() => {
    orderContext.loadOrders(userContext.state.userId, userContext.state.token);
  }, []);

  const orderContext = useContext(OrderContext);
  const userContext = useContext(UserContext);

  return (
    <div>
      {/* <PTest /> */}
      {orderContext.state.loading ? (
        <Spinner />
      ) : (
        // ((<PTest />), console.log(orderContext.sfile))
        // // ((<PTest />),
        orderContext.state.orders.map((el, key) => (
          <Order key={key + 1} order={el[1]} />
          // , console.log(key + 1, el)
          // )
        ))
      )}
    </div>
  );
};

export default OrderPage;
