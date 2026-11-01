
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tech: { type: String },
    learn: { type: String },

    // OTP verification fields
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpiry: { type: Date }
});

module.exports = mongoose.model("User", userSchema);
