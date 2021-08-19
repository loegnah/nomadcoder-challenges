import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <ul>
      <li><Link to={"/Prices"}>Prices</Link></li>
      <li><Link to={"/Exchanges"}>Exchanges</Link></li>
      <li><Link to={"/Coins"}>Coins</Link></li>
    </ul>
  </header>
);
