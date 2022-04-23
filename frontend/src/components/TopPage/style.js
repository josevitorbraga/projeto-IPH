import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${props => props.backGround};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: -1;

  .right {
    width: 100%;
    background-color: ${props => props.primary};
  }

  .left {
    width: 65%;
    background-color: ${props => props.secondary};
  }
`;

export const Box = styled.div`
  width: 100%;
  max-width: 1424px;
  height: 500px;
  background-color: #fff;
  position: relative;
  top: -20px;
  margin: 0 5%;
  border-radius: 10px;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Decoration = styled.div`
  position: absolute;
  z-index: 2;
  top: 478px;
  left: 187px;
  width: 120px;
  height: 5px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
