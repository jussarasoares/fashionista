import React, { useState } from "react";

import { findProductsByName } from "../resources/products";
import "./search.css";
import { Link } from "react-router-dom";

function Search() {
  const [products, setProducts] = useState([]);
  const searchHandle = (value) => {
    if (value.length < 3) {
      setProducts([]);
      return;
    }
    const data = findProductsByName(value);
    setProducts(data);
  };

  return (
    <div className="drawer drawer--is-visible">
      <header className="header">
        <div className="app__container">
          <div className="header__context">
            <div className="header__icons">
              <button type="button" className="header__icons--back">
                <img src="./img/back.svg" />
              </button>
            </div>
            <div className="header__title">Buscar Produtos</div>
          </div>
        </div>
      </header>
      <div className="drawer__content">
        <div className="search">
          <div className="search__form">
            <input
              className="search__input"
              onChange={(event) => searchHandle(event.target.value)}
              type="text"
              placeholder="Buscar por produto..."
            />
          </div>
          <div className="header__title">{products.length} items</div>
          <div className="product__list">
            {!products.length && (
              <span class="cart__empty">Nenhum item encontrado :\</span>
            )}
            {products.map((product) => (
              <Link to={`/produto/${product.name.toLowerCase()}`}>
                <div className="product__list__item">
                  <div className="product__list__row">
                    <figure className="product__image">
                      <img
                        src={product.image}
                        alt={`Produto ${product.name}`}
                        title={product.name}
                      />
                    </figure>
                    <div className="product__list__info">
                      <p className="product__list__name">{product.name}</p>
                      <p className="product__list__size"></p>
                    </div>
                    <div className="product__list__pricing">
                      <div className="product__list__current">
                        {product.regular_price}
                      </div>
                      <div className="product__list__installments">
                        {product.installments}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
