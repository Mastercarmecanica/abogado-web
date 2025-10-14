import React from 'react';
import logo from '../assets/hero.jpeg'; // Asumo que esta es la imagen del logo

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo LEX GAR Asesorías Jurídicas" className="logo" />
      </div>
      <h1>LEX GAR</h1>
      <p>ASESORÍAS JURÍDICAS</p>
    </header>
  );
}

export default Header;
