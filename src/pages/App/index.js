import React, { useState, useEffect, Suspense, useContext } from "react";
import { Redirect } from "react-router-dom";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import Logout from "../../components/Logout";
import { BurgerStore } from "../../context/BurgerContext";
import { OrderStore } from "../../context/OrdersContext";
import UserContext from "../../context/UserContext";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

const BurgerPage = React.lazy(() => {
  return import("../BurgerPage");
});

const OrderPage = React.lazy(() => {
  return import("../OrderPage");
});

const SignupPage = React.lazy(() => {
  return import("../SignupPage");
});

const App = (props) => {
  const userCtx = useContext(UserContext);
  const [showSidebar, setShowSidebar] = useState(true);
  const [ddata, setDdata] = useState(true);
  const toggleSideBar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  const [tuuver, setTuuver] = useState([]);
  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        setTuuver(Object.entries(response.data));
      })
      .catch((error) => {
        alert("sda yumaa");
      })
      .finally(() => {
        setDdata(false);
        // console.log("huleehaa", tuuver, ddata)
      });
  }, []);

  //  console.log("app derr",tuuver);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expireDate > new Date()) {
        // Hugatsaa n duusaaagui token baina, avtomat login hiine
        userCtx.loginUserSucces(token, userId, expireDate, refreshToken);
        // Token huchingui bolohod uldej baigaa hugatsaag tootsoolj
        // Ter hugatsaanii daraa avtomataar logout hiine
        userCtx.autoRenewTokenAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        // Token hugatsaa n duussan bainaa, logout hiine
        // userCtx.logout();
        userCtx.autoRenewTokenAfterMillisec(3600000);
      }
    }
  }, []);
  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />

      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />

      <main className={css.Content}>
        {ddata ? (
          <Spinner />
        ) : (
          <BurgerStore gigi={tuuver}>
            <Suspense fallback={<div>Түр хүлээнэ үү...</div>}>
              {userCtx.state.userId ? (
                <Switch>
                  <Route path="/logout" component={Logout} />
                  <Route path="/orders">
                    <OrderStore>
                      <OrderPage />
                    </OrderStore>
                  </Route>
                  <Route path="/ship" component={ShippingPage} />
                  <Route path="/" component={BurgerPage} />
                </Switch>
              ) : (
                <Switch>
                  <Route path="/signup" component={SignupPage} />
                  <Route path="/login" component={LoginPage} />
                  <Redirect to="/login" />
                </Switch>
              )}
            </Suspense>
          </BurgerStore>
        )}
      </main>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     autoLogin: (token, userId) =>
//       dispatch(actions.loginUserSuccess(token, userId)),
//     logout: () => dispatch(signupActions.logout()),
//     autoLogoutAfterMillisec: () =>
//       dispatch(signupActions.autoLogoutAfterMillisec()),
//   };
// };

export default App;
