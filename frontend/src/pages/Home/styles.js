import styled from 'styled-components';

import programas1 from '../../assets/programas-background-1.png';
import programa2 from '../../assets/programa-background-2.png';

export const Container = styled.div`
  margin-top: 70px;
  .fade {
    animation: fadeInAnimation ease 5s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Programas = styled.div`
  display: flex;
  align-items: center;

  height: 688px;
  width: 100%;

  background-image: ${props =>
    props.updater === true ? `url(${programas1})` : `url(${programa2})`};
  background-repeat: no-repeat;
  background-size: cover;

  p {
    letter-spacing: 3px;
    margin-top: 0;
  }

  .content {
    width: 355px;
    margin-left: 15%;
    p.header {
      font-size: 39px;
      font-weight: 200;
      color: #21253c;

      span {
        font-weight: 900;
        font-size: 56px;
        line-height: 45px;
      }
    }

    p.sub-header {
      font-size: 20px;
      font-weight: 800;
      color: #707070;
    }

    p.description {
      font-size: 16px;
      font-weight: semi-bold;
      color: #707070;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      width: 138px;
      background-color: #5bd178;
      color: #fff;
      border-radius: 18px;
      font-size: 13px;
      text-decoration: none;

      &:visited {
        color: inherit;
      }
    }
  }
`;

export const About = styled.div`
  height: 688px;
  width: 100%;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 468px;
    margin-right: 30px;
    p.header {
      font-size: 39px;
      font-weight: 200;
      color: #21253c;

      span {
        font-weight: 900;
        font-size: 56px;
        line-height: 45px;
      }
    }

    p.sub-header {
      font-size: 20px;
      font-weight: 800;
      color: #707070;
    }

    p.description {
      font-size: 16px;
      font-weight: semi-bold;
      color: #707070;
      line-height: 28px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      width: 138px;
      background-color: #5bd178;
      color: #fff;
      border-radius: 18px;
      font-size: 13px;
      text-decoration: none;

      &:visited {
        color: inherit;
      }
    }
  }
  .image-container {
    img {
      height: 474px;
      width: 612px;
    }
  }

  .relative {
    position: relative;
    top: 40px;
  }

  .bigger {
    img {
      height: 614px;
      width: 744px;
    }
  }
`;

export const SliderComponent = styled.div`
  --swiper-navigation-size: 27px;

  height: 572px;
  background-color: #eff1f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p.header {
    margin-top: 0;
    font-size: 56px;
    font-weight: 800;
    color: #21253c;
    text-align: center;
  }

  .swiper {
    width: 1031px;
    height: 284px;
  }

  /* .swiper-slide {
    /* Center slide text vertically 
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
     flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    p {
      font-size: 16px;
      font-weight: semi-bold;
    }
  } */

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: none;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    height: 209px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #707070;
  }
`;
