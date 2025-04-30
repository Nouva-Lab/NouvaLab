import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setEmailError("");
      setPasswordError("");
  
      if (!email) {
        setEmailError("Email is required.");
      }
      if (!password) {
        setPasswordError("Password is required.");
      }
      if (email && !validateEmail(email)) {
        setEmailError("Invalid email format.");
      }
      if (!email || !password || !validateEmail(email)) {
        return;
      }
  
      setLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/profile");
      } catch (error) {
        alert("Login failed: " + error.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        {emailError && <div className="error-message">{emailError}</div>}
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {passwordError && <div className="error-message">{passwordError}</div>}
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
      </form>
    );
  };
  
  export default Login;
