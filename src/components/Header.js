import React from 'react';
import logo from '../assets/hero.jpeg'; // Import the logo

function Header() {
  return (
    <header>
      <div className="hero-content">
        <img src={logo} alt="LEX GAR Logo" className="hero-logo" />
        <h1>LEX GAR Asesorías Jurídicas</h1>
        <p>Comprometidos con la excelencia, la ética y la defensa de tus derechos.</p>
        <button className="btn">Solicitar consulta</button>
      </div>
    </header>
  );
}

export default Header;
