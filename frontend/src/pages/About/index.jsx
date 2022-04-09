import React from 'react';

import { Container, Content, OurJob, Offer, Team } from './styles';
import SobrePrograma from '../../components/SobrePrograma';

import institutoImg from '../../assets/instituto-img.png';
import formas from '../../assets/sobre-formas.svg';
import img1 from '../../assets/sobre-1.png';
import img2 from '../../assets/sobre-2.png';
import daniela from '../../assets/sobre-daniela.png';

const About = () => {
  return (
    <Container>
      <div className="about-img">
        <img src={institutoImg} alt="Instituto de Potencialidades Humanas" />
      </div>
      <Content>
        <OurJob>
          <p className="small-title">Sobre o instituto</p>
          <h1 className="title">O que fazemos</h1>
          <div className="quote">
            <div className="img">
              <img src={formas} alt="Formas" />
            </div>
            <div className="text">
              "Cada indivíduo <br />
              possui um estilo <br />
              cognitivo único <br />
              que o diferencia <br />
              de todos os outros."
            </div>
          </div>
          <p className="normal-text">
            O Instituto oferece aos clientes o desenvolvimento de habilidades
            cognitivas e emocionais para melhorar a qualidade dos resultados na
            vida, através de ferramentas e técnicas que identificam e elevam o
            potencial de aprendizagem de uma pessoa. A forma como o indivíduo
            pensa e estrutura seu pensamento influencia a forma como ele aprende
            e também as interações sociais, pessoais e profissionais, visto que
            todas as ações são fruto do processo do pensamento, pois é através
            dele que se resolve as diversas situações e problemas cotidianos.
          </p>
          <div className="img-container">
            <img src={img1} alt="Happy Student" />
          </div>
          <p className="normal-text">
            Cada indivíduo possui um estilo cognitivo único que o diferencia de
            todos os outros. Este estilo traz suas preferências de pensamento,
            ou seja, o método de processamento de informações, não focado em
            decisões específicas, mas no processo mental que é usado para tomar
            decisões.
          </p>
          <div className="img-container">
            <img src={img2} alt="Thinking Student" />
          </div>
          <p className="normal-text">
            A forma como o indivíduo processa a informação faz com que utilize
            preferencialmente algumas áreas cerebrais um detrimento de outras,
            embora todas estejam disponíveis, trazendo o que chamamos de
            preferências cerebrais. A equipe do Instituto é treinada no Método
            Feuerstein e oferece serviços e formações locais, assim como
            treinamentos internacionais. Todas as Formações de Feurestein
            oferecidas no Instituto de Potencialidades Humanas são certificadas
            pelo Instituto Feurstein (Israel).
          </p>
        </OurJob>
        <Offer>
          <h1 className="title">O que oferecemos</h1>
          <SobrePrograma>
            <h1 className="component-title">Programa Acesse</h1>
            Este PROGRAMA tem como objetivo identificar como a pessoa processa a
            informação, sua propensão para aprendizagem e áreas cerebrais
            preferenciais.
          </SobrePrograma>
          <SobrePrograma>
            <h1 className="component-title">Programa Acelere</h1>
            Este PROGRAMA é elaborado de forma personalizada e é composto por
            uma série de desafios cognitivos que exercitam o cérebro favorecendo
            o raciocínio, a memória, o planejamento, foco, criatividade e
            agilidade mental, considerando a demanda individual.
          </SobrePrograma>
          <SobrePrograma>
            <h1 className="component-title">Cursos</h1>O Instituto oferece
            Cursos de Aprofundamento, Workshops e Palestras sobre o tema
            ‘Estrutura do Pensamento’.
          </SobrePrograma>
          <SobrePrograma>
            <h1 className="component-title">Formações internacionais</h1>O
            Instituto oferece regularmente Formações certificadas em todos os
            níveis da metodologia Feuerstein, entre elas: AMC (Avaliação da
            Modificabilidade Cognitiva) e PEI (Programa de Enriquecimento
            Instrumental).
          </SobrePrograma>
        </Offer>
        <Team>
          <div className="text">
            <p className="small-title">Nossa equipe</p>
            <h1 className="title">Daniela Zamboni</h1>
            <p className="normal-text">
              Pesquisadora das Ciências Cognitivas e do Potencial Humano.
              Profissional licenciada para formação e aplicação da Avaliação da
              Modificabilidade Cognitiva e Group Assessor pelo Feuerstein –
              Bassou International Training Academy (Israel), tendo realizado
              sua formação pelo Feuerstein Institute na Holanda, Itália,
              República Tcheca e Estados Unidos. Trainer Internacional do
              Institute Feuerstein, formou profissionais nos EUA, Itália e
              Paraguai, sendo licenciada para aplicá-la e formar profissionais
              no Brasil. Profissional com Formação no Programa de Enriquecimento
              Instrumental (níveis 1, 2 e 3) pelo Feuerstein Institute-Jerusalém
              (Israel). Certificada pela Being Human Talent Develpment Center
              (New York) para utilização do Neethling Brain Instruments.
              Pós-graduada em Psicopedagogia Clínica e Institucional e graduada
              em Administração de Empresas pela Universidade Católica Dom Bosco
              (UCDB).
            </p>
          </div>
          <div className="img">
            <img src={daniela} alt="Daniela Zamboni" />
          </div>
        </Team>
      </Content>
    </Container>
  );
};

export default About;
