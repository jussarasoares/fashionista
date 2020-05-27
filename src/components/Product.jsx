import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "./product.css";
import { getProduct } from "../resources/products";

function Product() {
  const [product, setProduct] = useState({});
  const {productname} = useParams();

  useEffect(() => {
    const data = getProduct(productname);
    setProduct(data)
  }, [productname])

  return (
    <div className="single-product">
      <figure className="product__image">
        <img
          src={product.image}
          alt={`Produto ${product.name}`}
          title={product.name}
        />
      </figure>
      <div className="product__content">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__pricing">
          <span className="product__price product__price--to">{product.actual_price}</span>
          <span className="product__price product__price--installments">
            em até 3x R$ 66,63
          </span>
        </div>
        <div className="product__sizes">
          <p className="product__sizes__title">Escolha o tamanho</p>
          <div className="product__btn-group">
            {/* {product.sizes.map((size) => (
              <button type="button" className="product__filter">
                {size.size}
              </button>
            ))} */}
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
