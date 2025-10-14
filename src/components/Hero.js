import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  const heroStyle = {
    position: 'relative',
    backgroundImage: `url(${require('../assets/hero.jpeg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '100px 0',
    textAlign: 'center'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% black overlay
    zIndex: 1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2
  };

  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle}></div>
      <Container style={contentStyle}>
        <Row>
          <Col>
            <h1>Asesoría Jurídica Integral y Confiable</h1>
            <p className="lead">
              Comprometidos con la defensa de tus derechos. Soluciones legales a tu medida.
            </p>
            <Button variant="primary" href="#contacto" size="lg">
              Agendar una Consulta
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
