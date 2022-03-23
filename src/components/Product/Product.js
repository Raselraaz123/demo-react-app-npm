import React from 'react';
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Product.css'
const Product = (props) => {
  const { name, price, img, ratings, seller } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="detils">
        <p className="product-name">{name}</p>
        <p>price: $ {price}</p>
        <p>
          <small>seller : {seller}</small>
        </p>
        <p>
          <small>Ratings : {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p className='para-margin'>Add to Cart</p>
      <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;