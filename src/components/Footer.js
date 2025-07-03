import React from 'react';
import './Footer.css'; // optional for extra styling

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-2">Connect with me:</p>
        <div className="social-icons mb-3">
          <a
            href="https://github.com/SachinPattar8866"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sachin-v-pattar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="pattarsachin10@gmail.com"
            className="text-white"
          >
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} Sachin-Pattar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
