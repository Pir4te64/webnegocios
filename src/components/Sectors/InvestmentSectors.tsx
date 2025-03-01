// src/components/Sectors/InvestmentSectors.tsx
import React from 'react';
import "./InvestmentSectors.css";

const InvestmentSectors: React.FC = () => (
  <div
  className="h-screen w-screen overflow-hidden flex items-center justify-center relative bg-gray-800"
  style={{
    backgroundImage: 'url(/fondobanner2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Contenedor cuadrado centrado */}
  <div className="flex flex-col items-center justify-center w-full max-w-3xl aspect-square p-10">
    {/* Título principal */}
    <div className="mb-10 w-full rounded-3xl flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/99 shadow-lg p-5 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/50">
      <h1 className="text-4xl text-center text-white font-medium ProductSans-Black">
        We focus on industries with long-term growth potential and strong market demand:
      </h1>
    </div>
    {/* Contenedor para los 5 recuadros */}
    <div className="flex flex-wrap justify-center gap-5">
      {/* Real Estate */}
      <div className="w-80 rounded-3xl flex items-center justify-between bg-white/10 backdrop-blur-lg border border-gray-400/99 shadow-lg p-5 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/50">
        <h1 className="text-xl text-white ProductSans-Black whitespace-normal">
          Real Estate: Investing in prime developments.
        </h1>
        <span className="text-3xl ml-4 text-white">🏢</span>
      </div>
      {/* Hotels & Hospitality */}
      <div className="w-80 rounded-3xl flex items-center justify-between bg-white/10 backdrop-blur-lg border border-gray-400/99 shadow-lg p-5 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/50">
        <h1 className="text-xl text-white ProductSans-Black whitespace-normal">
          Hotels & Hospitality: World-class hotels and resorts.
        </h1>
        <span className="text-3xl ml-4 text-white">🏨</span>
      </div>
      {/* Restaurants & Culinary Investments */}
      <div className="w-80 rounded-3xl flex items-center justify-between bg-white/10 backdrop-blur-lg border border-gray-400/99 shadow-lg p-5 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/50">
        <h1 className="text-xl text-white ProductSans-Black whitespace-normal">
          Restaurants & Culinary: Visionary hospitality partnerships.
        </h1>
        <span className="text-3xl ml-4 text-white">🍽️</span>
      </div>
      {/* Precious Minerals & Commodities */}
      <div className="w-80 rounded-3xl flex items-center justify-between bg-white/10 backdrop-blur-lg border border-gray-400/99 shadow-lg p-5 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/50">
        <h1 className="text-xl text-white ProductSans-Black whitespace-normal">
          Precious Minerals: High-value ethical sourcing.
        </h1>
        <span className="text-3xl ml-4 text-white">⛏️</span>
      </div>
      {/* Technology & Innovation */}
      <div className="w-80 rounded-3xl flex items-center justify-between bg-white/10 backdrop-blur-lg border border-gray-400/99 shadow-lg p-5 transform transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-white/50">
        <h1 className="text-xl text-white ProductSans-Black whitespace-normal">
          Technology & Innovation: Breakthrough advancements.
        </h1>
        <span className="text-3xl ml-4 text-white">💻</span>
      </div>
    </div>
  </div>
</div>
);
  




export default InvestmentSectors;
