import React from 'react';
import OfficeBuilding from './../assets/officeBuilding2.jpg';

//who we are page:::
const About = () => {
  return (
    <section id="About" className="content">
      <h2>Who are we?</h2>

      <div className="about__container">
        <div className="about__container-col">
          <img src={OfficeBuilding} alt="rocknbox office space"/>
        </div>
        <div className="about__container-col">        
          <p>Maecenas gravida velit nibh, quis gravida dui laoreet quis. Donec turpis risus, ultricies rhoncus odio sed, sollicitudin vehicula leo. Cras dui velit, cursus vel turpis et, placerat interdum erat. Mauris ultricies eleifend dui, at porttitor est. Morbi consequat semper interdum. Praesent at vulputate velit. Donec quis leo urna. Phasellus dictum ex neque, vitae eleifend risus finibus et. Phasellus vitae odio vel libero tincidunt efficitur. Mauris mollis neque non justo bibendum volutpat.</p>
          <p>Nulla semper, enim venenatis pretium pretium, velit tellus porta dolor, sit amet feugiat libero turpis ac tortor. Proin blandit vitae quam mollis pulvinar. Aliquam gravida tempor massa vitae congue. Cras et cursus neque, vel porttitor est. Curabitur non condimentum nisi, sollicitudin semper ex. Cras nec eleifend dui, id varius orci. Maecenas sit amet feugiat ex. Suspendisse eu ligula augue. Maecenas sit amet massa ultrices, tempus sem quis, imperdiet ipsum. In sem augue, ultricies elementum orci at, cursus ullamcorper orci. Curabitur pretium, sem quis fringilla ultrices, est ante scelerisque dolor, id eleifend velit diam et libero. Suspendisse nec lectus eros. Vivamus tempor sem non porttitor finibus. Mauris nec ex ultrices, tempor magna quis, feugiat sapien. Quisque auctor egestas dui, elementum eleifend nisl dapibus vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
      </div>
    </section>
  );
};

export default About;
