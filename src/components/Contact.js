import React from 'react';
import ContactForm from './ContactForm';

//who we are page:::
const Contact = () => {
  return (
    <section id="Contact" className="content">
      <div className="contact__grid">
        <div className="contact__grid-col">
          <h2>Contact Us!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            veritatis eius nihil possimus vel reprehenderit officia dignissimos,
            maiores quod necessitatibus non quae, commodi, ad consequatur unde
            illum eum minus quibusdam?
          </p>

          <ContactForm />

        </div>
        <div className="contact__grid-col">
          <h2>Customer Support</h2>
          <ul className="customerSupport__container">
            <li>
              <h4>Phone: <a href="tel:+1-800-111-1111">1-800-111-1111</a></h4>
            </li>
            <li>
              <h4>Email: <a href="mailto:customersupport@rocknbox.com" target="_blank">customersupport@rocknbox.com</a>
              </h4>

              <h4>Orders: <a href="mailto:orders@rocknbox.com" target="_blank">orders@rocknbox.com</a>
              </h4>
            </li>
          </ul>

          <h2>Legal</h2>
          <p className="legal">
            Sed consequat, erat a scelerisque laoreet, risus ante suscipit
            massa, quis laoreet ex leo non odio. Praesent tristique erat id arcu
            vestibulum sodales. Curabitur sit amet posuere ligula.
          </p>
          <p className="legal">
            Praesent velit sapien, lobortis quis lorem eget, luctus suscipit
            magna. Curabitur ante elit, bibendum sit amet fermentum et, mollis
            vitae lacus.
          </p>
          <p className="legal">
            Vivamus vestibulum mauris et felis rutrum, id condimentum dui
            dignissim. Morbi laoreet eget enim eu rutrum.
          </p>
          <p className="legal">
            Fusce vitae fringilla risus. Nunc condimentum libero ac ex auctor,
            consequat porttitor sem vestibulum. Phasellus sollicitudin congue
            tortor, eu interdum dui laoreet non.
          </p>
          <p className="legal">
            Mauris vitae libero at augue ultricies ullamcorper et eget lorem.
            Quisque sit amet magna nec quam imperdiet dictum. Proin maximus eget
            nibh ut vehicula.
          </p>
          <p className="legal">
            Sed lobortis, ipsum nec convallis rutrum, mi nisl sollicitudin
            lectus, a faucibus orci mi a dolor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
