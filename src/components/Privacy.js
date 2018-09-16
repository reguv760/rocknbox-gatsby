import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
  margin: 0;
  padding: 0;
`;

const Privacy = () => {
  return (
    <TextContainer>
      <div className="footerCol">
        <h3>Privacy Policy</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ut
          eveniet vel possimus velit unde nesciunt dolore natus fugiat magnam
          est nobis quam tempora, reiciendis atque sunt vitae sit adipisci.
        </p>
      </div>
    </TextContainer>
  );
};

export default Privacy;
