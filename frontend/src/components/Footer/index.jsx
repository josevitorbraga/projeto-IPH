import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

import { Container, Content, Segment, Bottom } from './styles';
import logo from '../../assets/header-logo.svg';

const Footer = () => {
  return (
    <Container>
      <Content type='header'>
        <div className='logo'>
          <img src={logo} alt='Instituto de Potencialidades Humanas' />
        </div>
        <div className='address'>
          <p>
            R. Alagoas, 396 - sala 1805 - Jardim dos Estados, Campo Grande - MS,
            79020-120
          </p>
        </div>
      </Content>
      <Content>
        <div className='column'>
          <Segment>
            <p className='title'>Horário</p>
            Seg-Sex <br />
            08:00 - 18:00
          </Segment>
          <Segment>
            <p className='title'>Redes Sociais</p>

            <a
              className='socials'
              href='https://www.instagram.com/institutodepotencialidades/'
            >
              <FaInstagram size={20} />
            </a>

            <a
              className='socials'
              href='https://api.whatsapp.com/send?1=pt_BR&phone=5567998068317'
            >
              <FaWhatsapp size={20} />
            </a>

            <a className='socials' href='https://pt-br.facebook.com/iphms'>
              <FaFacebook size={20} />
            </a>
          </Segment>
        </div>
        <Segment>
          <p className='title'>Contato</p>
          (67) 3253-9990 <br />
          (67) 9806-8317 <br />
          <a href='mailto:institutodepotencialidades@gmail.com'>
            institutodepotencialidades@gmail.com
          </a>
        </Segment>
        <Segment type='menu'>
          <p className='title'>Institucional</p>
          <Link className='mb' to='/sobre'>
            Sobre o instituto
          </Link>{' '}
          <br />
          <Link className='mb' to='/metodologia'>
            Metodologia
          </Link>{' '}
          <br />
          <Link className='mb' to='/programas'>
            Programas
          </Link>{' '}
          <br />
          <Link className='mb' to='/noticias'>
            Notícias
          </Link>{' '}
          <br />
          <Link className='mb' to='/contato'>
            Contato
          </Link>
        </Segment>
        <Segment>
          <p className='title'>Institucional</p>
          <Link to='/cursos'>Cursos</Link>
        </Segment>
      </Content>
      <Bottom>Powered by Dubblemkt</Bottom>
    </Container>
  );
};

export default Footer;
