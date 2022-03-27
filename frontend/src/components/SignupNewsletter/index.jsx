import React from 'react';

import { Form, Container, ImageContainer } from './styles';

const SignupNewsletter = () => {
  return (
    <Container>
      <ImageContainer>
        <div className="placeholder-img"></div>
      </ImageContainer>
      <Form>
        <p className="header">
          <span>Newsletter</span>
          <br />
          Cadastre seu E-mail e receba conteúdos
          <br /> exclusivos em primeira mão.
        </p>
        <input placeholder="Nome" type="text" name="name" id="name" />
        <input placeholder="E-mail" type="text" name="email" id="email" />
        <button>Cadastrar</button>
      </Form>
    </Container>
  );
};

export default SignupNewsletter;
