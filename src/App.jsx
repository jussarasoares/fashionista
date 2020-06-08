import React, { useState, useReducer } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Topbar from "./components/Topbar";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Bag from "./components/Bag";
import Search from "./components/Search";
import { bagReducer, numberBag, totalBag } from "./resources/bag";

import "./assets/css/normalize.css";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

function App() {
  const [toggleBag, setToggleBag] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [bag, dispatch] = useReducer(bagReducer, []);

  const toggleBagHandle = () => setToggleBag(!toggleBag);
  const toggleSearchHandle = () => setToggleSearch(!toggleSearch);

  return (
    <div className="app">
      <BrowserRouter>
        <Topbar
          numberBag={numberBag(bag)}
          toggleBag={toggleBagHandle}
          toggleSearch={toggleSearchHandle}
        />
        <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route path="/produto/:productname">
            <Product addBag={dispatch} />
          </Route>
        </Switch>
        {toggleBag && (
          <Bag
            items={bag}
            quantity={numberBag(bag)}
            total={totalBag(bag)}
            toggle={toggleBagHandle}
            removeBagItem={dispatch}
          />
        )}
        {toggleSearch && <Search toggle={toggleSearchHandle} />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
