import App from '../../app';
import React from "react";
import ReactDOM from "react-dom";
// import "babel-polyfill";
var attachElement = document.getElementById('app');

console.log("RUN");
ReactDOM.render(<App />, attachElement);