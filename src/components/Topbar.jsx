import React from "react";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as SearchImg } from "../assets/img/search.svg";
import { ReactComponent as ShoppingBagImg } from "../assets/img/shoppingbag.svg";
import "./topbar.css";

function Topbar({ numberBag, toggleBag, toggleSearch }) {
  return (
    <header className="header">
      <div className="app__container">
        <div className="header__default">
          <a href="/">
            <Logo className="header__logo" />
          </a>
          <div className="header__icons">
            <button
              type="button"
              className="header__icons--search"
              onClick={toggleSearch}
            >
              <SearchImg />
            </button>
            <button
              type="button"
              className="header__icons--bag"
              onClick={toggleBag}
            >
              <ShoppingBagImg />
              <sup className="counter">
                <span className="counter__value">{numberBag}</span>
              </sup>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
