// src/components/ProductList.js
import React, { useState, useEffect } from 'react';

const ProductList = () => {
  // Стейт для хранения списка товаров
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Стейт для загрузки
  const [error, setError] = useState(null); // Стейт для ошибок

  // Запрос на сервер для получения списка товаров
  useEffect(() => {
    fetch('/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке товаров');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data); // Устанавливаем полученные товары в стейт
        setLoading(false);  // Меняем стейт загрузки на false
      })
      .catch(error => {
        setError(error.message); // Устанавливаем ошибку в стейт
        setLoading(false); // Меняем стейт загрузки на false
      });
  }, []); // Этот эффект сработает только один раз после монтирования компонента

  // Рендеринг компонента
  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div>
      <h1>Список товаров</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: ${product.price}</p>
            <img src={product.image} alt={product.name} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;