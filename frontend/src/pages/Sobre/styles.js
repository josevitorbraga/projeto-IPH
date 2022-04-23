import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px 170px;
  display: flex;

  height: ${props => (props.limit ? '512px' : 'auto')};

  .adjustSize {
    width: 670px;
  }

  .equipe {
    position: relative;
    top: -184px;
    right: -84px;
  }
`;

export const FullWidth = styled.div`
  display: flex;
  //margin: 60px 170px;

  img {
    width: 100%;
  }
`;

export const Text = styled.div`
  font-size: 24px;
  color: #707070;
`;
