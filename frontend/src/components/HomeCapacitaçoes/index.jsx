import React from 'react';

import { Container } from './styles';

const HomeCapacitações = ({ bgImage, page, children }) => {
  return (
    <Container bg={bgImage}>
      <p>{children}</p>
    </Container>
  );
};

export default HomeCapacitações;
