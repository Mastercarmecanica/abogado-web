import React from 'react';
import './Team.css';

// Importa las imágenes que usarás. Asegúrate de que las rutas sean correctas.
// Por ahora, usaré placeholders genéricos.
import luisImg from '../assets/imagen 1.jpg';
import carlosImg from '../assets/imagen 2.webp';
import katherinaImg from '../assets/attractive-young-lawyer-office-business-600nw-2595917377.webp';

const teamMembers = [
  {
    name: 'Luis Rodríguez',
    specialty: 'Especialista en Derecho Penal',
    description: 'Abogado con amplia experiencia en la defensa penal, manejo de juicios orales, asesoría en delitos económicos y litigación en causas complejas. Comprometido con la protección de los derechos fundamentales y la búsqueda de justicia en cada caso.',
    img: luisImg,
  },
  {
    name: 'Carlos Garrido',
    specialty: 'Especialista en Derecho Civil',
    description: 'Abogado dedicado a la resolución de conflictos civiles, contratos, responsabilidad civil y asuntos patrimoniales. Con sólida trayectoria en asesoría y representación ante tribunales, destaca por su enfoque práctico y trato cercano con los clientes.',
    img: carlosImg,
  },
  {
    name: 'Katherina Adonis',
    specialty: 'Especialista en Derecho de Familia',
    description: 'Abogada experta en procesos de familia: divorcios, alimentos, cuidado personal, régimen comunicacional y filiación. Ofrece acompañamiento humano y ético en procesos sensibles, priorizando el bienestar de las personas y la protección de los derechos de niñas, niños y adolescentes.',
    img: katherinaImg,
  },
];

function Team() {
  return (
    <section id="equipo" className="team-section">
      <div className="container">
        <h2 className="section-title">NUESTRO EQUIPO</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-card-inner">
                <div className="team-card-front">
                  <img src={member.img} alt={member.name} className="team-img" />
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.specialty}</p>
                  </div>
                </div>
                <div className="team-card-back">
                  <h4>{member.name}</h4>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;