import React, { useState } from "react";

interface Option {
  background: string;
  icon: string; // Clases de FontAwesome
  main: string;
  sub: string;
}

const optionsData: Option[] = [
  {
    background: "url(Fondo6.jpeg)",
    icon: "fas fa-check-circle", // Puedes ajustar el icono si lo deseas
    main: "Regulatory Compliance",
    sub: "All investments adhere to U.S. laws and international standards.",
  },
  {
    background: "url(FONDOPRUEBA.jpeg)",
    icon: "fas fa-chart-line",
    main: "Market Intelligence",
    sub: "We leverage data-driven insights to identify profitable ventures.",
  },
  {
    background: "url(Fondo7.jpg)",
    icon: "fas fa-layer-group",
    main: "Diversification",
    sub: "Our carefully curated portfolio spans multiple sectors to ensure balanced risk.",
  },
  {
    background: "url(FondoAboutUs.jpeg)",
    icon: "fas fa-handshake",
    main: "Strategic Partnerships",
    sub: "We collaborate with industry leaders, developers, and innovators to maximize investment potential.",
  },
];

const Options: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Fondo10.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Título superior con fondo blanco */}
      <div className="mb-10 w-[400px] p-5 rounded-2xl flex items-center justify-center bg-gray-300/40 backdrop-blur-xs shadow-lg hover:shadow-2xl hover:shadow-black/50">
        <h1 className="text-4xl text-center text-white font-medium ProductSans-Black">
          About Us
        </h1>
      </div>

      {/* Texto descriptivo con fondo blanco */}
      <div className="mb-5 w-[900px] p-4 rounded-2xl flex items-center justify-center bg-white/50 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:shadow-black/50">
        <h1 className="text-xl text-center text-white font-thin ProductSans-Black">
          Alta Group Miami is a strategic investment firm headquartered in the United States. With extensive experience in global markets, we offer investors exclusive access to high-value opportunities across multiple industries. Our expertise lies in mitigating risks, optimizing returns, and navigating complex regulatory landscapes. Our approach is driven by:
        </h1>
      </div>

      <div className="flex flex-row items-stretch overflow-hidden min-w-[600px] max-w-[900px] w-[calc(100%-100px)] h-[400px] z-10">
        {optionsData.map((option, index) => {
          const isActive = index === active;
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`relative transition-transform duration-700 cursor-pointer ${
                isActive
                  ? "flex-grow-[10000] max-w-[600px] m-0 rounded-[40px]"
                  : "flex-grow m-2 rounded-[30px]"
              }`}
              style={{
                background: option.background,
                backgroundSize: isActive ? "auto 100%" : "auto 120%",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay de Blur: se muestra solo si la tarjeta no está activa */}
              {!isActive && (
                <div className="absolute inset-0 rounded-[inherit] bg-white/10 backdrop-blur-lg border border-transparent z-0"></div>
              )}

              {/* Sombra interna */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[120px] transition-all duration-700 ${
                  isActive
                    ? "shadow-[inset_0_-120px_120px_-120px_black, inset_0_-120px_120px_-100px_black]"
                    : "shadow-[inset_0_-120px_0px_-120px_black, inset_0_-120px_0px_-100px_black]"
                } z-10`}
              ></div>

              {/* Etiqueta (contenido) */}
              <div
                className={`absolute transition-all duration-700 z-20 ${
                  isActive ? "bottom-5 left-5" : "bottom-2 left-2"
                }`}
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center min-w-[40px] max-w-[40px] h-[40px] rounded-full bg-white text-black">
                    <i className={option.icon}></i>
                  </div>
                  <div
                    className={`ml-2 transition-all duration-700 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="font-bold text-[1.2rem] text-white">
                      {option.main}
                    </div>
                    <div className="text-sm text-white delay-100">
                      {option.sub}
                    </div>
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
