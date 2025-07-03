import React from 'react';
import './Hero.css';
import heroVideo from '../assets/videos/hero-bg.mp4';

const Hero = () => {
  return (
    <section id="home" className="hero-section position-relative">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content d-flex flex-column justify-content-center align-items-center text-white text-center">
        <h1 className="hero-title">Hi, I'm Sachin Pattar</h1>
        <p className="hero-subtitle">Aspiring Software Developer | Tech Enthusiast</p>
        <div className="hero-buttons mt-3">
          <a href="#contact" className="btn btn-primary me-3">Get In Touch</a>
          <a
            href="https://sachinpattar8866.github.io/portfolio/Sachin_Pattar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
