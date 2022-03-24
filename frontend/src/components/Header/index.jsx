import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Container, Segment } from './styles';
import logo from '../../assets/header-logo.svg';
import { FaUser, FaAngleDown } from 'react-icons/fa';

const Header = () => {
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    dropdownRef.current.classList.toggle('hidden');
  };

  return (
    <Container>
      <Segment className="logo">
        <img src={logo} alt="Instituto de Potencialidades Humanas" />
      </Segment>

      <Segment className="menu">
        <Link to="/">Home</Link>

        <div
          onMouseEnter={() => handleDropdown()}
          onMouseLeave={() => handleDropdown()}
          className="dropdown"
        >
          Sobre o instituto <FaAngleDown />
          <div ref={dropdownRef} className="items hidden">
            <Link to="/">Metodologia</Link>
            <Link to="/">Programas</Link>
            <Link to="/">Áreas de atuação</Link>
            <Link to="/">Sobre o instituto</Link>
          </div>
        </div>

        <Link to="/">Notícias</Link>

        <Link to="/">Contato</Link>
      </Segment>

      <Segment className="user">
        <Link to="/">
          <FaUser />
        </Link>
        <Link to="/" className="button">
          Cursos
        </Link>
        PR
      </Segment>
    </Container>
  );
};

export default Header;
