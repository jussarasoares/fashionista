import React from "react";
import "./catalog.css";
import products from "../resources/products.json";

function Catalog() {
  return (
    <section className="products">
      <div className="app__container">
        <div className="header__title">22 items</div>
        <div className="products__grid">
          {products.map((product) => (
            <div className="products__box">
              <a href="/produto/t-shirt-leather-dull">
                <figure className="product__image">
                  {product.percentDiscount && (
                    <span className="badge badge--discount">
                      -{product.percentDiscount}%
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt="Produto {product.name}"
                    title={product.name}
                    className="product__placeholder"
                  />
                </figure>
                <h3 className="product__name">{product.name}</h3>
                <div className="product__pricing">
                  {!product.discount && (
                    <span className="product__price product__price--to">
                      R$ {product.price}
                    </span>
                  )}
                  {product.discount && (
                    <>
                      <span className="product__price product__price--from">
                        R$ {product.price}
                      </span>
                      <span className="product__price product__price--to">
                        R$ {product.discount}
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
