import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} LEX GAR Asesorias Juridicas. Todos los derechos reservados.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            {/* Reemplazar '#!' con los enlaces a tus redes sociales */}
            <a href="#!" className="text-white me-3">LinkedIn</a>
            <a href="#!" className="text-white me-3">Facebook</a>
            <a href="#!" className="text-white">Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;