import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
`;

export const View = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 470px;
  width: 720px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  .current-text {
    animation: textFade 1s ease-in;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;

    img {
      margin-right: 10px;
      height: 30px;
    }
  }

  .controller {
    display: flex;
    margin-bottom: 30px;

    #controller-${props => props.control} {
      background-color: #5bd178;
    }

    .topic-select {
      height: 10px;
      width: 10px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
    }

    & div + div {
      margin-left: 10px;
    }
  }
`;

export const Selection = styled.div``;

export const Text = styled.div`
  @keyframes textFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: textFade 1s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  padding: 0 20px;

  .wrapper {
    width: 65%;
  }

  .subject {
    font-size: 24px;
    color: #707070;
  }

  .title {
    font-size: 48px;
    font-weight: bold;
    color: #21253c;
  }

  .text {
    font-size: 28px;
    color: #707070;
  }
`;
