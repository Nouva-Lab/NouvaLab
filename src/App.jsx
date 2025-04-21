import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css"; 
import "./components/Sidebar.css"; // Assuming you have a CSS file for sidebar styles
import "./components/ProfilePage.css"; // Assuming you have a CSS file for profile page styles
import "./components/HomePage.css"; // Assuming you have a CSS file for home page styles
import "./components/VideoList.css"; // Assuming you have a CSS file for video list styles
import "./components/QuizSection.css"; // Assuming you have a CSS file for quiz section styles
import "./components/UploadVideo.css"; // Assuming you have a CSS file for upload video styles
import "./components/Login.css"; // Assuming you have a CSS file for login styles
import "./components/Register.css"; // Assuming you have a CSS file for register styles
import "./components/ContactPage.css"; // Assuming you have a CSS file for contact page styles
import "./components/AboutPage.css"; // Assuming you have a CSS file for about page styles

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="app">
      {/* Menu Button */}
      <button className="menu-toggle" onClick={toggleSidebar}>☰</button>

      {/* Sidebar Navigation */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
          <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
          <li><Link to="/videos" onClick={toggleSidebar}>Videos</Link></li>
          <li><Link to="/quiz" onClick={toggleSidebar}>Quiz</Link></li>
          <li><Link to="/upload" onClick={toggleSidebar}>Upload</Link></li>
          <li><Link to="/profile" onClick={toggleSidebar}>Profile</Link></li>
          <li><Link to="/login" onClick={toggleSidebar}>Login</Link></li>
          <li><Link to="/register" onClick={toggleSidebar}>Register</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
