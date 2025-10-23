import React from 'react';

function Cases() {
  return (
    <section className="casos">
      <h2>Casos representativos</h2>
      <div className="casos-grid">
        <div className="caso" onClick={() => alert('Caso civil - Defensa de propiedad resuelto favorablemente')}>
          <h3>Defensa de propiedad</h3>
          <p>Resolución a favor del cliente en disputa de bienes raíces.</p>
        </div>
        <div className="caso" onClick={() => alert('Caso laboral - Despido injustificado ganado')}>
          <h3>Despido injustificado</h3>
          <p>Compensación total obtenida por el trabajador.</p>
        </div>
      </div>
    </section>
  );
}

export default Cases;
