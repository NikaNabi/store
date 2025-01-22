// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;