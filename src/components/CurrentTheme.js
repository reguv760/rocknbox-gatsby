import React from 'react';
import HairMetalTheme from './../assets/img/hair-metal_theme.jpg';

//current theme::::
const CurrentTheme = () => {
  return (
    <section id="CurrentTheme" className="currentTheme">
      <h2>Upcoming Theme: 80's Hair Metal!</h2>

      <img src={HairMetalTheme} alt="80s hair metal"/>
    </section>
  );
};

export default CurrentTheme;
