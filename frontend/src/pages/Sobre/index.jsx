import React from 'react';

import TopPage from '../../components/TopPage';
import SobreBoxComponent from '../../components/SobreBoxComponent';
import SobreContentComponent from '../../components/SobreContentComponent';
import DecoratedTitle from '../../components/DecoratedTitle';

import { Container, Text } from './styles';

const Sobre = () => {
  return (
    <>
      <TopPage
        bgColor='#F1F9FF'
        BoxComponent={SobreBoxComponent}
        ContentComponent={SobreContentComponent}
      />
      <DecoratedTitle pgName='Sobre o instituto' color='#5BD178'>
        Quem somos
      </DecoratedTitle>
      <Container>
        <Text>
          O Instituto oferece aos clientes o desenvolvimento de habilidades
          cognitivas e emocionais para melhorar a qualidade dos resultados na
          vida, através de ferramentas e técnicas que identificam e elevam o
          potencial de aprendizagem de uma pessoa. A forma como o indivíduo
          pensa e estrutura seu pensamento influencia a forma como ele aprende e
          também as interações sociais, pessoais e profissionais, visto que
          todas as ações são fruto do processo do pensamento, pois é através
          dele que se resolve as diversas situações e problemas cotidianos.
        </Text>
      </Container>
    </>
  );
};

export default Sobre;
