import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours logo" />
            <ul className="nav-links">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li>
                    <Link to="/tours" className="nav-link">Tours</Link>
                </li>
            </ul>
        </nav>
    );
}
