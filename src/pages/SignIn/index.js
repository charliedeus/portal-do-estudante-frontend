import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/images/agerba.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string().required('O password é obrigatório!'),
});

export default function SignIn() {
  function handlSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Portal Estudantil" width="200" />

      <Form schema={schema} onSubmit={handlSubmit} autoComplete="off">
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          autofocus="true"
        />
        <Input name="password" type="password" placeholder="Seu password" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
