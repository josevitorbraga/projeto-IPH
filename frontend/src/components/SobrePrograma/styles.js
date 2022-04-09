import styled from 'styled-components';

export const Container = styled.div`
  margin: 75px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 310px;
  height: 286px;
  border: 1px solid #c8c8c8;
`;

export const TextContainer = styled.div`
  width: 580px;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1.5px;

  h1.component-title {
    font-size: 22px;
    font-weight: 800;

    margin-bottom: 55px;
  }
`;
