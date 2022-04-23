import React from 'react';

import { Container, Image, Text } from './styles';

import img from '../../../../assets/metodologia-formas.svg';

const MetodologiaContentComponent = () => {
  return (
    <Container>
      <Image>
        <img src={img} alt="Metodologia" />
      </Image>
      <Text>
        <p>
          "Cada indivíduo possui um estilo cognitivo único que o diferencia de
          todos os outros."{' '}
        </p>
      </Text>
    </Container>
  );
};

export default MetodologiaContentComponent;
