import React from 'react';
import TopPage from '../../components/TopPage';
import HomeBoxComponent from '../../components/HomeBoxComponent';
import TopHomeContent from '../../components/TopHomeContent';
import Slider from '../../components/Slider';
import HomeCapacitações from '../../components/HomeCapacitaçoes';

import capacit1 from '../../assets/home-capacit1.png';
import capacit2 from '../../assets/home-capacit2.png';
import capacit3 from '../../assets/home-capacit3.png';

import { Container } from './styles';
import Newsletter from '../../components/Newsletter';

const Home = () => {
  return (
    <Container>
      <TopPage
        bgColor='#FACD4A'
        BoxComponent={HomeBoxComponent}
        ContentComponent={TopHomeContent}
      />
      <div className='slider-wrapper'>
        <div className='slider-title'>Áreas de atuação</div>
        <Slider />
      </div>
      <div className='capacitacoes'>
        <div className='content'>
          <p className='content-title'>Veja nossas Capacitações e Formações</p>
          <p className='content-text'>
            O IPH desenvolveu possuí os melhores métodos para sua equipe.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit
            leo vel turpis semper, vitae consectetur risus.
          </p>
        </div>
        <div className='group'>
          <HomeCapacitações bgImage={capacit1}>Acesse</HomeCapacitações>
          <HomeCapacitações bgImage={capacit2}>
            Estrutura do Pensamento
          </HomeCapacitações>
          <HomeCapacitações bgImage={capacit3}>Circuito</HomeCapacitações>
        </div>
      </div>
      <Newsletter />
    </Container>
  );
};

export default Home;
