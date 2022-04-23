import React from 'react';
import { useInView } from 'react-hook-inview';

import { Card, Container, Title } from './styles';

import services1 from '../../assets/services1.png';
import services2 from '../../assets/services2.png';
import services3 from '../../assets/services3.png';
import services4 from '../../assets/services4.png';
//import DecoratedTitle from '../DecoratedTitle';

const OurServices = () => {
  const [cardRef1, is1Visible] = useInView({
    threshold: 1,
    unobserveOnEnter: true,
  });

  const [cardRef2, is2Visible] = useInView({
    threshold: 1,
    unobserveOnEnter: true,
  });

  const [cardRef3, is3Visible] = useInView({
    threshold: 1,
    unobserveOnEnter: true,
  });

  const [cardRef4, is4Visible] = useInView({
    threshold: 1,
    unobserveOnEnter: true,
  });

  return (
    <>
      <Title>
        <div className="dash"></div>
        <h1>Nossos Serviços</h1>
        <div className="dash"></div>
      </Title>

      {/* <DecoratedTitle color="#5bd178" pgName="Sobre o Instituto">
        Nossos serviços
      </DecoratedTitle> */}

      <Container>
        <Card ref={cardRef1} className={is1Visible ? 'animate' : 'initial'}>
          <div className="image">
            <img src={services1} alt="Programa Acesse" />
          </div>
          <div className="content">
            <div className="title">Programa Acesse</div>
            <div className="text">
              Este PROGRAMA tem como objetivo identificar como a pessoa processa
              a informação, sua propensão para aprendizagem e áreas cerebrais
              preferenciais.
            </div>
            <div className="button">Saiba mais</div>
          </div>
        </Card>
        <Card ref={cardRef2} className={is2Visible ? 'animate' : 'initial'}>
          <div className="image">
            <img src={services2} alt="Programa Acelere" />
          </div>
          <div className="content">
            <div className="title">Programa Acelere</div>
            <div className="text">
              Este PROGRAMA é elaborado de forma personalizada e é composto por
              uma série de desafios cognitivos que exercitam o cérebro
              favorecendo o raciocínio, a memória, o planejamento, foco,
              criatividade e agilidade mental, considerando a demanda
              individual.
            </div>
            <div className="button">Saiba mais</div>
          </div>
        </Card>
        <Card ref={cardRef3} className={is3Visible ? 'animate' : 'initial'}>
          <div className="image">
            <img src={services3} alt="Cursos" />
          </div>
          <div className="content">
            <div className="title">Cursos</div>
            <div className="text">
              O Instituto oferece Cursos de Aprofundamento, Workshops e
              Palestras sobre o tema ‘Estrutura do Pensamento’.
            </div>
            <div className="button">Saiba mais</div>
          </div>
        </Card>
        <Card ref={cardRef4} className={is4Visible ? 'animate' : 'initial'}>
          <div className="image">
            <img
              src={services4}
              alt="Formações Internacionais
"
            />
          </div>
          <div className="content">
            <div className="title">Formações Internacionais</div>
            <div className="text">
              O Instituto oferece regularmente Formações certificadas em todos
              os níveis da metodologia Feuerstein, entre elas: AMC (Avaliação da
              Modificabilidade Cognitiva) e PEI (Programa de Enriquecimento
              Instrumental).
            </div>
            <div className="button">Saiba mais</div>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default OurServices;
