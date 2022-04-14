import styled from 'styled-components';

export const Container = styled.div`
  background-color: #21253c;
  color: #fff;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: ${props => (props.type === 'header' ? 'center' : 'normal')};
  justify-content: space-evenly;
  border-bottom: 1px solid #deebf4;
  height: ${props => (props.type === 'header' ? '163px' : '240px')};
  padding-top: ${props => (props.type === 'header' ? '0' : '50px')};
  .column {
    & div + div {
      margin-top: 40px;
    }
  }
`;

export const Segment = styled.div`
  display: ${props => (props.type === 'menu' ? 'flex' : 'block')};
  flex-direction: column;
  .title {
    margin: 0 0 10px 0;
    font-size: 20px;
    font-weight: bold;
  }

  .socials {
    margin-right: 10px;
  }

  // Só funciona quando o type é 'menu'
  .mb {
    margin-bottom: 10px;
    color: #f1f9ff;
    font-weight: 300;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b3f56;
  font-size: 14px;
  padding: 10px;
`;
