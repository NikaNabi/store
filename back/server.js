// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const app = express();

// Middleware для парсинга JSON
app.use(express.json());

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/myshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Использование маршрутов для работы с товарами
app.use('/api/products', productRoutes);
const express = require('express');
app.use(express.json());

const users = []; // Это временная база данных

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (users.find((user) => user.username === username)) {
        return res.status(400).send('User already exists');
    }
    users.push({ username, password });
    res.status(201).send('User registered');
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful', token: 'dummy-token' });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(3001, () => console.log('Server running on http://localhost:3001'));
// Запуск сервера
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  require('dotenv').config();
const mongoose = require('mongoose');
const app = express();

// Подключение к базе данных MongoDB через переменную окружения
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));
});