import React from 'react';

//pages
import WhatRock from './WhatsRocknbox.js';
import Products from './Products.js';
import About from './About.js';
import Contact from './Contact.js';
import Faq from './Faq.js';


const MainContent = () => {
  return (
    <div className="container">
    
      <section className="currentTheme" />

      <WhatRock />
      <Products />
      <Faq />
      <About />
      <Contact />

    </div>
  );
};

export default MainContent;
