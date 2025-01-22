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
      <button onClick={handleAddToCard}>Add to Cart</button>
    <img src={product.image} alt={product.name} />
    <div className="info">
      <h2>{product.name}</h2>
      <p>{product.price} $</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
   
    <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>   
      );
  };


export default ProductCard;