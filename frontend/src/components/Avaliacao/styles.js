import styled from 'styled-components';
import bg from '../../assets/avaliacao-bg.svg';

export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #21253c;

  p {
    text-align: center;
    font-size: 34px;
    margin-top: 57px;
  }

  .button {
    height: 63px;
    color: #fff;
    border-radius: 32px;
    background-color: #21253c;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 50px;
    margin-bottom: 57px;

    cursor: pointer;

    &:hover {
      background-color: #4d5163;
    }
  }
`;
