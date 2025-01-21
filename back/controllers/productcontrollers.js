// backend/controllers/productController.js
const Product = require('../models/product');

// Создание нового товара
const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body;
    const newProduct = new Product({ name, description, price, image, category, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при создании товара', error });
  }
};

// Получение списка всех товаров
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении товаров', error });
  }
};

// Получение товара по ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Товар не найден' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении товара', error });
  }
};

module.exports = { createProduct, getAllProducts, getProductById };