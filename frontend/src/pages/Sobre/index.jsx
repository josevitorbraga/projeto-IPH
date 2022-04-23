import React from 'react';

import TopPage from '../../components/TopPage';
import SobreBoxComponent from '../../components/contentForTopPage/SobrePage/SobreBoxComponent';
import SobreContentComponent from '../../components/contentForTopPage/SobrePage/SobreContentComponent';
import DecoratedTitle from '../../components/DecoratedTitle';
import OurServices from '../../components/OurServices';
import Newsletter from '../../components/Newsletter';

import { Container, Text, FullWidth } from './styles';

import quemSomosImg from '../../assets/sobre-qmsomos.png';
import daniela from '../../assets/sobre-daniela.png';
import IPHTopics from '../../components/IPHTopics';

const Sobre = () => {
  return (
    <>
      <TopPage
        secondaryColor="#F1F9FF"
        bgColor="#5BD178"
        BoxComponent={SobreBoxComponent}
        ContentComponent={SobreContentComponent}
      />
      <DecoratedTitle pgName="Sobre o instituto" color="#5BD178">
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
      <FullWidth>
        <img src={quemSomosImg} alt="Quem somos" />
      </FullWidth>
      <Container>
        <Text>
          Cada indivíduo possui um estilo cognitivo único que o diferencia de
          todos os outros. Este estilo traz suas preferências de pensamento, ou
          seja, o método de processamento de informações, não focado em decisões
          específicas, mas no processo mental que é usado para tomar decisões.{' '}
        </Text>
      </Container>
      <Container>
        <Text>
          A forma como o indivíduo processa a informação faz com que utilize
          preferencialmente algumas áreas cerebrais um detrimento de outras,
          embora todas estejam disponíveis, trazendo o que chamamos de
          preferências cerebrais. A equipe do Instituto é treinada no Método
          Feuerstein e oferece serviços e formações locais, assim como
          treinamentos internacionais. Todas as Formações de Feurestein
          oferecidas no Instituto de Potencialidades Humanas são certificadas
          pelo Instituto Feurstein (Israel).
        </Text>
      </Container>
      <OurServices />
      <DecoratedTitle pgName="Nossa Equipe" color="#5BD178">
        Daniela Zamboni
      </DecoratedTitle>
      <Container limit>
        <Text className="adjustSize">
          Pesquisadora das Ciências Cognitivas e do Potencial Humano.
          Profissional licenciada para formação e aplicação da Avaliação da
          Modificabilidade Cognitiva e Group Assessor pelo Feuerstein – Bassou
          International Training Academy (Israel), tendo realizado sua formação
          pelo Feuerstein Institute na Holanda, Itália, República Tcheca e
          Estados Unidos. Trainer Internacional do Institute Feuerstein, formou
          profissionais nos EUA, Itália e Paraguai, sendo licenciada para
          aplicá-la e formar profissionais no Brasil. Profissional com Formação
          no Programa de Enriquecimento Instrumental (níveis 1, 2 e 3) pelo
          Feuerstein Institute-Jerusalém (Israel). Certificada pela Being Human
          Talent Develpment Center (New York) para utilização do Neethling Brain
          Instruments. Pós-graduada em Psicopedagogia Clínica e Institucional e
          graduada em Administração de Empresas pela Universidade Católica Dom
          Bosco (UCDB).
        </Text>
        <div className="equipe">
          <img src={daniela} alt="Daniela Zamboni" />
        </div>
      </Container>
      <IPHTopics />
      <Newsletter color="#FACD4A" />
    </>
  );
};

export default Sobre;
