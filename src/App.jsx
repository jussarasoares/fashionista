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
  const [bag, dispatch] = useReducer(reducer, []);

  const toggleBagHandle = () => setToggleBag(!toggleBag);
  const toggleSearchHandle = () => setToggleSearch(!toggleSearch);

  return (
    <div className="app">
      <BrowserRouter>
        <Topbar
          numberBag={bag.length}
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
          <Bag items={bag} toggle={toggleBagHandle} removeBagItem={dispatch} />
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

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((p) => p.name !== action.payload.name);
    default:
      throw new Error();
  }
}

export default App;
