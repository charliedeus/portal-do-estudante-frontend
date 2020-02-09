import React from 'react';
import { Link } from 'react-router-dom';

import { Container, StyledLink, Profile } from './styles';
import 'rbx/index.css';
import { Navbar } from 'rbx';
import logo from '~/assets/images/agerba.png';

export default function Header() {
  return (
    <Container>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item href="/">
            <img
              src={logo}
              alt=""
              role="presentation"
              width="150"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item>
              <StyledLink to="/">DASHBOARD</StyledLink>
            </Navbar.Item>
          </Navbar.Segment>

          <Navbar.Segment align="end">
            <Navbar.Item>
              <Link to="/profile">
                <Profile>
                  <div>
                    <strong>Charles Loureiro de Deus</strong>
                    <StyledLink to="/profile">Meu perfil</StyledLink>
                  </div>
                  <img
                    src="https://api.adorable.io/avatars/70/abott@adorable.png"
                    alt="Charles Loureiro de Deus"
                  />
                </Profile>
              </Link>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </Container>
  );
}
