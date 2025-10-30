import React, { useState, useEffect } from 'react';
import './Hero.css';

import image1 from '../assets/attractive-young-lawyer-office-business-600nw-2595917377.webp';
import image3 from '../assets/imagen 1.jpg';
import image4 from '../assets/imagen 2.webp';
import image5 from '../assets/mujer-negocios-abogado-o-juez-masculino-consultan-tienen-reunion-equipo-cliente-bufete-abogados-oficina-concepto-servicios-juridicos-legales_28283-1825.jpg';
import image6 from '../assets/XOAAYNBLHVCJ5FIT3EOER3HXF4.jpg';

const images = [
  image1,
  image3,
  image4,
  image5,
  image6,
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
        <h1><span className="lexgar-highlight">LEXGAR</span><br/>Soluciones a tu Alcance</h1>
        <p>Comprometidos con la defensa de tus derechos.</p>
        <a href="#contact" className="cta-button">Contáctanos</a>
      </div>
    </section>
  );
}

export default Hero;
