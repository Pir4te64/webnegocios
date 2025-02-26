// src/components/Process/InvestmentProcess.tsx
import React from 'react';
import "./InvestmentProcess.css";

const InvestmentProcess: React.FC = () => (
  <div className="process-section2">
    {/* Video de fondo, igual que en Banner */}
    <video className="background-video2" autoPlay muted loop>
      <source src="/Fondo2.mp4" type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
    <div className="process-content2">
      <h2>Our Investment Process</h2>
      <p>
        We follow a rigorous process to ensure every investment is strategically structured and aligned with investor goals:
      </p>
      <ol>
        <li>
          <strong>Market Analysis & Opportunity Assessment</strong>
          <ul>
            <li>Identifying high-potential sectors and emerging markets.</li>
            <li>Conducting in-depth research and feasibility studies.</li>
          </ul>
        </li>
        <li>
          <strong>Due Diligence & Risk Management</strong>
          <ul>
            <li>Comprehensive legal and financial evaluation.</li>
            <li>Risk mitigation strategies to protect investor interests.</li>
          </ul>
        </li>
        <li>
          <strong>Strategic Investment Structuring</strong>
          <ul>
            <li>Customizing investment models to optimize returns.</li>
            <li>Aligning projects with regulatory and financial frameworks.</li>
          </ul>
        </li>
        <li>
          <strong>Execution & Growth Optimization</strong>
          <ul>
            <li>Active management of investments for long-term success.</li>
            <li>Continuous monitoring and performance assessment.</li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
);

export default InvestmentProcess;
