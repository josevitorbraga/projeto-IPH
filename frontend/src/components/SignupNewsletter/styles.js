import styled from 'styled-components';

export const Container = styled.div`
  height: 563px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 425px;
  height: 292px;
  background-color: #eff1f5;
  border: 1px solid #a8a8a8;
  margin-right: 45px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  .header {
    font-size: 16px;
    color: #707070;
    font-weight: 800;
    span {
      font-size: 56px;
      font-weight: 900;
      color: #21253c;
    }
  }

  input {
    height: 40px;
    width: 340px;
    border-radius: 20px;
    border: 1px solid #5bd178;
    padding: 0 20px;

    &::placeholder {
      color: #5bd178;
      opacity: 1;
      margin-left: 15px;
    }
  }

  & input + input {
    margin-top: 20px;
  }

  button {
    height: 36px;
    width: 138px;
    border-radius: 18px;
    background-color: #5bd178;
    border: 1px solid #43d7c2;
    margin-top: 20px;
    margin-left: 121px;
  }
`;
