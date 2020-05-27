import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Topbar from "./components/Topbar";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Bag from "./components/Bag";
import Search from "./components/Search";

import "./assets/css/normalize.css";
import "./app.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route path="/product/:productname">
            <Product />
          </Route>
        </Switch>
        <Bag />
        <Search />
      </BrowserRouter>
    </div>
  );
}

export default App;
