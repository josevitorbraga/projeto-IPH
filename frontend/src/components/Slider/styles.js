import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 60px;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .sliderBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background-color: #b2b1c220;
    border: 1px solid #eff1f5;
    border-radius: 34px;
    width: 278px;
    height: 278px;
    margin-left: 16%;
    p {
      margin-bottom: 0;
    }
  }
`;
