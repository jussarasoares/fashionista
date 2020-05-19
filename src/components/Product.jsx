import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="single-product">
      <figure className="product__image">
        <img
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
          alt="Produto "
          title=""
        />
      </figure>
      <div className="product__content">
        <h3 className="product__name">VESTIDO TRANSPASSE BOW</h3>
        <div className="product__pricing">
          <span className="product__price product__price--to">R$ 199,90</span>
          <span className="product__price product__price--installments">
            em até 3x R$ 66,63
          </span>
        </div>
        <div className="product__sizes">
          <p className="product__sizes__title">Escolha o tamanho</p>
          <div className="product__btn-group">
            <button type="button" className="product__filter">
              P
            </button>
            <button type="button" className="product__filter">
              M
            </button>
            <button type="button" className="product__filter">
              G
            </button>
          </div>
        </div>
        <div className="product__actions">
          <button type="button" className="product__add-to-bag">
            Adicionar à Sacola
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
