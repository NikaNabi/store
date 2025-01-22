import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems, updateCart, removeFromCart, clearCart }) => {
  const navigate = useNavigate();

  // Вычисление общей стоимости
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  // Обработчик оформления заказа
  const handleCheckout = () => {
    alert("Заказ оформлен!");
    clearCart(); // Очищаем корзину после оформления
    navigate("/"); // Перенаправление на главную страницу
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      alert("Ваша корзина пуста. Возвращаем вас в магазин!");
      navigate("/");
    }
  }, [cartItems, navigate]);

  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <p>{item.name}</p>
                  <p>Цена: {item.price} ₽</p>
                  <p>
                    Количество:
                    <button onClick={() => updateCart(item.id, item.quantity - 1)}>-</button>
                    {item.quantity}
                    <button onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
                  </p>
                  <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Общая стоимость: {calculateTotal()} ₽</h3>
          <button onClick={handleCheckout}>Оформить заказ</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;