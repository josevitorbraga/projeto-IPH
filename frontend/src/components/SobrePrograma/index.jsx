import React from 'react';

import { Container, ImageContainer, TextContainer } from './styles';

const SobrePrograma = ({ image, children }) => {
  return (
    <Container>
      <ImageContainer>
        {image ? (
          <img src={image} alt="Instituto de Potencialidades Humanas" />
        ) : null}
      </ImageContainer>
      <TextContainer>{children}</TextContainer>
    </Container>
  );
};

export default SobrePrograma;
