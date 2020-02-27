import React, { useState, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';

import { Container, StyledLink, Alert } from './styles';

export default function Dashboard() {
  const [viewAlert, setViewAlert] = useState(false);
  const [solicitations] = useState([
    // {
    //   id: 1,
    //   approved: false,
    //   documents: [],
    // },
  ]);

  const profile = useSelector(state => state.user.profile);

  function handleToggleViewAlert() {
    setViewAlert(!viewAlert);
  }

  useEffect(() => {
    if (solicitations.length !== 0) {
      handleToggleViewAlert();
      console.log(viewAlert);
      console.log(solicitations.length);
    }
  }, []);

  return (
    <>
      <Container>
        <Alert className="aviso notification is-info" viewAlert={viewAlert}>
          <h2 className="has-text-centered">
            Olá, {profile.name.split(' ').slice(0, 1)}, você ainda não solicitou
            seu cartão de estudante!
          </h2>
          <p className="has-text-justified">Não abra mão de seu benefício!</p>
          <p className="has-text-justified">
            Clique no botão abaixo e solicite o seu cartão de estudante, podendo
            assim usufruir do seu direito de ir e vir gratuitamente.
          </p>

          <StyledLink
            to="/solicitation"
            className="button is-outlined is-fullwidth is-rounded"
          >
            Solicitar
          </StyledLink>
        </Alert>
      </Container>
    </>
  );
}
