import React, { useState } from 'react';
import logo from '../assets/hero.jpeg'; // Import the logo
import { Modal, Button } from 'react-bootstrap';
import ContactForm from './ContactForm';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <div className="hero-content">
        <img src={logo} alt="LEX GAR Logo" className="hero-logo" />
        <h1>LEX GAR Asesorías Jurídicas</h1>
        <p>Comprometidos con la excelencia, la ética y la defensa de tus derechos.</p>
        <Button variant="primary" onClick={handleShow}>
          Solicitar consulta
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
      </Modal>
    </header>
  );
}

export default Header;
