import React from 'react';

import { Container, Content, Image } from './styles';

import img from '../../assets/sobre-content.svg';

const SobreContentComponent = () => {
  return (
    <Container>
      <Image>
        <img src={img} alt='Potencialidades' />
      </Image>
      <Content>
        <div className='text'>
          <p>
            Mapear as potencialidades do <br />
            indivíduo, através da <br />
            identificação de sua estrutura <br />
            de pensamento, visando <br />
            promover o empoderamento <br />
            de suas capacidades.
          </p>
        </div>
      </Content>
    </Container>
  );
};

export default SobreContentComponent;
