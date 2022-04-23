import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  top: -20px;
`;

export const Image = styled.div`
  img {
    position: relative;
    top: -1px;
    right: -5px;
    height: 535px;
  }
`;

export const Content = styled.div`
  //position: absolute;
  top: 140px;
  right: 0;
  display: flex;
  align-items: center;
  background-color: #5bd178;
  width: 670px;
  font-weight: bold;
  font-size: 48px;
  color: #21253c;

  .text {
    position: absolute;
    height: 1400px;
    width: 100%;
    background-color: #5bd178;
    display: flex;
    p {
      margin-top: 490px;
    }
  }
`;
