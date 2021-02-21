import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import Home from "./home/Home";
import "./App.css";
import Checkout from "./checkout/Checkout";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
