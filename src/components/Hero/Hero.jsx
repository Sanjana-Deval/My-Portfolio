import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

function Hero() {
  const greeting = getGreeting();

  return (
    <section className="hero-section">
      <div className="hero-content">

        <p className="greeting">{greeting} 👋</p>

        <h1>
          I'm <span className="highlight">Sanjana B.</span>
        </h1>

        <h2>B.Tech CSE Student</h2>

        <p className="tagline">
          Aspiring Software Developer building clean, fast and accessible
          web experiences.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Work
          </Link>

          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;

