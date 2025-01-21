// backend/models/product.js
const mongoose = require('mongoose');

// Схема для товара
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Название товара обязательно
      trim: true, // Убирает лишние пробелы по краям
    },
    description: {
      type: String,
      required: true, // Описание товара обязательно
      trim: true,
    },
    price: {
      type: Number,
      required: true, // Цена товара обязательна
      min: 0, // Цена не может быть отрицательной
    },
    image: {
      type: String, // Ссылка на изображение товара
      required: true, // Изображение обязательно
    },
    category: {
      type: String,
      required: true, // Категория товара обязательна
      trim: true,
    },
    stock: {
      type: Number,
      required: true, // Количество товара на складе обязательно
      min: 0, // Не может быть отрицательным
    },
  },
  {
    timestamps: true, // Автоматическое добавление полей createdAt и updatedAt
  }
);

// Создание модели из схемы
const Product = mongoose.model('Product', productSchema);

module.exports = Product;