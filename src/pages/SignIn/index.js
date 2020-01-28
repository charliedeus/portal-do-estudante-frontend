import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/agerba.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Portal Estudantil" width="200" />

      <form>
        <input
          type="email"
          placeholder="Seu e-mail"
          autofocus="true"
          required
        />
        <input type="password" name="" id="" placeholder="Seu password" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
