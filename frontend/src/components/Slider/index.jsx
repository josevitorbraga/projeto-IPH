import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import habilidadesImg from '../../assets/altas-habilidades.svg';
import superdotacao from '../../assets/superdotacao.svg';
import pessoal from '../../assets/pessoal.svg';
import educacao from '../../assets/educacao.svg';
import profissional from '../../assets/profissional.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper';

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, FreeMode]}
        className="mySwiper"
      >
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
      </Swiper>
    </>
  );
};

export default Slider;
