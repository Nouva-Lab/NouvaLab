import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">🎓 EduTube</div>
      <nav className="nav">
        <input type="text" placeholder="Search..." className="search-box" />
        <button className="search-button">Search</button>
        <div className="nav-links">
          <a href="#">Upload</a>
          <a href="#">Profile</a>
          <a href="#">Login</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
