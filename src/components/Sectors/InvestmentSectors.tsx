import React from 'react';
import { FaBuilding, FaHotel, FaUtensils, FaGem, FaLaptop } from "react-icons/fa";

const InvestmentSectors: React.FC = () => {
  // Definición de los sectores con íconos en blanco y negro
  const sectors = [
    {
      title: "Real Estate",
      description: "Investing in prime developments that drive value over time.",
      icon: <FaBuilding className="text-3xl" />,
    },
    {
      title: "Hotels & Hospitality",
      description: "World-class hotels and resorts that redefine luxury.",
      icon: <FaHotel className="text-3xl" />,
    },
    {
      title: "Restaurants & Culinary",
      description: "Visionary hospitality partnerships and culinary innovations.",
      icon: <FaUtensils className="text-3xl" />,
    },
    {
      title: "Precious Minerals",
      description: "High-value ethical sourcing with robust market demand.",
      icon: <FaGem className="text-3xl" />,
    },
    {
      title: "Technology & Innovation",
      description: "Breakthrough advancements shaping the future of industries.",
      icon: <FaLaptop className="text-3xl" />,
    },
  ];

  return (
    <section
      id="investment-sectors"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Fondo10.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-5xl px-4">
        {/* Título y descripción de la sección */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investment Sectors
          </h2>
          <p className="text-lg text-gray-200">
            We focus on industries with long-term growth potential and strong market demand.
          </p>
        </div>
        {/* Cuadrícula de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Encabezado de la tarjeta con altura fija */}
              <div className="flex items-center justify-between h-16">
                <h3 className="text-2xl font-semibold text-white">
                  {sector.title}
                </h3>
                <span className="text-3xl text-white">
                  {sector.icon}
                </span>
              </div>
              {/* Descripción */}
              <p className="mt-4 text-white text-base">
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
