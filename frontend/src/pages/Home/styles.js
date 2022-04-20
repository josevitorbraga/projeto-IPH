import styled from 'styled-components';

import background from '../../assets/slider-bg.png';

export const Container = styled.div`
  .slider-wrapper {
    background-image: url(${background});
    background-color: #21253c;
    background-repeat: no-repeat;
    background-size: cover;
    height: 595px;
  }

  .slider-title {
    display: flex;
    justify-content: center;

    padding: 70px 0 80px 0;

    color: #fff;
    font-size: 48px;
    font-weight: bold;
  }

  .capacitacoes {
    display: flex;
    justify-content: center;
    align-items: center;
    .group {
      display: flex;
    }
  }

  .content {
    width: 400px;
    margin-right: 50px;
    .content-title {
      font-size: 48px;
      font-weight: bold;
      color: #21253c;
      margin: 10px 0;
    }
    .content-text {
      color: #707070;
    }
  }
`;
