import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider';
import { Container, Programas, About, SliderComponent } from './styles';

import cabeca from '../../assets/cabecas.svg';
import segment from '../../assets/segment.png';

const Home = () => {
  const [programa, setPrograma] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPrograma(!programa);
    }, 5000);
  }, [programa]);

  return (
    <Container>
      {programa ? (
        <Programas className="fade" updater={programa}>
          <div className="content ">
            <p className="header">
              Programa
              <br />
              <span>Acesse</span>
            </p>
            <p className="sub-header">Acesse seu potencial</p>
            <p className="description">
              Este PROGRAMA tem como objetivo identificar como a pessoa processa
              a informação, sua propensão para aprendizagem e áreas cerebrais
              preferenciais.
            </p>
            <Link to="#programa-acesse">Saiba Como</Link>
          </div>
        </Programas>
      ) : (
        <Programas className="fade" updater={programa}>
          <div className="content">
            <p className="header">
              Programa
              <br />
              <span>Acelere</span>
            </p>
            <p className="sub-header">Acelere suas conquistas</p>
            <p className="description">
              Este PROGRAMA é elaborado de forma personalizada e é composto por
              uma série de desafios cognitivos que exercitam o cérebro
              favorecendo o raciocínio, a memória, o planejamento, foco,
              criatividade e agilidade mental, considerando a demanda
              individual.
            </p>
            <Link to="#programa-acelere">Saiba Como</Link>
          </div>
        </Programas>
      )}
      <About>
        <div className="content">
          <p className="header">
            <span>Instituto de Potencialidades Humanas</span>
          </p>
          <p className="description">
            O Instituto de Potencialidades Humanas é uma empresa que objetiva
            trazer à tona as potencialidades do indivíduo, através da
            identificação de sua estrutura de pensamento, visando promover o
            empoderamento de suas capacidades, dinamizando o alcance de seus
            objetivos pessoais.
          </p>
          <Link to="#sobre">Ler tudo</Link>
        </div>

        <div className="image-container">
          <img src={cabeca} alt="Ilustrativo do insituto" />
        </div>
      </About>
      <SliderComponent>
        <h1>Áreas de Atuação</h1>
        <Slider />
      </SliderComponent>
      <About>
        <div className="content">
          <p className="header">
            <span>Conheça nossos programas</span>
          </p>
          <p className="description">
            O IPH desenvolveu PROGRAMAS específicos visando identificar,
            desenvolver ou tornar mais eficiente o potencial do indivíduo, tendo
            como base principal o Método Feuerstein. Suas ferramentas e técnicas
            identificam e melhoram o potencial de aprendizagem de uma pessoa.
          </p>
          <Link to="#sobre">Ler tudo</Link>
        </div>

        <div className="image-container bigger relative">
          <img src={segment} alt="Ilustrativo do insituto" />
        </div>
      </About>
    </Container>
  );
};

export default Home;
