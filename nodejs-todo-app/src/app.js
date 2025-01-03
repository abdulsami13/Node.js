const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

module.exports = app; 