import React from 'react';
import './Header.css';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="header flex justify-between items-center p-4 bg-[#233d4d] text-[#dbe2ef] w-full">
            <button className="menu-toggle" onClick={toggleSidebar}>
                ☰
            </button>
            <div className="logo">🎓 NouvaLab</div>
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
};
export default Header;
