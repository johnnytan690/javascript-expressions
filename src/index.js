import React from "react";
import ReactDOM from "react-dom";

const name = "Johnny";
var num = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {num}. </p>
  </div>,
  document.getElementById("root")
);
