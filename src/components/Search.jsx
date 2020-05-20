import React from "react";
import "./search.css";

function Search() {
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
              type="text"
              placeholder="Buscar por produto..."
            />
          </div>
          <div className="header__title">1 items</div>
          <div className="product__list">
            <a href="/produto/top-cropped-suede">
              <div className="product__list__item">
                <div className="product__list__row">
                  <figure className="product__image">
                    <img
                      src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002575_027_catalog_1.jpg?1459537946"
                      alt="Produto "
                      title=""
                    />
                  </figure>
                  <div className="product__list__info">
                    <p className="product__list__name">TOP CROPPED SUEDE</p>
                    <p className="product__list__size"></p>
                  </div>
                  <div className="product__list__pricing">
                    <div className="product__list__current">R$ 129,90</div>
                    <div className="product__list__installments">
                      3x R$ 43,30
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
