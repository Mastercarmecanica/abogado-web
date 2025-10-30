import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Cases from './components/Cases';
import Footer from './components/Footer';

function App() {
  const [showWhatsappOptions, setShowWhatsappOptions] = useState(false); // State for WhatsApp options

  const toggleWhatsappOptions = () => {
    setShowWhatsappOptions(!showWhatsappOptions);
  };

  // WhatsApp numbers for different matters
  const whatsappNumbers = {
    civil: '+56956328904',
    familia: '+56939673735',
    penal: '+56930996851',
  };

  const getWhatsappLink = (number, message) => {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    return isMobile
      ? `https://wa.me/${number}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${number}&text=${encodedMessage}`;
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <Trust />
        <Testimonials />
        <Team />
        <Cases />
      </main>
      <Footer />

      {/* ======= BOTÓN FLOTANTE WHATSAPP ======= */}
      <div className={`whatsapp-container ${showWhatsappOptions ? 'open' : ''}`}>
        {showWhatsappOptions && (
          <div className="whatsapp-options">
            <a
              href={getWhatsappLink(whatsappNumbers.civil, "Hola, quisiera una asesoría en Materia Civil.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Materia Civil
            </a>
            <a
              href={getWhatsappLink(whatsappNumbers.familia, "Hola, quisiera una asesoría en Materia Familia.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Materia Familia
            </a>
            <a
              href={getWhatsappLink(whatsappNumbers.penal, "Hola, quisiera una asesoría en Materia Penal.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Materia Penal
            </a>
          </div>
        )}
        <button
          className="whatsapp-float"
          onClick={toggleWhatsappOptions}
          aria-label="Opciones de contacto WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </button>
        <div className="tooltip">Habla con un abogado ahora</div>
      </div>
    </div>
  );
}

export default App;
