
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="footer-content">

        <div className="footer-logo">
          Sanjana.B
        </div>

        <p className="footer-text">
          Building clean, fast and accessible web experiences.
        </p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          © {year} Sanjana.B. Built with React 🌐
        </div>

      </div>

    </footer>
  );
}

export default Footer;

