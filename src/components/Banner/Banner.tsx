// src/components/Banner/Banner.tsx
import React from "react";
import "./Banner.css";

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Discover Your Dream Property

                </h1>

                <h1 className="banner-lower">
                    with Alta Group Miami

                </h1>


                <p>
                    Your journey to finding the perfect investment begins here. Explore our listings to find the best opportunities.
                </p>
                <div className="banner-buttons">
                    <button className="learn-more">Learn More</button>
                    <button className="browse-properties">Browse Properties</button>
                </div>
                <div className="banner-stats">
                    <div className="stat">
                        <h2>200+</h2>
                        <p>Happy Customers</p>
                    </div>
                    <div className="stat">
                        <h2>10k+</h2>
                        <p>Properties for Clients</p>
                    </div>
                    <div className="stat">
                        <h2>16+</h2>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
            <div className="banner-image"></div>
        </div>
    );
};

export default Banner;
