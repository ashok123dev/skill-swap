const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const connectionRoutes = require("./routes/ConnectionRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/connections", connectionRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Skill Swap Backend Running");
});

// MongoDB connection
const MONGO_URI = "mongodb://127.0.0.1:27017/skillswap";

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });