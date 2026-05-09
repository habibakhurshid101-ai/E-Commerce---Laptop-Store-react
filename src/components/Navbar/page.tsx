import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav>
      <Link to="/">
        Lap<span>Elite</span>
      </Link>

      <ul id="navMenu" className={menuOpen ? 'open' : ''}>
        <li>
          <Link to="/" className={isActive('/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className={isActive('/products')}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/services" className={isActive('/services')}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive('/about')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={isActive('/contact')}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className={isActive('/dashboard')}>
            Dashboard
          </Link>
        </li>
      </ul>

      <div className="nav-actions">
        <Link to="/login" className="link-button">
          Login
        </Link>
      </div>

      <button
        className="menu-toggle"
        id="menuToggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
