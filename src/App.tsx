// App.tsx
import './index.css';
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutUs from './components/About/AboutUs';
import InvestmentSectors from './components/Sectors/InvestmentSectors';
import InvestmentProcess from './components/Process/InvestmentProcess';
import ContactUs from './components/Contact/ContactUs';


const App: React.FC = () => {
  return (
    <ReactFullpage
      navigation
      anchors={['home', 'about', 'sectors', 'process', 'contact']}
      credits={{ enabled: false }}
      render={({ fullpageApi }) => {
        return (
          <>
            {/* Header renderizado dentro del render callback para recibir siempre fullpageApi */}
            <Header fullpageApi={fullpageApi} />
            <ReactFullpage.Wrapper>
              <div className="section" data-anchor="home">
                <Banner />
              </div>
              <div className="section" data-anchor="about">
                <AboutUs />
              </div>
              <div className="section" data-anchor="sectors">
                <InvestmentSectors />
              </div>
              <div className="section" data-anchor="process">
                <InvestmentProcess />
              </div>
              <div className="section" data-anchor="contact">
                <ContactUs />
              </div>
            </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  );
};

export default App;
