import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 482px;

  .mt-16 {
    margin-top: 16px;
  }

  .title {
    font-size: 48px;
    font-weight: bold;
    color: #21253c;
    margin: 0;
  }
  .text {
    color: #707070;
  }
  a.button {
    text-decoration: none;
    padding: 10px 50px;
    border: 1px solid #444961;
    border-radius: 22px;
    color: #444961;

    &:hover {
      background-color: #444961;
      color: #fff;
    }
  }
`;

export const Image = styled.div`
  img {
    height: 316px;
    width: 408px;
  }
`;
