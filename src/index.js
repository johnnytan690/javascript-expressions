import React from "react";
import ReactDOM from "react-dom";

const name = "Johnny";
var luckynumber = Math.random();

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {luckynumber}. </p>
  </div>,
  document.getElementById("root")
);
