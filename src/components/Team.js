import React from 'react';

function Team() {
  return (
    <section className="equipo">
      <h2>Nuestro equipo</h2>
      <div className="team-grid">
        <div className="team-card">
          <img src="https://images.unsplash.com/photo-1603415526960-f7e0328f8a3d?auto=format&fit=crop&w=600&q=60" alt="Abogado" />
          <h3>Gabriel Ramírez</h3>
          <p>Director Legal</p>
        </div>
        <div className="team-card">
          <img src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=60" alt="Abogada" />
          <h3>Laura García</h3>
          <p>Especialista en Derecho Civil</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
