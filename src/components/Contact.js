import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Gracias por tu mensaje. El formulario de contacto se activará próximamente.');
  };

  const phoneNumber = '+56912345678'; // <-- REEMPLAZAR CON NÚMERO REAL
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}`;

  return (
    <section id="contacto" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contáctenos</h2>
        <Row>
          <Col md={5}>
            <h4>Información de Contacto</h4>
            <p>
              Puedes contactarnos a través de los siguientes medios. Estaremos encantados de atenderte.
            </p>
            <p>
              <strong>Dirección:</strong><br />
              Tu Dirección, Ciudad, País
            </p>
            <p>
              <strong>Teléfono:</strong><br />
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:contacto@lexgar.cl">contacto@lexgar.cl</a>
            </p>
            <Button variant="success" href={whatsappLink} target="_blank" className="mt-3">
               Enviar mensaje por WhatsApp
            </Button>
          </Col>
          <Col md={7}>
            <h4>Envíanos un Mensaje</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre completo" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Tu correo electrónico" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Asunto</Form.Label>
                <Form.Control type="text" placeholder="Asunto de tu consulta" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Describe tu consulta" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar Mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;