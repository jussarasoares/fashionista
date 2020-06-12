import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as SearchImg } from '../assets/img/search.svg';
import { ReactComponent as ShoppingBagImg } from '../assets/img/shoppingbag.svg';
import './topbar.css';

function Topbar({ toggleBag, toggleSearch }) {
  const bagQuantity = useSelector((state) => state.bag.quantity);
  return (
    <header className="header">
      <div className="app__container">
        <div className="header__default">
          <Link to="/">
            <h1 className="logo">FASHIONISTA</h1>
          </Link>
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
                <span className="counter__value">{bagQuantity}</span>
              </sup>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
