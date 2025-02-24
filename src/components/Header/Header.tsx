// src/components/Header/Header.tsx
import React, { useEffect } from "react";
import "./Header.css";

interface FullPageApi {
    moveTo: (section: number, slide?: number) => void;
}

interface HeaderProps {
    fullpageApi?: FullPageApi;
}

const Header: React.FC<HeaderProps> = ({ fullpageApi }) => {
    useEffect(() => {
        console.log("fullpageApi in Header:", fullpageApi);
    }, [fullpageApi]);

    const handleNavClick = (
        sectionIndex: number,
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();
        if (fullpageApi) {
            fullpageApi.moveTo(sectionIndex);
        }
    };

    return (
        <header className="header">
            {/* Franja superior fija para el logo */}
            <div className="logo-container" onClick={() => fullpageApi?.moveTo(1)}>
                <img src="/logo.png" alt="Logo" className="logo-img" />
            </div>
            {/* Navbar con efecto glass sticky, centrado */}
            <nav className="navbar-glass">
                <ul className="navbar-menu">
                    <li>
                        <a href="#" onClick={(e) => handleNavClick(1, e)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => handleNavClick(2, e)}>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => handleNavClick(3, e)}>
                            Investment Sectors
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => handleNavClick(4, e)}>
                            Investment Process
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => handleNavClick(5, e)}>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
