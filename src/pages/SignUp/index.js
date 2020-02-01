import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Scope } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/images/agerba.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres!')
    .required('O password é obrigatório!'),
  // address: Yup.object().shape({
  street: Yup.string().required('O endereço completo é obrigatório!'),
  district: Yup.string().required('O bairro é obrigatório!'),
  city: Yup.string().required('A cidade é obrigatória!'),
  uf: Yup.string().required('UF é obrigtório'),
  ibge: Yup.number()
    .integer()
    .positive(),
  zip_code: Yup.number()
    .integer()
    .positive(),
  // }),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({
    name,
    email,
    password,
    street,
    district,
    city,
    uf,
    ibge,
    zip_code,
  }) {
    dispatch(
      signUpRequest(
        name,
        email,
        password,
        street,
        district,
        city,
        uf,
        ibge,
        zip_code
      )
    );
  }

  return (
    <>
      <img src={logo} alt="Portal Estudantil" width="200" />

      <Form schema={schema} onSubmit={handleSubmit} autoComplete="off">
        <Input name="name" placeholder="Nome completo" autoFocus />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Seu password" />

        <hr />

        {/* <Scope path="address"> */}
        <Input name="street" placeholder="Rua e número" />
        <Input name="district" placeholder="Bairro" />
        <Input name="city" placeholder="Município" />
        <Input name="uf" value="BA" disabled />
        <Input name="zip_code" type="number" placeholder="CEP" />
        <Input name="ibge" type="number" placeholder="Código do IBGE" />
        {/* </Scope> */}

        <button type="submit">Criar conta</button>
        <Link to="/">Já possuo login</Link>
      </Form>
    </>
  );
}
