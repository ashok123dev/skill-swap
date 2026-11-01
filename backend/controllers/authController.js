const User = require("../models/user");
   const { sendOtpEmail } = require("../utilis/email");

// helper: generate 6-digit OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// REGISTER
const register = async (req, res) => {
    try {
        const { name, email, password, tech, learn } = req.body;

        const existing = await User.findOne({ email });

        if (existing && existing.isVerified) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const otp = generateOtp();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        let user;
        if (existing && !existing.isVerified) {
            existing.name = name;
            existing.password = password;
            existing.tech = tech;
            existing.learn = learn;
            existing.otp = otp;
            existing.otpExpiry = otpExpiry;
            user = await existing.save();
        } else {
            user = await User.create({
                name,
                email,
                password,
                tech,
                learn,
                otp,
                otpExpiry,
                isVerified: false
            });
        }

        await sendOtpEmail(email, otp);

        res.status(201).json({
            message: "OTP sent to your email. Please verify to complete registration.",
            email: user.email
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Registration failed" });
    }
};

// VERIFY OTP
const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.isVerified) {
            return res.status(400).json({ message: "Email already verified" });
        }

        if (!user.otp || user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        if (user.otpExpiry < new Date()) {
            return res.status(400).json({ message: "OTP expired, please request a new one" });
        }

        user.isVerified = true;
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();

        res.status(200).json({ message: "Email verified successfully", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "OTP verification failed" });
    }
};

// RESEND OTP
const resendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.isVerified) {
            return res.status(400).json({ message: "Email already verified" });
        }

        const otp = generateOtp();
        user.otp = otp;
        user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
        await user.save();

        await sendOtpEmail(email, otp);

        res.status(200).json({ message: "OTP resent to your email" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to resend OTP" });
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

        if (!user.isVerified) {
            return res.status(403).json({ message: "Please verify your email before logging in" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Login failed" });
    }
};

module.exports = { register, login, verifyOtp, resendOtp };
