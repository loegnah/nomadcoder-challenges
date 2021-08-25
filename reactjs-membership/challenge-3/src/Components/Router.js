import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/Prices" exact component={Prices} />
      <Route path="/Exchanges" exact component={Exchanges} />
      <Route path="/Coins" exact component={Coins} />
    </Switch>
  </Router>
);
