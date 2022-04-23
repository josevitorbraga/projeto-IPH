import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;

  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  h1 {
    z-index: 2;
    position: relative;
    margin: 0 0 10px 100px;
    font-size: 48px;
  }
`;

export const Image = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;

  .mask {
    position: absolute;
    z-index: 1;
    background: linear-gradient(
      180deg,
      rgba(218, 208, 173, 0) 32%,
      rgba(33, 37, 60, 1) 100%
    );
    width: 100%;
    height: 100%;
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
