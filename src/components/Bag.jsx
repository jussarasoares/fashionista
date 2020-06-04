import React from "react";

import { ReactComponent as BackImg } from "../assets/img/back.svg";
import { ReactComponent as MinorImg } from "../assets/img/minor.svg";
import { ReactComponent as PlusImg } from "../assets/img/plus.svg";
import "./bag.css";

function Bag({ toggle, items }) {
  return (
    <div className="drawer drawer--is-visible">
      <header className="header">
        <div className="app__container">
          <div className="header__context">
            <div className="header__icons">
              <button
                type="button"
                className="header__icons--back"
                onClick={toggle}
              >
                <BackImg />
              </button>
            </div>
            <div className="header__title">Sacola ({items.length})</div>
          </div>
        </div>
      </header>
      <div className="drawer__content">
        <div className="cart">
          <div className="product__list">
            {items.map((product) => (
              <div className="product__list__item">
                <div className="product__list__row">
                  <figure className="product__image">
                    <img
                      src={product.image}
                      alt="Produto {product.name}"
                      title={product.name}
                    />
                  </figure>
                  <div className="product__list__info">
                    <p className="product__list__name">{product.name}</p>
                    <p className="product__list__size">
                      <span>Tam.: {product.size}</span>
                    </p>
                    <div className="product__list__quantity">
                      <button type="button" className="cart__icons">
                        <MinorImg />
                      </button>
                      <div className="product__list__input">1</div>
                      <button type="button" className="cart__icons">
                        <PlusImg />
                      </button>
                    </div>
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
                <div className="product__row">
                  <button type="button" className="cart__remove">
                    Remover item
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__subtotal">
            <div className="header__title">Subtotal - R$ 199,90</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bag;
