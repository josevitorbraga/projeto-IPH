import styled from 'styled-components';

export const Container = styled.div`
  height: 140px;
  background: #21253c;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  color: #fff;

  .user {
    color: #444961;
    align-items: center;
    .signIn {
      text-decoration: underline;
      text-underline-offset: 5px;
    }

    a {
      margin-right: 23px;
      color: #fff;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      width: 129px;
      color: inherit;
      border-radius: 22px;
      background-color: #5bd178;
      font-weight: bold;
    }
  }
`;

export const Segment = styled.div`
  display: flex;

  .dropdown {
    z-index: 1;
    margin-right: 40px;
    display: flex;
    align-items: center;

    cursor: pointer;

    &:hover {
      color: #5bd178;
    }

    svg {
      margin-left: 5px;
    }

    .items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      background-color: #21253c;
      top: 46px;
      font-weight: 200;
      padding: 20px;
      border-radius: 15px;

      a {
        margin: 0 0 7px 0;
      }
    }

    .hidden {
      position: absolute;
      visibility: hidden;
      display: none;
    }
  }

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #fff;
    margin-right: 55px;

    &:hover {
      color: #5bd178;
    }

    &&:visited {
      color: inherit;
    }
  }
`;
