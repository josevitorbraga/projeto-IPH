import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

import { Container, Content, Copyright, Socials } from './styles';
import logo from '../../assets/header-logo.svg';

const Footer = () => {
  return (
    <Container>
      <Content>
        <div className="about">
          <div className="logo">
            <img src={logo} alt="Instituto Potencialidades Humanas" />
            <Socials>
              <FaInstagram />
            </Socials>
            <Socials>
              <FaFacebook />
            </Socials>
            <Socials>
              <FaWhatsapp />
            </Socials>
          </div>
          <p>
            Nosso trabalho, no Instituto de Potencialidades Humanas, tem como
            base as teorias da Modificabilidade Cognitiva Estrutural e da
            Experiência de Aprendizagem.
          </p>
        </div>

        <div className="institucional">
          <h5>Institucional</h5>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="#about">Sobre o instituto</Link>
            <Link to="#metodologias">Metodologia</Link>
            <Link to="#programas">Programas</Link>
            <Link to="news">Notícias</Link>
          </div>
        </div>

        <div className="educacional">
          <h5>Educacional</h5>
          <Link to="/cursos">Cursos</Link>

          <div className="mg-tp">
            <h5>Horários</h5>
            <p>
              Seg-Sex
              <br />
              08:00 - 18:00
            </p>
          </div>
        </div>

        <div className="contato">
          <h5>Contato</h5>
          <p>
            <span>(67) 3253-9990</span> <br />
            <span>(67) 9806-8317</span> <br />
            institutodepotencialidades@gmail.com
          </p>

          <div className="mg-tp">
            <h5>Endereço</h5>
            <p className="no-spacing">
              R. Alagoas, 396 - sala 1805 - Jardim dos Estados, <br />
              Campo Grande - MS, 79020-120
            </p>
          </div>
        </div>
      </Content>
      <Copyright>
        Copyright © 2022 Instituto de Potencialidades Humanas | Powered by
        Instituto de Potencialidades Humanas
      </Copyright>
    </Container>
  );
};

export default Footer;
