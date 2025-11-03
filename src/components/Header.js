import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/hero.png'; // Importa tu logo

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="main-header">
      <div className="header-logo-container">
        <Link to="/">
          <img src={logo} alt="LEXGAR Logo" className="header-logo" />
        </Link>
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav>
        <ul className={isOpen ? 'open' : ''}>
          <li><Link to="/nosotros" onClick={toggleMenu}>Sobre Nosotros</Link></li>
          <li><Link to="/servicios" onClick={toggleMenu}>Servicios</Link></li>
          <li><Link to="/equipo" onClick={toggleMenu}>Nuestro Equipo</Link></li>
          <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;