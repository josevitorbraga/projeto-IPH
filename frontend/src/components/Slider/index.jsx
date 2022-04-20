import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './styles';

import habilidadesImg from '../../assets/altas-habilidades.svg';
import superdotacao from '../../assets/superdotacao.svg';
import pessoal from '../../assets/pessoal.svg';
import educacao from '../../assets/educacao.svg';
import profissional from '../../assets/profissional.svg';
import placeholder from '../../assets/placeholder.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

const Slider = ({ secondSlider }) => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        //spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {secondSlider ? (
          <>
            <SwiperSlide>
              <img src={placeholder} alt='placeholder' />
              <p>Acesse</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={placeholder} alt='placeholder' />
              <p>Acesse</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={placeholder} alt='placeholder' />
              <p>Acesse</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={placeholder} alt='placeholder' />
              <p>Acesse</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={placeholder} alt='placeholder' />
              <p>Acesse</p>
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide>
              <div className='sliderBox'>
                <img src={habilidadesImg} alt='Habilidades' />
                <p>Altas Habilidades</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderBox'>
                <img src={superdotacao} alt='Superdotação' />
                <p>Superdotação</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderBox'>
                <img src={pessoal} alt='Pessoal' />
                <p>Pessoal</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderBox'>
                <img src={educacao} alt='Educação' />
                <p>Educação</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='sliderBox'>
                <img src={profissional} alt='Profissional' />
                <p>Escolha Profissional</p>
              </div>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </Container>
  );
};

export default Slider;
