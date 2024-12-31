const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Sign up
exports.signup = async (req, res) => {
    const { username, password } = req.body;
    console.log("asdasds")
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).send('User created');
};

// Login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    console.log("login")
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).send('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, 'secretkey');
    res.send({ token });
};