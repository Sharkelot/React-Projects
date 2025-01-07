import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <h1>Recipe App</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="nav-link">
                <FaHeart />
                <span>Favorites</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;