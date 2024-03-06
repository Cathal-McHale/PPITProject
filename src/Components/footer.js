import React from 'react';
import './Footer.css'; // Create a Footer.css for styling the footer

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} Trending Products</p>
      <p>Affiliate page</p>
    </footer>
  );
};

export default Footer;
