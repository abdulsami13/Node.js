const express = require('express');
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Create Todo
router.post('/', authMiddleware, todoController.createTodo);

// Get Todos
router.get('/', authMiddleware, todoController.getTodos);

// Edit Todo
router.put('/:id', authMiddleware, todoController.editTodo);

// Delete Todo
router.delete('/:id', authMiddleware, todoController.deleteTodo);

module.exports = router;