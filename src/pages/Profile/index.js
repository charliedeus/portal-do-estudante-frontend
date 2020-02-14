import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import { Container } from './styles';

import AvatarInput from './AvatarInput';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Container>
        <Form autoComplete="off" initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />

          <Input name="name" placeholder="Nome completo" />
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

          <hr />

          <button type="submit">Atualizar perfil</button>
        </Form>
        <button type="submit" onClick={handleSignOut}>
          Sair
        </button>
      </Container>
    </>
  );
}
