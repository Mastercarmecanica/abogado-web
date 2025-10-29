import React from 'react';
import logo from '../assets/hero.png'; // Use the same placeholder

function Footer() {
  return (
    <footer>
      <img src={logo} alt="LEX GAR Logo" />
      <p>© 2025 LEX GAR Asesorías Jurídicas</p>
      <p>contacto@lexgar.cl | +56 9 1234 5678</p>
      <p>Santiago de Chile</p>
      <a href="https://www.instagram.com/lexgar.asesoriasjuridicas" target="_blank" rel="noopener noreferrer" class="instagram-float">
        <i class="fab fa-instagram"></i>
      </a>
    </footer>
  );
}

export default Footer;
