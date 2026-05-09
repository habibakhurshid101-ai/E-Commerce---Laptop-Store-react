import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h1>
            Lap<span>Elite</span>
          </h1>
          <p>Pakistan's premium laptop & tech store since 2019.</p>
          <div className="social-links">
            <a href="#">𝕏</a>
            <a href="#">in</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
          </div>
        </div>
        <div>
          <h2>Products</h2>
          <Link to="/">Laptops</Link>
          <Link to="/">Desktops</Link>
          <Link to="/">Workstations</Link>
          <Link to="/">Gaming</Link>
          <Link to="/">Accessories</Link>
        </div>
        <div>
          <h2>Services</h2>
          <Link to="/services">Warranty Plans</Link>
          <Link to="/services">Repair Service</Link>
          <Link to="/services">Cloud Backup</Link>
          <Link to="/services">IT Consulting</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link to="/">About Us</Link>
          <Link to="/contact">Contact</Link>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>
        <div>
          <h2>Support</h2>
          <a href="#">Drivers & Downloads</a>
          <a href="#">Warranty Check</a>
          <a href="#">Track Order</a>
          <Link to="/contact">Contact Support</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2026 LapElite Pvt. Ltd. All rights reserved. &nbsp;|&nbsp;
          <a href="#">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="#">Terms of Sale</a> &nbsp;|&nbsp;
          <a href="#">Accessibility</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
