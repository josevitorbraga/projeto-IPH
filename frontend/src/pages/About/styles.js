import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  .about-img img {
    width: 100%;
    position: relative;
    bottom: 55px;
    z-index: -1;
  }
`;

export const Content = styled.div`
  margin: 0 17%;

  p.small-title {
    font-size: 21px;
    font-style: italic;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: #a1a1a1;
    margin-bottom: 5px;
  }

  p.normal-text {
    font-size: 22px;
    font-weight: semi-bold;
    letter-spacing: 1.5px;
    margin: 40px 0;
  }

  h1.title {
    font-size: 62px;
    font-weight: 900;
    margin-top: 0;
  }
`;

export const OurJob = styled.div`
  .quote {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 70px;
    margin-bottom: 100px;

    .img img {
      width: 439px;
      height: 430px;
    }
    .text {
      font-size: 42px;
      font-weight: 900;
      letter-spacing: 7px;
    }
  }

  .img-container img {
    width: 100%;
  }
`;

export const Offer = styled.div`
  margin: 200px 0;
`;

export const Team = styled.div`
  display: flex;

  .text {
    width: 600px;
  }

  .img {
    position: absolute;
    right: 180px;
    img {
      height: 896px;
    }
  }
`;
