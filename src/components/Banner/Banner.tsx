import React from 'react';
import './Banner.css';
const Banner: React.FC = () => {
  return (
    <section className="banner">
      {/* Video de fondo */}
      <video className="banner-video" autoPlay muted loop>
        <source src="/MIAMINOCHE_2.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      <img src="/logoalta.png" alt="Logo" className="banner-logo" />

      {/* Contenido principal del banner */}
      <div className="banner-content">
        <div className="banner-text">
          <h1>
            
            <br />
            <span className="line2">Global Investment Opportunities with U.S.</span>
            <span className="line3">Security and Compliance</span>
          </h1>
          <h1>
          <span className="line4">
          At Alta Group Miami, we connect investors with high-potential projects worldwide,
           ensuring compliance with U.S. regulations for maximum security and transparency.
            
          </span>
          </h1>
        </div>

        {/* Imagen destacada (por ejemplo, de una propiedad) */}
        <div className="banner-image">
          <img src="/fondo1.jpeg" alt="Property" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
