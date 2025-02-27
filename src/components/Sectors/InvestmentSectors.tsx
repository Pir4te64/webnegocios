// src/components/Sectors/InvestmentSectors.tsx
import React from 'react';
import "./InvestmentSectors.css";
import Fondo from "../../../public/Fondo3.mp4";

const InvestmentSectors: React.FC = () => (
  <div className="sectors-section5">
    {/* Video de fondo */}
    <video className="background-video5" autoPlay muted loop>
      <source src={Fondo} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
    <div className="sectors-content5">
      <h2>Investment Sectors</h2>
      <p>We focus on industries with long-term growth potential and strong market demand:</p>
      
      <h3>Real Estate</h3>
      <p>
        Investing in prime residential, commercial, and mixed-use developments in key global locations. Our real estate projects include:
      </p>
      <ul>
        <li>High-end residential properties</li>
        <li>Luxury commercial spaces</li>
        <li>Mixed-use developments in strategic urban hubs</li>
      </ul>
      
      <h3>Hotels & Hospitality</h3>
      <p>
        We invest in world-class hotels and resorts, catering to the growing demand for premium travel and tourism experiences. Our portfolio includes:
      </p>
      <ul>
        <li>Boutique and luxury hotel chains</li>
        <li>Resort developments in high-demand locations</li>
        <li>Hospitality management ventures</li>
      </ul>
      
      <h3>Restaurants & Culinary Investments</h3>
      <p>
        Partnering with visionary entrepreneurs and established brands in the hospitality industry. Our investments include:
      </p>
      <ul>
        <li>Fine dining and luxury restaurant concepts</li>
        <li>Expansion of high-potential restaurant franchises</li>
        <li>Innovative culinary experiences with strong brand identity</li>
      </ul>
      
      <h3>Precious Minerals & Commodities</h3>
      <p>
        We identify and invest in high-value resources, ensuring ethical sourcing and sustainable profitability. Areas of focus include:
      </p>
      <ul>
        <li>Gold, silver, and rare mineral extraction</li>
        <li>Trading and distribution of precious metals</li>
        <li>Sustainable mining operations</li>
      </ul>
      
      <h3>Technology & Innovation</h3>
      <p>
        Supporting breakthrough technological advancements and scalable digital businesses. Our investments focus on:
      </p>
      <ul>
        <li>Fintech and blockchain solutions</li>
        <li>Artificial intelligence and automation</li>
        <li>Scalable SaaS and digital transformation initiatives</li>
      </ul>
    </div>
  </div>
);

export default InvestmentSectors;
