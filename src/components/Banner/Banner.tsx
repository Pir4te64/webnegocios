// src/components/Banner/Banner.tsx
import React from "react";
import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <video className="background-video" autoPlay muted loop>
        <source src="/Fondo2.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="banner-content">
        <div className="banner-text">
          <h1>
            <span className="line1">Your Dream Property with</span>
            <br />
            <span className="line2">Alta Group <br /> Miami</span>
          </h1>
          <p>
            Your journey to finding the perfect investment begins here. Explore our listings to find the best opportunities.
          </p>
          
          <div className="banner-stats">
            <div className="stat">
              <h2>200+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h2>300</h2>
              <p>Properties for Clients</p>
            </div>
            <div className="stat">
              <h2>5+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="banner-image">
          <img src="/banner.jpeg" alt="Property" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
