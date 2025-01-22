import React, { useState } from 'react';
import CartPage from './pages/CartPage';
import ProductCard from './components/ProductCard';
import './App.css'; // Подключаем стили

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [products] = useState([
        { id: 1, name: 'Game 1', price: 29.99, image: '/assets/images/game1.jpg', description: 'Amazing game' },
        { id: 2, name: 'Game 2', price: 19.99, image: '/assets/images/game2.jpg', description: 'Fun game' },
        // Другие товары
    ]);

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const handleUpdateQuantity = (productId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: Number(quantity) } : item
            )
        );
    };

    return (
        <div className="app">
            <h1>Магазин видеоигр</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
}

export default App;