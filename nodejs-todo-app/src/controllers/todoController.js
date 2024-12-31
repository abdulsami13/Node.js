const Todo = require('../models/todo');

// Create Todo
exports.createTodo = async (req, res) => {
    const { title, description } = req.body;
    const todo = new Todo({
        userId: req.userId,
        title,
        description,
        completed: false
    });
    await todo.save();
    res.status(201).send(todo);
};

// Get Todos
exports.getTodos = async (req, res) => {
    const todos = await Todo.find({ userId: req.userId });
    res.send(todos);
};

// Edit Todo
exports.editTodo = async (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const todo = await Todo.findOneAndUpdate(
        { _id: id, userId: req.userId },
        { title, description, completed },
        { new: true }
    );
    if (!todo) {
        return res.status(404).send('Todo not found');
    }
    res.send(todo);
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: id, userId: req.userId });
    if (!todo) {
        return res.status(404).send('Todo not found');
    }
    res.send('Todo deleted');
};