import React from 'react';
import './Contact.css'; // Importamos el archivo CSS

const contactInfo = {
  address: 'Santiago, Chile',
  phone: '+56 9 1234 5678',
  generalEmail: 'contacto@lexgar.cl',
  lawyers: [
    {
      name: 'Luis Rodríguez',
      email: 'l.rodriguez@lexgar.cl',
    },
    {
      name: 'Carlos Garrido',
      email: 'C.garrido@lexgar.cl',
    },
    {
      name: 'Katherina Adonis',
      email: 'k.adonis@lexgar.cl',
    },
  ],
};

function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <h2 className="section-title">CONTACTO</h2>
        <div className="contact-content">
          <div className="contact-details">
            <h3>Información General</h3>
            <p>
              <strong><i className="fas fa-map-marker-alt"></i> Dirección:</strong> {contactInfo.address}
            </p>
            <p>
              <strong><i className="fas fa-phone"></i> Teléfono:</strong> {contactInfo.phone}
            </p>
            <p>
              <strong><i className="fas fa-envelope"></i> Email General:</strong>
              <a href={`mailto:${contactInfo.generalEmail}`}>{contactInfo.generalEmail}</a>
            </p>
          </div>
          <div className="contact-lawyers">
            <h3>Contacto Directo</h3>
            <ul>
              {contactInfo.lawyers.map((lawyer, index) => (
                <li key={index}>
                  <strong>{lawyer.name}:</strong>
                  <a href={`mailto:${lawyer.email}`}>{lawyer.email}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;