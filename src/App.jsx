import React, { useState, useReducer } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Topbar from "./components/Topbar";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Bag from "./components/Bag";
import Search from "./components/Search";

import "./assets/css/normalize.css";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

function App() {
  const [toggleBag, setToggleBag] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [bag, dispatch] = useReducer(bagReducer, []);

  const toggleBagHandle = () => setToggleBag(!toggleBag);
  const toggleSearchHandle = () => setToggleSearch(!toggleSearch);
  const numberBag = () => bag.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <BrowserRouter>
        <Topbar
          numberBag={numberBag()}
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
            quantity={numberBag()}
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

function bagReducer(state, action) {
  switch (action.type) {
    case "add":
      let newProduct = true;
      const list = state.map((p) => {
        if (isEqualProduct(p, action.payload)) {
          newProduct = false;
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });

      if (newProduct) {
        return [...state, action.payload];
      }

      return list;
    case "remove":
      return state.filter((p) => {
        return !isEqualProduct(p, action.payload);
      });
    default:
      throw new Error();
  }
}

function isEqualProduct(product1, product2) {
  return product1.name === product2.name && product1.size === product2.size;
}

export default App;
