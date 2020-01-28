import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/images/agerba.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Portal Estudantil" width="200" />

      <form>
        <input placeholder="Nome completo" autoComplete="off" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" name="" id="" placeholder="Seu password" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possuo login</Link>
      </form>
    </>
  );
}
