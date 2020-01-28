import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/images/agerba.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Portal Estudantil" width="200" />

      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          placeholder="Nome completo"
          autoComplete="off"
          autoFocus
        />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          name=""
          id=""
          placeholder="Seu password"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possuo login</Link>
      </Form>
    </>
  );
}
