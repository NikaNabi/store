// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Создание нового товара
router.post('/', productController.createProduct);

// Получение всех товаров
router.get('/', productController.getAllProducts);

// Получение товара по ID
router.get('/:id', productController.getProductById);

module.exports = router;