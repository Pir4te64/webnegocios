import React from 'react';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      {/* Video de fondo */}
      <video className="banner-video" autoPlay muted loop>
        <source src="/Fondo2.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      <img src="/logoalta.png" alt="Logo" className="banner-logo" />

      {/* Contenido principal del banner */}
      <div className="banner-content">
        <div className="banner-text">
          <h1>
            <span className="line1">
              Global Investment Opportunities with U.S. Security and Compliance
            </span>
            <br />
            <span className="line2">Alta Group Miami</span>
          </h1>
          <p>
            Your journey to finding the perfect investment begins here.
            Explore our listings to find the best opportunities.
          </p>
        </div>

        {/* Imagen destacada (por ejemplo, de una propiedad) */}
        <div className="banner-image">
          <img src="/banner.jpeg" alt="Property" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
