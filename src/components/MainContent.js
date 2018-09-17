import React from 'react';

//pages
import CurrentTheme from './CurrentTheme';
import WhatRock from './WhatsRocknbox';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import Faq from './Faq';


const MainContent = () => {
  return (
    <div className="container">
    
      <CurrentTheme />

      <WhatRock />
      <Products />
      <Faq />
      <About />
      <Contact />

    </div>
  );
};

export default MainContent;
