import React from 'react';
import { FaSearch, FaShieldAlt, FaCogs, FaRocket } from "react-icons/fa";

const InvestmentProcess: React.FC = () => {
  const processSteps = [
    {
      title: "Market Analysis",
      icon: <FaSearch className="text-2xl text-white" />,
      items: [
        "Identify high-potential sectors.",
        "Conduct in-depth research.",
      ],
    },
    {
      title: "Due Diligence",
      icon: <FaShieldAlt className="text-2xl text-white" />,
      items: [
        "Legal & financial evaluation.",
        "Mitigate risks.",
      ],
    },
    {
      title: "Investment Structuring",
      icon: <FaCogs className="text-2xl text-white" />,
      items: [
        "Customize models.",
        "Align with regulations.",
      ],
    },
    {
      title: "Growth Optimization",
      icon: <FaRocket className="text-2xl text-white" />,
      items: [
        "Active management.",
        "Continuous monitoring.",
      ],
    },
  ];

  return (
    <section
      id="investment-process"
      className="relative w-full h-screen flex flex-col items-center justify-center py-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/Investment2.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-5xl px-4">
        {/* Título y descripción */}
        <div className="mb-4 text-center">
          <h2
            className="text-2xl md:text-4xl font-bold text-white mb-2"
            style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}
          >
            Our Investment Process
          </h2>
          <p className="text-xs md:text-base text-gray-200">
            We follow a rigorous process to ensure every investment is strategically structured and aligned with investor goals.
          </p>
        </div>

        {/* Mobile: Grid de tarjetas minimalistas en 2 columnas */}
        <div className="md:hidden grid grid-cols-2 gap-2 w-full px-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-md shadow p-2 transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `${step.title ? "" : ""}`, // No se aplica fondo individual
              }}
            >
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  {step.icon}
                </div>
                <h3 className="text-xs font-semibold text-white text-center">
                  {step.title}
                </h3>
                <ul className="list-disc list-inside text-[9px] text-white text-center">
                  {step.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid de tarjetas en 4 columnas con mayor espacio */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg p-8 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage: `${step.title ? "" : ""}`, // Tarjetas tipo vidrio sin fondo individual
              }}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white text-center">
                  {step.title}
                </h3>
                <ul className="list-disc list-inside text-white space-y-2 text-base text-center">
                  {step.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentProcess;
