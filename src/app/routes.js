import App from "./app";
import Profile from "./components/profile";
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import React from "react";
module.exports = (
   <Route path= "/" component={App}>
      <Route path="/stats/:uuid" component={Profile} />
  </Route>
);
