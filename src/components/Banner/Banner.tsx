import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="w-full h-screen relative flex items-center justify-center box-border">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10 shadow-lg"
        autoPlay
        muted
        loop
      >
        <source src="/MIAMINOCHE_2.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Logo para desktop (visible en md y superiores) */}
      <img
        src="/logoalta.png"
        alt="Logo"
        className="hidden md:block absolute top-24 left-24 w-36 z-20"
      />
      {/* Logo para mobile (visible en pantallas pequeñas) */}
      <img
        src="/logoalta.png"
        alt="Logo"
        className="block md:hidden absolute top-6 left-1/2 transform -translate-x-1/2 w-24 z-20"
      />

      {/* Contenido del banner */}
      <div className="flex flex-col md:flex-row items-center justify-between w-11/12 max-w-6xl z-10 px-4">
        {/* Columna de texto */}
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 className="mt-5 ProductSans-Black drop-shadow-md">
            {/* Línea grande con degradado */}
            <span className="block text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Global Investment Opportunities with U.S.
            </span>
            {/* Línea secundaria */}
            <span className="block mt-4 text-2xl md:text-4xl ProductSans-Black text-white">
              Security and Compliance
            </span>
            {/* Texto explicativo */}
            <span className="block mt-2 text-lg md:text-2xl ProductSans-Black text-white max-w-3xl">
              At Alta Group Miami, we connect investors with high-potential projects worldwide,
              ensuring compliance with U.S. regulations for maximum security and transparency.
            </span>
          </h1>
        </div>

        {/* Columna de imagen */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/fondo2.jpeg"
            alt="Property"
            className="w-11/12 md:w-7/10 rounded-3xl shadow-2xl opacity-80 mt-2 transform translate-x-0 md:translate-x-12 animate-blinkShadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
