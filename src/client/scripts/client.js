import App from '../../app';
import React from "react";
import {render} from "react-dom";
import routes from "../../app/routes";
import {Router, browserHistory} from "react-router";
// import "babel-polyfill";
var attachElement = document.getElementById('app');
console.log(routes);
render(<Router history={browserHistory} routes={routes} />, attachElement);
