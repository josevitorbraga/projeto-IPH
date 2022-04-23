import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Text } from './styles';

import img from '../../../../assets/cabecas.svg';

const TopHomeContent = () => {
  return (
    <Container>
      <Text>
        <p className="title">Instituto de Potencialidades Humanas</p>
        <p className="text">
          O Instituto de Potencialidades Humanas é uma empresa que objetiva
          trazer à tona as potencialidades do indivíduo, através da
          identificação de sua estrutura de pensamento, visando promover o
          empoderamento de suas capacidades, dinamizando o alcance de seus
          objetivos pessoais.
        </p>
        <div className="mt-16">
          <Link className="button" to="/programas">
            Descubra agora
          </Link>
        </div>
      </Text>
      <Image>
        <img src={img} alt="Potencialidades" />
      </Image>
    </Container>
  );
};

export default TopHomeContent;
