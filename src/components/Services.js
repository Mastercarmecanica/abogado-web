import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Derecho Penal',
    items: [
      'Defensa en procedimientos penales.',
      'Representación en juicios orales y escritos.',
      'Asesoría en denuncias, querellas y delitos económicos.',
      'Recursos de amparo y protección de derechos fundamentales.',
    ],
  },
  {
    title: 'Derecho Civil',
    items: [
      'Redacción y revisión de contratos civiles.',
      'Juicios por incumplimiento contractual.',
      'Acciones de responsabilidad civil (daños y perjuicios).',
      'Asesoría en posesión efectiva y herencias.',
      'Tramitación de juicios de arrendamiento y desahucio.',
    ],
  },
  {
    title: 'Derecho de Familia',
    items: [
      'Representación en divorcios de mutuo acuerdo y unilaterales.',
      'Tramitación de pensión de alimentos y regulación de visitas.',
      'Custodia y cuidado personal de menores.',
      'Declaración y reclamación de filiación.',
      'Asesoramiento en adopciones y violencia intrafamiliar.',
    ],
  },
  {
    title: 'Otros Servicios Jurídicos',
    items: [
      'Asesoría preventiva y consultoría legal integral.',
      'Mediación y resolución alternativa de conflictos.',
      'Elaboración de informes jurídicos.',
      'Representación extrajudicial y judicial.',
    ],
  },
];

function ServiceCard({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`service-card ${isOpen ? 'open' : ''}`}>
      <div className="service-card-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="service-card-body">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <h2 className="section-title">NUESTROS SERVICIOS</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} title={service.title} items={service.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
