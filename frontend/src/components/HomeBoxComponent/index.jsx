import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Text } from './styles';

import img from '../../assets/home-box-cerebro.svg';

const HomeBoxComponent = () => {
  return (
    <Container>
      <Text>
        <p className='title'>Conheça nossos programas</p>
        <p className='text'>
          O IPH desenvolveu PROGRAMAS específicos visando identificar,
          desenvolver ou tornar mais eficiente o potencial do indivíduo, tendo
          como base principal o Método Feuerstein. Suas ferramentas e técnicas
          identificam e melhoram o potencial de aprendizagem de uma pessoa.
        </p>
        <div className='mt-16'>
          <Link className='button' to='/programas'>
            Saiba mais
          </Link>
        </div>
      </Text>
      <Image>
        <img src={img} alt='Programas' />
      </Image>
    </Container>
  );
};

export default HomeBoxComponent;
