import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TimelineLite, Power3 } from 'gsap';

import { Container, Profile } from './styles';
import 'rbx/index.css';
import { Navbar } from 'rbx';
import logo from '~/assets/images/agerba.svg';

import Notifications from '~/components/Notifications';

export default function Header() {
  let headerRef = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    tl.from(Container, {
      y: 16,
      opacity: 0,
      duration: 0.8,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <Container>
      <Navbar transparent>
        <Navbar.Brand>
          <Navbar.Item href="/dashboard">
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
          <Navbar.Segment align="end">
            <Navbar.Item>
              <Notifications />
            </Navbar.Item>
            <Navbar.Item href="/profile">
              <Profile>
                <div>
                  <strong>{profile.name}</strong>
                  Meu perfil
                </div>
                <img
                  src={
                    profile.avatar
                      ? profile.avatar.url
                      : 'https://api.adorable.io/avatars/70/abott@adorable.png'
                  }
                  alt={profile.name}
                />
              </Profile>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    </Container>
  );
}
