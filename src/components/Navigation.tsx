import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <Link to="/" className="logo">
          <div className="logo-text">
            <div className="logo-main">MARRAK</div>
            <div className="logo-sub">STUDIO</div>
          </div>
        </Link>

        <Link to="/cart" className="cart-icon" aria-label="Shopping cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </Link>
      </div>

      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-menu-content">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>Trade</Link>
          <Link to="/journal" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
