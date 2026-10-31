import { useState } from "react";
import axios from "axios";

function Regeister({ setPage }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tech, setTech] = useState("");
    const [learn, setLearn] = useState("");

    const [step, setStep] = useState("form"); // "form" | "otp"
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !tech || !learn) {
            alert("Please fill all the fields");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("http://localhost:5000/auth/register", {
                name,
                email,
                password,
                tech,
                learn
            });

            alert(res.data.message);
            setStep("otp"); // move to OTP entry screen

        } catch (error) {
            console.log(error);
            alert(
                error.response?.data?.message ||
                "Registration failed"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        if (!otp) {
            alert("Please enter the OTP");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post("http://localhost:5000/auth/verify-otp", {
                email,
                otp
            });

            localStorage.setItem("user", JSON.stringify(res.data.user));
            alert("Email verified! Profile created.");
            setPage("find");

        } catch (error) {
            console.log(error);
            alert(
                error.response?.data?.message ||
                "OTP verification failed"
            );
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        try {
            setLoading(true);
            const res = await axios.post("http://localhost:5000/auth/resend-otp", { email });
            alert(res.data.message);
        } catch (error) {
            console.log(error);
            alert(
                error.response?.data?.message ||
                "Failed to resend OTP"
            );
        } finally {
            setLoading(false);
        }
    };

    if (step === "otp") {
        return (
            <div className="register">
                <h1>Verify Your Email</h1>
                <p>We sent a 6-digit OTP to {email}</p>

                <form onSubmit={handleVerifyOtp}>

                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Verifying..." : "Verify & Create Profile"}
                    </button>

                </form>

                <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={loading}
                    className="resend-btn"
                >
                    Resend OTP
                </button>
            </div>
        );
    }

    return (
        <div className="register">
            <h1>Create Profile</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Your skill"
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Skill you want to learn"
                    value={learn}
                    onChange={(e) => setLearn(e.target.value)}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Sending OTP..." : "Create Profile"}
                </button>

            </form>
        </div>
    );
}

export default Regeister;