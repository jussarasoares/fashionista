import React from "react";
import Topbar from "./components/Topbar";
import Catalog from "./components/Catalog";

import "./assets/css/normalize.css";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Catalog />
    </div>
  );
}

export default App;
