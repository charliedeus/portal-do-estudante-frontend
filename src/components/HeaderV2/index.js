import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Profile } from './styles';
import logo from '~/assets/images/agerba.png';

import Notifications from '~/components/Notifications';

export default function HeaderV2() {
  const profile = useSelector(state => state.user.profile);
  const { solicitation } = useSelector(state => state.solicitation);

  console.tron.log(profile.name);
  // console.tron.log(solicitation.approved );

  return (
    <>
      <Container>
        <div className="container is-fluid is-widescreen">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a className="navbar-item" href="/dashboard">
                <img
                  src={logo}
                  alt=""
                  role="presentation"
                  width="150"
                  height="28"
                />
              </a>

              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                href="/"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">Aprovado?</div>
              <div className="navbar-item">
                <Notifications />
              </div>
              <div className="navbar-item">
                <Profile>
                  <div>
                    <strong>{profile.name}</strong>
                    <a href="/profile">Meu perfil</a>
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
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </>
  );
}
