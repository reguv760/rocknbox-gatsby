import React from 'react';
//import { Link } from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom'; //import Switch + Route functions:::
import styled from 'styled-components';
import Privacy from './Privacy';
import Return from './Return';
import SocialMedia from './SocialMedia';

const FooterCSS = styled.footer`
  min-height: 20rem;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterCSS>
      <div className="footer__grid">
        <div className="col col1">
          <Return />
        </div>
        <div className="col col2">
          <Privacy />
        </div>
        <div className="col col3">
          <SocialMedia />
        </div>
      </div>
    </FooterCSS>
  );
};
export default Footer;
