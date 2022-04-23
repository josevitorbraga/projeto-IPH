import React from 'react';

import { Container, Content } from './styles';

const Avaliacao = () => {
  return (
    <Container>
      <Content>
        <p>
          Faça a sua avaliação e descubra <br />
          potenciais que talvez ainda não foram explorados
        </p>
        <div className="button">Quero fazer a avaliação</div>
      </Content>
    </Container>
  );
};

export default Avaliacao;
