import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/images/agerba.svg';

export default function SignIn() {
  function handlSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Portal Estudantil" width="200" />

      <Form onSubmit={handlSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          autofocus="true"
          autoComplete="off"
          required
        />
        <Input
          name="password"
          type="password"
          name=""
          id=""
          placeholder="Seu password"
        />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
