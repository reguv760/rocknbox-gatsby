import React from 'react';
import Link from 'gatsby-link';
import logo from './../assets/svg/rocknbox-logo.svg';
import Login from './Login';

//smooth scroll implementation:::
if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/" exact>
          <img src={logo} alt="rocknbox logo" />
        </Link>
      </div>

      <Login />

      <ul className="menu">
        <li>          
          <a href="#products">products</a>
        </li>
        <li>
          <a href="#FAQ">FAQ</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
