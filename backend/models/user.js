const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tech: { type: String },
    learn: { type: String }
});

module.exports = mongoose.model("User", userSchema);