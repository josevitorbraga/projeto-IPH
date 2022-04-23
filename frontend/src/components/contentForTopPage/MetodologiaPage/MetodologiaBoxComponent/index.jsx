import React from 'react';

import { Container, Content, Image } from './styles';

import img from '../../../../assets/metodologia-box.png';

const MetodologiaBoxComponent = () => {
  return (
    <Container>
      <Content>
        <Image>
          <div className="mask"></div>
          <img src={img} alt="Sobre o instituto" />
        </Image>
        <h1>Metodologia</h1>
      </Content>
    </Container>
  );
};

export default MetodologiaBoxComponent;
