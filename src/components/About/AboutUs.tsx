// src/components/About/AboutUs.tsx
import React from 'react';
import "./AboutUs.css";

const AboutUs: React.FC = () => (
    <div className="about-section">
        <h2>About Us</h2>
        <p>
            Alta Group Miami is a strategic investment firm headquartered in the United States. With extensive experience in global markets, we offer investors exclusive access to high-value opportunities across multiple industries. Our expertise lies in mitigating risks, optimizing returns, and navigating complex regulatory landscapes.
        </p>
        <p>Our approach is driven by:</p>
        <ul>
            <li><strong>Regulatory Compliance</strong> – All investments adhere to U.S. laws and international standards.</li>
            <li><strong>Market Intelligence</strong> – We leverage data-driven insights to identify profitable ventures.</li>
            <li><strong>Diversification</strong> – Our carefully curated portfolio spans multiple sectors to ensure balanced risk.</li>
            <li><strong>Strategic Partnerships</strong> – We collaborate with industry leaders, developers, and innovators to maximize investment potential.</li>
        </ul>
    </div>
);

export default AboutUs;
