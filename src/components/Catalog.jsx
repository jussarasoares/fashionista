import React, { useEffect, useState } from "react";
import "./catalog.css";

import { getProducts } from "../resources/products";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    })
  }, [])

  return (
    <section className="products">
      <div className="app__container">
        <div className="header__title">{products.length} items</div>
        <div className="products__grid">
          {products.map((product, index) => (
            <div className="products__box" key={index}>
              <a href={`/produto/${product.name.toLowerCase()}`}>
                <figure className="product__image">
                  {product.discount_percentage && (
                    <span className="badge badge--discount">
                      -{product.discount_percentage}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={`Produto ${product.name}`}
                    title={product.name}
                    className="product__placeholder"
                  />
                </figure>
                <h3 className="product__name">{product.name}</h3>
                <div className="product__pricing">
                  {!product.discount_percentage && (
                    <span className="product__price product__price--to">
                      R$ {product.regular_price}
                    </span>
                  )}
                  {product.discount_percentage && (
                    <>
                      <span className="product__price product__price--from">
                        R$ {product.regular_price}
                      </span>
                      <span className="product__price product__price--to">
                        R$ {product.actual_price}
                      </span>
                    </>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
