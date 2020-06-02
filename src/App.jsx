import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Topbar from "./components/Topbar";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Bag from "./components/Bag";
import Search from "./components/Search";

import "./assets/css/normalize.css";
import "./app.css";

function App() {
  const [toggleBag, setToggleBag] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const toggleBagHandle = () => setToggleBag(!toggleBag);
  const toggleSearchHandle = () => setToggleSearch(!toggleSearch);

  return (
    <div className="app">
      <BrowserRouter>
        <Topbar toggleBag={toggleBagHandle} toggleSearch={toggleSearchHandle} />
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route path="/produto/:productname">
            <Product />
          </Route>
        </Switch>
        {toggleBag && <Bag toggle={toggleBagHandle} />}
        {toggleSearch && <Search toggle={toggleSearchHandle} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
