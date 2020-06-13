import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { totalBag } from '../resources/bag';
import { ReactComponent as BackImg } from '../assets/img/back.svg';
import { ReactComponent as MinorImg } from '../assets/img/minor.svg';
import { ReactComponent as PlusImg } from '../assets/img/plus.svg';
import './bag.css';

function Bag({ toggle }) {
  const items = useSelector((state) => state.bag.data);
  const quantity = useSelector((state) => state.bag.quantity);
  const total = totalBag(items);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_FULL_ITEM_BAG', payload: item });
  };

  const up = (item) => {
    dispatch({
      type: 'ADD_ITEM_BAG',
      payload: item,
    });
  };

  const down = (item) => {
    const qty = item.quantity - 1;
    if (qty <= 0) {
      removeItem(item);
      return;
    }
    dispatch({
      type: 'REMOVE_ITEM_BAG',
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
        <div className="bag">
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
                        className="bag__icons"
                        onClick={() => down(product)}
                      >
                        <MinorImg />
                      </button>
                      <div className="product__list__input">
                        {product.quantity}
                      </div>
                      <button
                        type="button"
                        className="bag__icons"
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
                    className="bag__remove"
                    onClick={() => removeItem(product)}
                  >
                    Remover da Sacola
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bag__footer">
            <div className="bag__footer-title">
              <span>Total</span>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
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
