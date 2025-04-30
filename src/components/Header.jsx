import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef(null);
    const navigate = useNavigate();




    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
            if (searchInputRef.current) {
                searchInputRef.current.blur();
            }
        }
    };

    return (
      <header className="header">
        <div className="logo-container">
          <div className="logo-card">
            <div className="logo">🎓 NouvaLab</div>
          </div>
        </div>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li><Link to="/subjects">Subjects</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/upload">Upload</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>\
        <form className="nav" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="search-box"
            value={searchTerm}
            onChange={handleSearchChange}
            ref={searchInputRef}
                    />
          <button type="submit" className="search-button">Search</button>                
            </form>
        </header >
    );
};
export default Header;
