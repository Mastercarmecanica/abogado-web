import React, { useState, useEffect } from 'react';
import './Hero.css';

const images = [
  'https://images.unsplash.com/photo-1521737711867-ee1ab9207853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1522071820075-ef24470175f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <img src={images[currentImage]} alt="Background" className="hero-slideshow-image" />
      <div className="hero-content">
        <h1>Soluciones Legales a tu Alcance</h1>
        <p>Comprometidos con la defensa de tus derechos.</p>
        <a href="#contact" className="cta-button">Contáctanos</a>
      </div>
    </section>
  );
}

export default Hero;
