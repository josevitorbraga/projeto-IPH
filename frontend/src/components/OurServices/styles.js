import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px 170px;
  background-color: #5bd178;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  padding-top: 60px;
  background-color: #5bd178;
  color: #fff;

  h1 {
    margin: 0 50px;
    font-size: 48px;
  }

  .dash {
    display: flex;
    height: 5px;
    flex: 1;
    background-color: #fff;
  }
`;

export const Card = styled.div`
  display: flex;
  height: 330px;
  border-radius: 10px;

  max-width: 1243px;

  margin-bottom: 50px;

  overflow: hidden;

  @keyframes imgAnimate {
    0% {
      right: -29%;
    }
    100% {
      right: 0;
    }
  }

  @keyframes contentAnimate {
    0% {
      flex: 0;
    }
    100% {
      flex: 1;
    }
  }

  @keyframes textAnimate {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .image {
    position: relative;
    animation: imgAnimate 1s ease-in-out;
    width: 530px;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    animation: contentAnimate 1s ease-in-out;
    width: 480px;
    padding: 70px;
    display: flex;
    z-index: 0;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    border-radius: 0 10px 10px 0;

    background-color: #fff;

    .title {
      font-size: 34px;
      font-weight: bold;
      color: #21253c;
      margin-bottom: 15px;

      animation: textAnimate 1.5s ease-in-out;
    }
    .text {
      animation: textAnimate 1.5s ease-in-out;

      font-size: 20px;
      color: #707070;
    }
    .button {
      animation: textAnimate 1.5s ease-in-out;

      display: flex;
      justify-content: center;

      width: 100px;
      padding: 10px 20px;
      margin-top: 20px;
      color: #444961;
      border: 1px solid #444961;
      border-radius: 22px;
    }
  }
`;
