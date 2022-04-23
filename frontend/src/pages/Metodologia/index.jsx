import React from 'react';

import TopPage from '../../components/TopPage';
import DecoratedTitle from '../../components/DecoratedTitle';
import Avaliacao from '../../components/Avaliacao';

import MetodologiaBoxContent from '../../components/contentForTopPage/MetodologiaPage/MetodologiaBoxComponent';
import MetodologiaContentComponent from '../../components/contentForTopPage/MetodologiaPage/MetodologiaContentComponent';

import { Text, Card, CardContainer } from './styles';

import cardImg1 from '../../assets/metodologia-card-1.png';
import cardImg2 from '../../assets/metodologia-card-2.png';

const Metodologia = () => {
  return (
    <>
      <TopPage
        ContentComponent={MetodologiaContentComponent}
        BoxComponent={MetodologiaBoxContent}
        bgColor="#5BD178"
        secondaryColor="#F1F9FF"
      />
      <DecoratedTitle pgName="Metodologia" color="#59C9F4">
        Ferramentas
      </DecoratedTitle>
      <Text>
        O Instituto utiliza como base metodológica as Teorias da
        Modificabilidade Cognitiva Estrutural e Experiência de Aprendizagem
        Mediada desenvolvidas por Reuven Feuerstein e os estudos da Neurociência
        desenvolvidas por Paul Torrance, Ned Herrmann e Kobus Neethling na área
        da identificação e desenvolvimento do Comportamento Criativo.
      </Text>
      <Text strong>
        Entre as ferramentas utilizadas pelo Instituto no desenvolvimento de
        seus programas estão:
      </Text>
      <CardContainer>
        <Card>
          <div className="image">
            <img src={cardImg1} alt="AMC" />
          </div>
          <div className="content">
            <h2 className="title smaller">
              Avaliação da Modificabilidade Cognitiva (AMC) e Programa de
              Enriquecimento Instrumental (PEI)
            </h2>
            O método Feuerstein ensina a habilidade vitalmente importante de
            aprender a aprender. Nossa técnica educacional exclusiva combina
            instrumentos especificamente desenvolvidos e, a Experiência de
            Aprendizagem Mediada para identificar o processamento da informação
            e aumentar a propensão de aprendizagem do indivíduo, desenvolvendo
            habilidades que desencadeiam os potenciais ilimitados de cada
            pessoa.
          </div>
        </Card>
        <Card>
          <div className="image">
            <img src={cardImg2} alt="NBI" />
          </div>
          <div className="content">
            <h2 className="title">
              Perfil Cerebral Neethling Brain Instruments
            </h2>
            Conjunto de ferramentas que identificam as áreas cerebrais
            preferenciais do indivíduo. O Perfil Cerebral permite que as pessoas
            entendam melhor como são seus estilos de pensamento e elucida sua
            forma preferida de comunicar-se, comportar-se, aprender, etc.
            Auxilia também a identificar as competências que o indivíduo pode
            e/ou precisa desenvolver para atingir seus objetivos pessoais e
            profissionais, especialmente potenciais ainda pouco explorados.
          </div>
        </Card>
      </CardContainer>
      <Avaliacao />
    </>
  );
};

export default Metodologia;
