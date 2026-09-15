const User = require("../models/user");

// REGISTER
const register = async (req, res) => {
    try {
        const { name, email, password, tech, learn } = req.body;

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const user = await User.create({ name, email, password, tech, learn });
        res.status(201).json({ message: "Registered successfully", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Registration failed" });
    }
};

// LOGIN
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Login failed" });
    }
};

module.exports = { register, login };