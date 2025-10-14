import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const services = [
  {
    title: 'Derecho Penal',
    description: 'Defensa y representación en todas las etapas del proceso penal, desde la investigación hasta el juicio oral.'
  },
  {
    title: 'Derecho Civil',
    description: 'Asesoría en contratos, indemnizaciones, herencias, y todo tipo de litigios civiles.'
  },
  {
    title: 'Derecho de Familia',
    description: 'Representación en casos de divorcio, pensión alimenticia, cuidado personal y relación directa y regular.'
  },
  {
    title: 'Asesoría Empresarial',
    description: 'Soporte legal integral para empresas, desde la constitución de sociedades hasta la resolución de conflictos comerciales.'
  }
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Nuestras Áreas de Práctica</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title as="h4">{service.title}</Card.Title>
                  <Card.Text>
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;