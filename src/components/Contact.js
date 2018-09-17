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
        </div>
      </div>
    </section>
  );
};

export default Contact;
