import React, { Component } from "react";
// import css from "./style.module.css";
import Bagaj from "../../compnents/Bagaj";
import BagajControls from "../../compnents/BagajControls";

class Add extends Component {
  //BurgerBuilder => Add
  state = {
    ingredients: { BagajGar: 1, BagajGaz: 5, BagarBaterei: 0, Dagaldah: 0 },
  };
  ortsNemeh = (type) => {
    console.log("===" + type);
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    this.setState({ ingredients: newIngredients });
  };
  render() {
    return (
      <div>
        <Bagaj orts={this.state.ingredients} />
        <BagajControls ortsNemeh={this.ortsNemeh} />
      </div>
    );
  }
}
export default Add;
