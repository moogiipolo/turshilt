import React, { useContext, useState } from "react";
import BurgerContext from "../../context/BurgerContext";
import "./style.css";
import countriesList from "../BuildHaih/countries.json"; 
const BuildHaih = (props) => {
  const burgerContext = useContext(BurgerContext);
  const Tuuver = {...burgerContext.tuuver};
  const [state, setState] = useState("");
  const [bichih, setBichih] = useState("");
  const [jijig, setJijig] = useState(countriesList);
  var code = bichih.toLowerCase();
  const changeBichih = e => {
    setBichih(e.target.value); 
  const searchleh = burgerContext.tuuver.filter( el => 
    el.Нэр.toLowerCase().includes(code)
    );
  console.log("sdsad", code, searchleh);
};
      return (
      <div className="flyout">
        <main>
                <input
                  type="search"
                  placeholder='Хайх'
                  onChange={changeBichih}
                />
        </main>
      </div>
    );
};
export default BuildHaih;
