import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const TextContainer = styled.div`
  margin: 1rem;
  padding: 0;
`;

const SocialMedia = () => {
  return (
    <TextContainer>
      <div className="footerCol">
        <h3>SocialMedia: #rocknbox</h3>
        <ul className="socialMedia">
          <li>
            <a href="http://facebook.com/rock-n-box" target="_blank">
              <SocialIcon
                url="http://facebook.com/"
                color="#efefef"
                style={{ height: 25, width: 25 }}
              />
              <p>Follow us!</p>
            </a>
          </li>
          <li>
            <a href="http://twitter.com/rock-n-box" target="_blank">
              <SocialIcon

                url="http://twitter.com/"
                color="#efefef"
                style={{ height: 25, width: 25 }}
              />
              <p>Send a Tweet!</p>
            </a>
          </li>
          <li>
            <a href="http://instagram.com/rock-n-box" target="_blank">
              <SocialIcon
                url="http://instagram.com"
                color="#efefef"
                style={{ height: 25, width: 25 }}
              />
              <p>Share your Stuff!</p>            
            </a>
          </li>
        </ul>
      </div>
    </TextContainer>
  );
};

export default SocialMedia;
