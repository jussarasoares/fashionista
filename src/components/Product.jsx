import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getProduct } from "../resources/products";

import placeholder from "../assets/img/placeholder.png";
import "./product.css";

function Product({ addBag }) {
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
  const { productname } = useParams();

  useEffect(() => {
    const data = getProduct(productname);
    setProduct(data);
  }, [productname]);

  const addBagHandle = () => {
    if (selectedSize === "") {
      toast("Selecione um tamanho! :)", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    addBag({
      type: "add",
      payload: { ...product, size: selectedSize, quantity: 1 },
    });
  };

  return (
    <div className="single-product">
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
        />
      </figure>
      <div className="product__content">
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
          <span className="product__price product__price--installments">
            em até {product.installments}
          </span>
        </div>
        <div className="product__sizes">
          <p className="product__sizes__title">Escolha o tamanho</p>
          <div className="product__btn-group">
            {product.sizes &&
              product.sizes.map((size, index) => (
                <div key={index}>
                  {size.available && (
                    <ButtonSize
                      label={size.size}
                      selected={selectedSize}
                      onClick={() => setSelectedSize(size.size)}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="product__actions">
          <button
            type="button"
            className="product__add-to-bag"
            onClick={addBagHandle}
          >
            Adicionar à Sacola
          </button>
        </div>
      </div>
    </div>
  );
}

function ButtonSize({ label, selected, onClick }) {
  const buttonClass =
    selected === label
      ? "product__filter product__filter--selected"
      : "product__filter";

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default Product;
