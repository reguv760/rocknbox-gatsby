import React from 'react';
import Link from "gatsby-link"
import logo from './../assets/svg/rocknbox-logo.svg';
import Login from './Login';

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="rocknbox logo" />
        </Link>
      </div>

      <Login />

      <ul className="menu">
        <li>          
          <Link to="/#products">products</Link>
        </li>
        <li>
          <Link to="/#FAQ">FAQ</Link>
        </li>
        <li>
          <Link to="/#About">About</Link>
        </li>
        <li>
          <Link to="/#Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
