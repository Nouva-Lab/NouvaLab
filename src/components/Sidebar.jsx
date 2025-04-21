import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="menu">
          <li><Link to="/" onClick={toggleSidebar}>🏠 Home</Link></li>
          <li><Link to="/subjects" onClick={toggleSidebar}>📚 Subjects</Link></li>
          <li><Link to="/quiz" onClick={toggleSidebar}>📝 Quizzes</Link></li>
          <li><Link to="/videos" onClick={toggleSidebar}>🎥 My Videos</Link></li>
          <li><Link to="/progress" onClick={toggleSidebar}>📈 Progress</Link></li>
          <li><Link to="/notifications" onClick={toggleSidebar}>📨 Notifications</Link></li>
          <li><Link to="/contact" onClick={toggleSidebar}>❓ Support</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>ℹ️ About</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Sidebar;


