// Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Import Firebase auth
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import './Login.css'; 


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to handle page redirection

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    setLoading(true); // Set loading to true before starting the login process

    try {
      await signInWithEmailAndPassword(auth, email, password); // Firebase sign in
      navigate("/profile"); // Redirect to profile page after successful login
    } catch (error) {
      console.error("Login failed:", error); // Log the error for debugging
      alert("Login failed: " + error.message); // Alert the user of the error
    } finally {
      setLoading(false); // Set loading to false after the login attempt is finished
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Handle email change
        placeholder="Email"
        type="email"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Handle password change
        placeholder="Password"
        type="password"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"} {/* Button text based on loading state */}
      </button>
    </form>
  );
};

export default Login;
