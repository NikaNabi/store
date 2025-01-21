// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemoveFromCart={onRemoveFromCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))
      )}
    </div>
  );
};

export default Cart;