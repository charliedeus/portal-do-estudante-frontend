import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <>
      <Container>
        <Form autoComplete="off" initialData={profile} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome completo" autoFocus />
          <Input name="email" type="email" placeholder="Seu e-mail" />

          <hr />

          <Input
            name="oldPassword"
            type="password"
            placeholder="Seu password atual"
          />
          <Input name="password" type="password" placeholder="Novo password" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirme novo password"
          />

          <button type="submit">Atualizar perfil</button>
        </Form>
        <button type="submit">Sair do sistema</button>
      </Container>
    </>
  );
}
