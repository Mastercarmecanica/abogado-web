
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
        const response = await fetch('https://formspree.io/f/xpwoqree', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  if (status === 'SUCCESS') {
    return <Alert variant="success">Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</Alert>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Tu nombre</Form.Label>
        <Form.Control type="text" name="name" placeholder="Ingresa tu nombre" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Tu correo electrónico</Form.Label>
        <Form.Control type="email" name="email" placeholder="Ingresa tu correo" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Tu mensaje</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} required />
      </Form.Group>

      {status === 'ERROR' && <Alert variant="danger">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</Alert>}

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default ContactForm;
