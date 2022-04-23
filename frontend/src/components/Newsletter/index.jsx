import React from 'react';

import { Container, Input, Text } from './styles';

const Newsletter = ({ color }) => {
  return (
    <Container bg={color}>
      <Text>
        <h1>Newsletter</h1>
        <p>
          Cadastre seu E-mail e receba conteúdos exclusivos em primeira mão.
        </p>
      </Text>
      <Input>
        <input type="text" placeholder="E-mail" />
        <button>Cadastrar</button>
      </Input>
    </Container>
  );
};

export default Newsletter;
