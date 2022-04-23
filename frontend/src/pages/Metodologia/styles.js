import styled from 'styled-components';

export const Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #707070;
  margin: 60px 170px;
  font-weight: ${props => (props.strong ? 'bold' : 'normal')};
`;

export const CardContainer = styled.div`
  margin: 60px 170px;
  display: flex;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  color: #21253c;
  background-color: #5bd178;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  width: 424px;

  .image {
    img {
      width: 100%;
      height: 272px;
    }
  }
  .content {
    padding: 33px;
  }
  .title {
    font-size: 31px;
    font-weight: 900;
  }
  .smaller {
    font-size: 25px;
  }
`;
