import React from "react";
import css from "./style.module.css";

import Toolbar from "../../compnents/ToolBar";
import Add from "../Add"; //BurgerBuilder => Add

function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content}>
        <Add />
      </main>
    </div>
  );
}

export default App;
