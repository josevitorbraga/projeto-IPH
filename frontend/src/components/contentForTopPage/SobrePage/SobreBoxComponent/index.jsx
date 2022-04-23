import React from 'react';

import { Container, Content, Image } from './styles';

import img from '../../../../assets/sobre-box.png';

const SobreBoxComponent = () => {
  return (
    <Container>
      <Content>
        <Image>
          <div className="mask"></div>
          <img src={img} alt="Sobre o instituto" />
        </Image>
        <h1>Sobre o instituto</h1>
      </Content>
    </Container>
  );
};

export default SobreBoxComponent;
