// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, onRemoveFromCart, onUpdateQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
      />
      <button onClick={() => onRemoveFromCart(item.id)}>Удалить</button>
    </div>
  );
};

export default CartItem;