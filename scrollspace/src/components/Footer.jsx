import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <p>Subscribe to our newsletter</p>
        <input type="email" placeholder="Input your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-links">
        <ul>
          <li>Pricing</li>
          <li>About us</li>
          <li>Features</li>
          <li>Help Center</li>
          <li>Contact us</li>
          <li>FAQs</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024 ScrollSpace, Inc. · Privacy · Terms · Sitemap</p>
      </div>
    </footer>
  );
}

export default Footer;