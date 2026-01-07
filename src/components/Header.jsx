import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ cartCount = 0, onCartClick, searchValue, onSearchChange }) {
  const navigate = useNavigate();
  const handleCartClick = onCartClick ? onCartClick : () => navigate('/customer');

  return (
    <header className="main-header">
      <div className="header-inner">
        <nav className="header-nav">
          <Link to="/customer">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </nav>

        <div className="header-logo">CAT BRACELET</div>

        <div className="header-actions">
          <div className="search-minimal">
            <input
              className="search-input"
              placeholder="Search..."
              value={searchValue}
              onChange={onSearchChange}
            />
          </div>
          <button className="cart-btn" onClick={handleCartClick} aria-label="Open cart">
            🛍️ <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
