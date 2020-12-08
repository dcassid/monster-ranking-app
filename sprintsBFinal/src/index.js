import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./index.css";

const root = document.querySelector("#root");
console.log(root);

ReactDOM.render(<App />, root);
