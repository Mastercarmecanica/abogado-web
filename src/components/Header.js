import React, { useState } from 'react';
import logo from '../assets/hero.png'; // Importa tu logo

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="main-header">
      <div className="header-logo-container">
        <img src={logo} alt="LEXGAR Logo" className="header-logo" />
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul className={isOpen ? 'open' : ''}>
          <li><a href="#about" onClick={toggleMenu}>Sobre Nosotros</a></li>
          <li><a href="#services" onClick={toggleMenu}>Servicios</a></li>
          <li><a href="#team" onClick={toggleMenu}>Nuestro Equipo</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
