import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #5bd178;
`;

export const Text = styled.div`
  width: 350px;
  color: #21253c;

  h1 {
    font-size: 48px;
    margin: 0;
  }
`;

export const Input = styled.div`
  input {
    width: 380px;
    height: 43px;
    background-color: inherit;
    border: 1px solid #21253c;
    border-radius: 20px;
    padding: 0 10px;
  }
  button {
    height: 43px;
    width: 140px;
    border-radius: 22px;
    border: 1px solid #21253c;
    background-color: #21253c;
    color: #fff;
    font-weight: bold;
    margin: 0 15px;
    cursor: pointer;
  }
`;
