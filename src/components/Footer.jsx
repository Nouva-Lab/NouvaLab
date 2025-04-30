import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <h4>NouvaLab</h4>          
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NouvaLab. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
