import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../resources/products';
import { listProductsAction } from '../store/productAction';

import placeholder from '../assets/img/placeholder.png';
import './catalog.css';

function Catalog() {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((data) => {
      dispatch(listProductsAction(data));
    });
  }, [dispatch]);

  return (
    <>
      <header className="banner"></header>
      <section className="products">
        <div className="app__container">
          <div className="header__title">
            Moda Feminina ({products.length} items)
          </div>
          <div className="products__grid">
            {products.map((product, index) => (
              <div className="products__box" key={index}>
                <Link to={`/produto/${product.name.toLowerCase()}`}>
                  <figure className="product__image">
                    {product.discount_percentage && (
                      <span className="badge badge--discount">
                        -{product.discount_percentage}
                      </span>
                    )}
                    <img
                      src={product.image || placeholder}
                      alt={`Produto ${product.name}`}
                      title={product.name}
                      className="product__placeholder"
                    />
                    <button class="product__btn-details">Comprar</button>
                  </figure>
                  <h3 className="product__name">{product.name}</h3>
                  <div className="product__pricing">
                    {!product.discount_percentage && (
                      <span className="product__price product__price--to">
                        {product.regular_price}
                      </span>
                    )}
                    {product.discount_percentage && (
                      <>
                        <span className="product__price product__price--from">
                          {product.regular_price}
                        </span>
                        <span className="product__price product__price--to">
                          {product.actual_price}
                        </span>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Catalog;
