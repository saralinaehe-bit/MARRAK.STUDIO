import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src="/Design_sans_titre_(12).png" alt="MARRAK STUDIO" className="logo-image" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">Trade</Link>
          <Link to="/journal">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
