import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>ScrollSpace</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/genres">Genres</Link></li>
          <li><Link to="/new-releases">New Releases</Link></li>
          <li><Link to="/bestsellers">Bestsellers</Link></li>
          <li><Link to="/my-library">My Library</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <div className="search-cart-profile">
        <input type="text" placeholder="Search..." />
        <div className="profile-icon">👤</div>
      </div>
    </header>
  );
}

export default Header;