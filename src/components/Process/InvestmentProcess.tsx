import React from 'react';
import { FaSearch, FaShieldAlt, FaCogs, FaRocket } from "react-icons/fa";

const InvestmentProcess: React.FC = () => {
  const processSteps = [
    {
      title: "Market Analysis & Opportunity Assessment",
      icon: <FaSearch className="text-4xl text-white" />,
      items: [
        "Identifying high-potential sectors and emerging markets.",
        "Conducting in-depth research and feasibility studies.",
      ],
    },
    {
      title: "Due Diligence & Risk Management",
      icon: <FaShieldAlt className="text-4xl text-white" />,
      items: [
        "Comprehensive legal and financial evaluation.",
        "Risk mitigation strategies to protect investor interests.",
      ],
    },
    {
      title: "Strategic Investment Structuring",
      icon: <FaCogs className="text-4xl text-white" />,
      items: [
        "Customizing investment models to optimize returns.",
        "Aligning projects with regulatory and financial frameworks.",
      ],
    },
    {
      title: "Execution & Growth Optimization",
      icon: <FaRocket className="text-4xl text-white" />,
      items: [
        "Active management of investments for long-term success.",
        "Continuous monitoring and performance assessment.",
      ],
    },
  ];

  return (
    <section
      id="investment-process"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/Investment2.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-5xl px-4">
        {/* Título y descripción de la sección */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Investment Process
          </h2>
          <p className="text-lg text-gray-200">
            We follow a rigorous process to ensure every investment is strategically structured and aligned with investor goals:
          </p>
        </div>
        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center">
                {/* Ícono en un contenedor circular */}
                <div className="bg-white/20 rounded-full p-4 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white text-center mb-4">
                  {step.title}
                </h3>
              </div>
              <ul className="list-disc list-inside text-white space-y-2">
                {step.items.map((item, idx) => (
                  <li key={idx} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentProcess;
