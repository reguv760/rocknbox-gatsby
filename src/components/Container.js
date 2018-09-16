import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent';

const ContainerCSS = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 0 auto;
  min-height: 140rem;
  background-color: #2bd1fc;
`;

const Container = () => {
  return (
    <ContainerCSS>
      <MainContent />
    </ContainerCSS>
  );
};

export default Container;
