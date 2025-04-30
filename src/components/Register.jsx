import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom"; 
import './Register.css'; 

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            setError("");
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/videos"); // ✅ redirect after signup
        } catch (error) {
            setError(error.message);
            console.log("Registration failed:", error);
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleRegister}>
                <h2>Register</h2>
                {error && <div className="error-message">{error}</div>}
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
