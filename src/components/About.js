import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const teamMembers = [
  {
    name: 'Marco Lubo',
    title: 'Socio Fundador',
    bio: 'Especialista en derecho penal con más de 10 años de experiencia defendiendo casos complejos. Comprometido con la justicia y la protección de los derechos de sus clientes.',
    img: 'https://placehold.co/300x300/EFEFEF/333?text=Foto'
  },
  {
    name: 'Nombre Abogado/a',
    title: 'Abogado/a Asociado/a',
    bio: 'Experto/a en derecho civil y de familia, enfocado/a en encontrar soluciones eficientes y personalizadas para cada cliente. Gran capacidad de negociación y litigación.',
    img: 'https://placehold.co/300x300/EFEFEF/333?text=Foto'
  },
   {
    name: 'Nombre Abogado/a',
    title: 'Abogado/a Asociado/a',
    bio: 'Experto/a en derecho civil y de familia, enfocado/a en encontrar soluciones eficientes y personalizadas para cada cliente. Gran capacidad de negociación y litigación.',
    img: 'https://placehold.co/300x300/EFEFEF/333?text=Foto'
  }
];

function About() {
  return (
    <section id="nosotros" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Conozca a Nuestro Equipo</h2>
        <p className="text-center lead mb-5">
          Somos un equipo de abogados apasionados y dedicados, con un profundo conocimiento en nuestras áreas de práctica. Nuestra misión es ofrecer una asesoría legal de excelencia, basada en la confianza y la transparencia.
        </p>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col md={6} lg={4} key={index} className="mb-4 d-flex justify-content-center">
              <Card style={{ width: '18rem' }} className="shadow-sm text-center">
                <Card.Img variant="top" src={member.img} />
                <Card.Body>
                  <Card.Title as="h5">{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                  <Card.Text>
                    {member.bio}
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

export default About;