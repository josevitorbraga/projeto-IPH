import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 352px;
  background-color: #353235;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 286px;
  justify-content: space-evenly;
  align-items: center;

  h5 {
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 800;
  }
  a {
    color: #fff;
    text-decoration: none;
    letter-spacing: 3px;
    font-size: 14px;

    &:visited {
      color: inherit;
    }
  }

  p {
    letter-spacing: 3px;
    font-size: 12px;
  }

  .no-spacing {
    letter-spacing: 0px;
  }

  .mg-tp {
    margin-top: 15px;
  }

  .about {
    width: 251px;
    height: 181px;
    .logo {
      display: flex;
      align-items: center;

      & div + div {
        margin-left: 5px;
      }
    }

    p {
      color: #fff;
      font-weight: 300;
      font-size: 12px;
      letter-spacing: 3px;
    }
  }

  .institucional {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 157px;

    .links {
      display: flex;
      flex-direction: column;

      a {
        margin-top: 5px;
      }
    }
  }

  .contato {
    width: 351px;
    p {
      span {
        font-size: 14px;
      }
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 23px;
  background-color: #fff;
  color: #707070;
  border-radius: 50%;
`;

export const Copyright = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 70px;
  background-color: #21253c;
  color: #fff;
  font-size: 14px;
`;
