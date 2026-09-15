const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
    .connect("mongodb://127.0.0.1:27017/skills")
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log("error occurred:", err));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});