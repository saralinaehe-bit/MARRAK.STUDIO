import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/MARRAK.png" alt="MARRAK" className="logo-image" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
