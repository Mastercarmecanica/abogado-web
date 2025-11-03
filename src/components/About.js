import React from 'react';
import './About.css';

function About() {
  return (
    <section id="nosotros" className="about-section">
      <div className="container">
        <h2 className="section-title">SOBRE NOSOTROS</h2>
        <p className="section-intro">
          Somos LEX GAR, un equipo de abogados comprometidos con la excelencia legal y la atención cercana. Defendemos los intereses de nuestros clientes en las áreas de Derecho Penal, Civil y Familia, adaptándonos a cada caso con profesionalismo, ética y vocación de servicio. Nuestra finalidad es entregar soluciones jurídicas oportunas y efectivas, orientadas a la tranquilidad y seguridad de quienes confían en nosotros.
        </p>
        <div className="about-content">
          <div className="about-item">
            <h3>Nuestra Historia</h3>
            <p>
              LEX GAR Asesorías Jurídicas nace en 2023 con la misión de democratizar el acceso a la justicia en Chile. Durante más de 2 años, hemos construido una reputación sólida basada en la excelencia profesional, la cercanía humana y el compromiso inquebrantable con nuestros clientes.
            </p>
          </div>
          <div className="about-item">
            <h3>Nuestra Misión</h3>
            <p>
              Brindar asesoría jurídica integral y de calidad, defendiendo los derechos de nuestros clientes con profesionalismo, ética y dedicación. Creemos que cada persona merece una representación legal competente y accesible.
            </p>
          </div>
          <div className="about-item">
            <h3>Nuestra Visión</h3>
            <p>
              Ser el despacho jurídico de referencia en Chile, reconocido por nuestra excelencia técnica, trato humano y capacidad de obtener resultados favorables para nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
