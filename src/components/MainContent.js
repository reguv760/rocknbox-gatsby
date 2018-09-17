import React from 'react';

//pages
import CurrentTheme from './CurrentTheme';
import WhatRock from './WhatsRocknbox';
import Products from './Products';
import Faq from './Faq';
import About from './About';
import Contact from './Contact';
import Legal from './Legal';


const MainContent = () => {
  return (
    <div className="container">
    
      <CurrentTheme />

      <WhatRock />
      <Products />
      <Faq />
      <About />
      <Contact />
      <Legal />

    </div>
  );
};

export default MainContent;
