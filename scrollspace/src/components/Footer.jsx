import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('Please enter a valid email.');
      return;
    }

    setStatus('Subscribing...');

    emailjs
      .send(
        'service_pbdwlk4', // Your EmailJS Service ID
        'template_rodg7m7', // Replace with your EmailJS Template ID
        { email }, // Pass the email as a parameter
        'A1mBbIkOdnvTKJc-i' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setStatus('Subscribed successfully! Check your email.');
          setEmail('');
        },
        (error) => {
          console.error('Failed to send email:', error);
          setStatus('An error occurred. Please try again.');
        }
      );
  };

  const handleClick = () => {
    alert('This feature is not implemented yet.');
  };

  return (
    <footer className="footer">
      <div className="newsletter">
        <p>Subscribe to our newsletter</p>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
        {status && <p className="status">{status}</p>}
      </div>
      <div className="footer-links">
        <ul>
          <li><button className="footer-button" onClick={handleClick}>Pricing</button></li>
          <li><button className="footer-button" onClick={handleClick}>About us</button></li>
          <li><button className="footer-button" onClick={handleClick}>Features</button></li>
          <li><button className="footer-button" onClick={handleClick}>Help Center</button></li>
          <li><button className="footer-button" onClick={handleClick}>Contact us</button></li>
          <li><button className="footer-button" onClick={handleClick}>FAQs</button></li>
          <li><button className="footer-button" onClick={handleClick}>Careers</button></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024 ScrollSpace, Inc. · Privacy · Terms · Sitemap</p>
      </div>
    </footer>
  );
}

export default Footer;
