import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import 'flag-icons';

import { Container, Segment } from './styles';
import logo from '../../assets/header-logo.svg';
import { FaAngleDown } from 'react-icons/fa';

const Header = () => {
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    dropdownRef.current.classList.toggle('hidden');
  };

  return (
    <Container>
      <Segment className="logo">
        <Link to="/">
          <img src={logo} alt="Instituto de Potencialidades Humanas" />
        </Link>
      </Segment>

      <Segment className="menu">
        <Link to="/sobre">Sobre o instituto</Link>

        <div
          onMouseEnter={() => handleDropdown()}
          onMouseLeave={() => handleDropdown()}
          className="dropdown"
        >
          Serviços <FaAngleDown />
          <div ref={dropdownRef} className="items hidden">
            <Link to="/metodologia">Metodologia</Link>
            <Link to="/programas">Programas</Link>
            <Link to="/atuacao">Áreas de atuação</Link>
          </div>
        </div>

        <Link to="/">Notícias</Link>

        <Link to="/">Contato</Link>
      </Segment>

      <Segment className="user">
        <Link to="/" className="button">
          Cursos
        </Link>
        <Link className="signIn" to="/">
          Entrar
        </Link>
        <span className="fi fi-br"></span>
      </Segment>
    </Container>
  );
};

export default Header;
