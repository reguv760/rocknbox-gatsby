import React from 'react';
import styled from 'styled-components';

const ContainerCSS = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 0 auto;
  min-height: 140rem;
  background-color: #2bd1fc;
`;

//this is how you define a ReactJS Component
//where external content can be loaded into:::
const Container = ({children}) => {
  return (
    <ContainerCSS>
      {children}
    </ContainerCSS>
  );
};

export default Container;
