// App.tsx
import React, { useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutUs from './components/About/AboutUs';
import InvestmentSectors from './components/Sectors/InvestmentSectors';
import InvestmentProcess from './components/Process/InvestmentProcess';
import ContactUs from './components/Contact/ContactUs';

interface FullPageApi {
  moveTo: (section: number, slide?: number) => void;
}

const App: React.FC = () => {
  // Usamos una ref para almacenar fullpageApi
  const fullpageApiRef = useRef<FullPageApi | null>(null);

  return (
    <>
      {/* Header fuera de fullPage pero recibe fullpageApi desde la ref */}
      <Header fullpageApi={fullpageApiRef.current ?? undefined} />
      <ReactFullpage
        navigation
        anchors={['home', 'about', 'sectors', 'process', 'contact']}
        sectionsColor={['#282c34', '#ff5f45', '#0798ec', '#fc6c7c', '#282828']}
        credits={{ enabled: false }}
        render={({ fullpageApi }) => {
          // Almacenamos la instancia en la ref
          fullpageApiRef.current = fullpageApi;
          return (
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
          );
        }}
      />
    </>
  );
};

export default App;
