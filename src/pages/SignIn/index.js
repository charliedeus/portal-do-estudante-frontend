import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import logo from '~/assets/images/agerba.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="AGERBA" width="210" />

      <form action="">
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Seu password" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta</Link>
      </form>
    </>
  );
}
