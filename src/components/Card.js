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
import { useState } from 'react';

function Cart() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total}</h3>
        </div>
    );
}

export default Cart;