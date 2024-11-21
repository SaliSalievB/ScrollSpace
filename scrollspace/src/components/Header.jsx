// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <h1><Link to="/">ScrollSpace</Link></h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/genres">Genres</Link></li>
          <li><Link to="/new-releases">New Releases</Link></li>
          <li><Link to="/bestsellers">Bestsellers</Link></li>
          {isAuthenticated && <li><Link to="/my-library">My Library</Link></li>}
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <div className="search-cart-profile">
        <input type="text" placeholder="Search..." />
        <div className="profile-section">
          {isAuthenticated ? (
            <>
              <span className="profile-icon">👤</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;