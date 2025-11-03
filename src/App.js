import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes de la página
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Cases from './components/Cases';

// Páginas
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

// Página de Inicio
function Home() {
  return (
    <>
      <Hero />
      <main>
        <Trust />
        <Testimonials />
        <Cases />
      </main>
    </>
  );
}

function App() {
  const [showWhatsappOptions, setShowWhatsappOptions] = useState(false);

  const toggleWhatsappOptions = () => {
    setShowWhatsappOptions(!showWhatsappOptions);
  };

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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
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
        </div>
      </div>
    </Router>
  );
}

export default App;