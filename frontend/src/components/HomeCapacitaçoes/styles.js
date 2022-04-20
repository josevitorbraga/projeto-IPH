import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  transition: ease-in;

  font-size: 19px;
  font-weight: bold;
  color: #fff;

  height: 500px;
  width: 180px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(112, 112, 112, 0.5) 66%
    ),
    url(${props => props.bg});

  p {
    text-align: center;
  }

  &:hover {
    font-size: 25px;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(112, 112, 112, 0.6) 66%
      ),
      url(${props => props.bg});
  }
`;
