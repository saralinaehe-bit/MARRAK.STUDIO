import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/shop">SHOP</Link>
          <Link to="/about">CRAFT</Link>
          <Link to="/journal">OUR STORY</Link>
        </div>

        <Link to="/" className="logo">
          <div className="logo-text">
            <div className="logo-main">MARRAK</div>
            <div className="logo-sub">STUDIO</div>
          </div>
        </Link>

        <div className="nav-right">
          <Link to="/contact">VISIT US</Link>
          <Link to="/cart" className="cart-icon" aria-label="Shopping cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
