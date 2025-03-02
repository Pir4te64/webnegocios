import React, { useState } from "react";

interface Option {
  background: string;
  icon: string; // Clases de FontAwesome
  main: string;
  sub: string;
}

const optionsData: Option[] = [
  {
    background: "url('/Fondo6.jpeg')",
    icon: "fas fa-check-circle",
    main: "Regulatory",
    sub: "Adheres to U.S. laws.",
  },
  {
    background: "url('/FONDOPRUEBA.jpeg')",
    icon: "fas fa-chart-line",
    main: "Market",
    sub: "Data-driven insights.",
  },
  {
    background: "url('/Fondo7.jpeg')",
    icon: "fas fa-layer-group",
    main: "Diversification",
    sub: "Balanced portfolio.",
  },
  {
    background: "url('/FondoAboutUs.jpeg')",
    icon: "fas fa-handshake",
    main: "Partnerships",
    sub: "Collaborates with leaders.",
  },
];

const Options: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Fondo11.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Título superior con efecto glow */}
      <div className="mb-4 w-full max-w-md p-3 rounded-lg flex items-center justify-center">
        <h1
          className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-300 bg-clip-text text-transparent leading-tight"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
        >
          ABOUT US
        </h1>
      </div>

      {/* Texto descriptivo */}
      <div className="mb-4 w-full max-w-lg p-3 rounded-lg flex items-center justify-center bg-white/5 backdrop-blur-sm shadow">
        <p className="text-sm text-center text-white font-ProductSans">
          Alta Group Miami is a strategic investment firm offering investors exclusive access to high-value opportunities worldwide.
        </p>
      </div>

      {/* Mobile: Grid de tarjetas minimalistas */}
      <div className="md:hidden grid grid-cols-1 gap-2 w-full px-4">
        {optionsData.map((option, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className="relative h-32 rounded-lg overflow-hidden shadow border border-gray-200"
            style={{
              background: option.background,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay sutil */}
            {active !== index && (
              <div className="absolute inset-0 bg-white/10"></div>
            )}
            {/* Contenido simplificado */}
            <div className="absolute bottom-1 left-1 z-10">
              <div className="flex items-center space-x-1">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black">
                  <i className={option.icon}></i>
                </div>
                <div className="text-white">
                  <div className="font-bold text-xs">{option.main}</div>
                  <div className="text-[10px]">{option.sub}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Slider interactivo (sin cambios en tamaño para desktop) */}
      <div className="hidden md:flex flex-row items-stretch overflow-hidden w-full md:max-w-[900px] h-[400px]">
        {optionsData.map((option, index) => {
          const isActive = index === active;
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`relative transition-transform duration-500 cursor-pointer ${
                isActive
                  ? "flex-grow-[10000] max-w-[600px] m-0 rounded-2xl"
                  : "flex-grow m-2 rounded-xl"
              }`}
              style={{
                background: option.background,
                backgroundSize: isActive ? "auto 100%" : "auto 120%",
                backgroundPosition: "center",
              }}
            >
              {!isActive && (
                <div className="absolute inset-0 rounded-[inherit] bg-white/10 backdrop-blur-sm border border-transparent"></div>
              )}
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
                    <i className={option.icon}></i>
                  </div>
                  <div className={`${isActive ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
                    <div className="font-bold text-lg text-white">{option.main}</div>
                    <div className="text-sm text-white">{option.sub}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
