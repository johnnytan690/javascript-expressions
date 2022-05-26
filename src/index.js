import React from "react";
import ReactDOM from "react-dom";

const first = "Johnny";
const last = "Tan";
var num = Math.floor(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>
      Hello {first} {last}!
    </h1>
    <p>Your lucky number is {num}. </p>
  </div>,
  document.getElementById("root")
);
