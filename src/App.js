import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const whatsappNumber = '56912345678'; // Reemplazar con tu número de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20LEX%20GAR,%20quisiera%20una%20asesor%C3%ADa%20jur%C3%ADdica.`;

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Services />
        <Contact />
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
    </div>
  );
}

export default App;