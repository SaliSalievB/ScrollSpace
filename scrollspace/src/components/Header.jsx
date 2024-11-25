// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

function Header() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');
  const { cart } = React.useContext(CartContext);

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
          <li><Link to="/?category=new-releases">New Releases</Link></li>
          <li><Link to="/?category=bestsellers">Bestsellers</Link></li>
          {isAuthenticated && <li><Link to="/my-library">My Library</Link></li>}
          {isAuthenticated && <li><Link to="/upload">Upload</Link></li>}
        </ul>
      </nav>
        <div className="cart-icon">
          <Link to="/cart">
            🛒
            {cart?.cartItems.length > 0 && (
              <span className="cart-count">{cart.cartItems.length}</span>
            )}
          </Link>
        </div>
        <div className="profile-section">
          {isAuthenticated ? (
            <>
              
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
            </>
          )}
        </div>
    </header>
  );
}

export default Header;
