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
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {secondSlider ? (
          <>
            <SwiperSlide>
              <img src={placeholder} alt="placeholder" />
              <p>Acesse</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={placeholder} alt="placeholder" />
              <p>Acesse</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={placeholder} alt="placeholder" />
              <p>Acesse</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={placeholder} alt="placeholder" />
              <p>Acesse</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={placeholder} alt="placeholder" />
              <p>Acesse</p>
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide>
              <img src={habilidadesImg} alt="Habilidades" />
              <p>Altas Habilidades</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={superdotacao} alt="Superdotação" />
              <p>Superdotação</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={pessoal} alt="Pessoal" />
              <p>Pessoal</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={educacao} alt="Educação" />
              <p>Educação</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src={profissional} alt="Profissional" />
              <p>Escolha Profissional</p>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </Container>
  );
};

export default Slider;
