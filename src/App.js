import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Cases from './components/Cases';
import Footer from './components/Footer';

function App() {
  const whatsappNumber = '56912345678';
  const whatsappMessage = encodeURIComponent("Hola LEX GAR, quisiera una asesoría jurídica.");
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  const whatsappLink = isMobile
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

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
      <a 
        href={whatsappLink} 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp con LEX GAR"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <div className="tooltip">Habla con un abogado ahora</div>
    </div>
  );
}

export default App;
