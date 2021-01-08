import React, { useContext } from "react";
import css from "./style.module.css";
const Bairlal = (props) => {
  if (props.bairlal === "fSiuttgUGsYprL3rtacbjT138rv1") return "Мөнх-Эрдэнэ";
  else {
    if (props.bairlal === "p99X93YP3HWtNc8QGZMe3A5s8rQ2") return "Агуулах";
    else {
      if (props.bairlal === "санхагүй байгаа") return "Санахгүй байгаа";
      else {
        if (props.bairlal === "гэрт") return "гэрт";
        else {
          if (props.bairlal === "дээд гэрт") return "30-607";
          else {
            if (props.bairlal === "агуулах") return "засах";
            else {
              if (props.bairlal === "rrdWK8feiNYDKGgB7xLDrmiVKT02")
                return "утас";
              else {
                console.log(props.bairlal);
                return null;
              }
            }
          }
        }
      }
    }
  }
};
export default Bairlal;
