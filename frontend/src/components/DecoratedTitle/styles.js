import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0 0 0;
  .pageName {
    color: #707070;
    font-size: 24px;
    margin-left: 170px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  font-size: 48px;
  color: #21253c;
  font-weight: bold;
  .firstLine {
    height: 5px;
    width: 140px;
    margin-right: 30px;
    background-color: ${props => props.color};
  }
  .lastLine {
    margin-left: 30px;
    flex: 1;
    height: 5px;
    background-color: ${props => props.color};
  }
  .titleContent {
  }
`;
