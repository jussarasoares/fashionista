import React from "react";
import Topbar from "./components/Topbar";
import Catalog from "./components/Catalog";
import Product from "./components/Product";
import Bag from "./components/Bag";

import "./assets/css/normalize.css";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Topbar />
      {/* <Catalog /> */}
      <Product />
      <Bag />
    </div>
  );
}

export default App;
