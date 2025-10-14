import React from 'react';

const services = [
  {
    title: 'Derecho Civil',
    description: 'Asesoría en contratos, herencias, propiedades, y reclamaciones civiles.'
  },
  {
    title: 'Derecho Penal',
    description: 'Defensa penal profesional, acompañamiento en procesos judiciales y estrategias legales.'
  },
  {
    title: 'Derecho Familiar',
    description: 'Divorcios, pensiones alimenticias, custodias y mediaciones familiares con empatía.'
  },
  {
    title: 'Derecho Laboral',
    description: 'Reclamos laborales, despidos injustificados y asesoramiento en relaciones laborales.'
  }
];

function Services() {
  return (
    <section id="servicios">
      <h2>Áreas de Práctica</h2>
      <div className="services">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;