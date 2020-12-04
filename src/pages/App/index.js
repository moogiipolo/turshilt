import React, { Fragment, useEffect, useState } from "react";
import css from "./style.module.css";
import Toolbar from "../../compnents/ToolBar";
import Add from "../Add"; //BurgerBuilder => Add

function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.content}>
        <Add />
      </main>
    </div>
  );
}

export default App;
