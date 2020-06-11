import React from "react";

import { ReactComponent as BackImg } from "../assets/img/back.svg";
import { ReactComponent as MinorImg } from "../assets/img/minor.svg";
import { ReactComponent as PlusImg } from "../assets/img/plus.svg";
import "./bag.css";

function Bag({
  toggle,
  items,
  quantity,
  removeBagItem,
  total,
  upQuantity,
  downQuantity,
}) {
  const removeItem = (item) => {
    removeBagItem({ type: "removeAll", payload: item });
  };

  const up = (item) => {
    upQuantity({
      type: "add",
      payload: item,
    });
  };

  const down = (item) => {
    const quantity = item.quantity - 1;
    if (quantity <= 0) {
      removeItem(item);
      return;
    }
    downQuantity({
      type: "remove",
      payload: item,
    });
  };

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
            <div className="header__title">Sacola ({quantity})</div>
          </div>
        </div>
      </header>
      <div className="drawer__content">
        <div className="cart">
          <div className="product__list">
            {items.map((product, index) => (
              <div className="product__list__item" key={index}>
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
                      <button
                        type="button"
                        className="cart__icons"
                        onClick={() => down(product)}
                      >
                        <MinorImg />
                      </button>
                      <div className="product__list__input">
                        {product.quantity}
                      </div>
                      <button
                        type="button"
                        className="cart__icons"
                        onClick={() => up(product)}
                      >
                        <PlusImg />
                      </button>
                    </div>
                  </div>
                  <div className="product__list__pricing">
                    <div className="product__list__current">
                      {product.actual_price}
                    </div>
                    <div className="product__list__installments">
                      {product.installments}
                    </div>
                  </div>
                </div>
                <div className="product__row">
                  <button
                    type="button"
                    className="cart__remove"
                    onClick={() => removeItem(product)}
                  >
                    Remover item
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bag__footer">
            <div className="bag__footer-title">
              <span>Total=</span>
              <span>R$ {total.toFixed(2).replace(".", ",")}</span>
            </div>
            <button type="button" className="bag__checkout">
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bag;
