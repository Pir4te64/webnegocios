import React from 'react';
import { FaBuilding, FaHotel, FaUtensils, FaGem, FaLaptop } from "react-icons/fa";

const InvestmentSectors: React.FC = () => {
  const sectors = [
    {
      // Se omite el background ya que ahora la tarjeta será "glass"
      title: "Real Estate",
      description: "Investing in prime developments that drive value over time.",
      icon: <FaBuilding className="text-3xl text-white" />,
    },
    {
      title: "Hotels & Hospitality",
      description: "World-class hotels and resorts that redefine luxury.",
      icon: <FaHotel className="text-3xl text-white" />,
    },
    {
      title: "Restaurants & Culinary",
      description: "Visionary hospitality partnerships and culinary innovations.",
      icon: <FaUtensils className="text-3xl text-white" />,
    },
    {
      title: "Precious Minerals",
      description: "High-value ethical sourcing with robust market demand.",
      icon: <FaGem className="text-3xl text-white" />,
    },
    {
      title: "Technology & Innovation",
      description: "Breakthrough advancements shaping the future of industries.",
      icon: <FaLaptop className="text-3xl text-white" />,
    },
  ];

  return (
    <section
      id="investment-sectors"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Fondo10.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-5xl px-4">
        {/* Título y descripción */}
        <div className="mb-8 text-center">
          <h2
            className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-300 bg-clip-text text-transparent leading-tight"
            style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
          >
            INVESTMENT SECTORS
          </h2>
          <p className="text-lg md:text-base text-gray-200">
            We focus on industries with long-term growth potential and strong market demand.
          </p>
        </div>

        {/* Mobile: Grid de tarjetas en 2 columnas */}
        <div className="md:hidden grid grid-cols-2 gap-4 w-full px-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg p-4 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-between w-full h-10">
                  <h3 className="text-sm font-semibold text-white">
                    {sector.title}
                  </h3>
                  <span className="text-xl text-white">
                    {sector.icon}
                  </span>
                </div>
                <p className="mt-1 text-xs text-white text-center">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid de tarjetas en 3 columnas */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg p-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between h-16">
                <h3 className="text-2xl font-semibold text-white">
                  {sector.title}
                </h3>
                <span className="text-3xl text-white">
                  {sector.icon}
                </span>
              </div>
              <p className="mt-4 text-white text-base text-center">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentSectors;
