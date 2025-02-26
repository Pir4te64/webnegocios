import React from "react";
import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <video className="background-video1" autoPlay muted loop>
        <source src="/Fondo2.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      {/* Logo en la esquina superior izquierda */}
      <img src="/logoalta.png" alt="Logo" className="banner-logo" />

      <div className="banner-content1">
        <div className="banner-text1">
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
          <div className="banner-stats1">
            <div className="stat1">
              <h2>200+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat1">
              <h2>300</h2>
              <p>Properties for Clients</p>
            </div>
            <div className="stat1">
              <h2>5+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="banner-image1">
          <img src="/banner.jpeg" alt="Property" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
