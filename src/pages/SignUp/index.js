import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Scope } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import apiViaCep from '~/services/viacep';

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
  address: Yup.object().shape({
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
  }),
});

export default function SignUp() {
  const inputRef = useRef(null);
  let streetRef = useRef(null);
  let districtRef = useRef(null);
  let cityRef = useRef(null);
  let ufRef = useRef(null);
  let ibgeRef = useRef(null);

  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, address }) {
    dispatch(signUpRequest(name, email, password, address));
  }

  async function handleChange(e) {
    try {
      const response = await apiViaCep.get(`${inputRef.current.value}/json`);

      const { logradouro, bairro, localidade, uf, ibge } = response.data;

      streetRef.current.value = logradouro;
      districtRef.current.value = bairro;
      cityRef.current.value = localidade;
      ufRef.current.value = uf;
      ibgeRef.current.value = ibge;
    } catch (error) {
      toast.error('Não foi possível localizar CEP informado.');
    }
  }

  useEffect(() => {
    console.log(inputRef.current.name);
  }, [inputRef]);

  return (
    <>
      <img src={logo} alt="Portal Estudantil" width="200" />

      <Form schema={schema} onSubmit={handleSubmit} autoComplete="false">
        <Input name="name" placeholder="Nome completo" autoFocus />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Seu password" />

        <hr />

        <Scope path="address">
          <input
            name="zip_code"
            type="number"
            placeholder="CEP (somente números)"
            onBlur={handleChange}
            ref={inputRef}
          />
          <input name="street" placeholder="Rua e número" ref={streetRef} />
          <input name="district" placeholder="Bairro" ref={districtRef} />
          <input name="city" placeholder="Município" ref={cityRef} />
          <input name="uf" value="BA" ref={ufRef} disabled />
          <input
            name="ibge"
            type="number"
            placeholder="Código do IBGE"
            ref={ibgeRef}
          />
        </Scope>

        <button type="submit">Criar conta</button>
        <Link to="/">Já possuo login</Link>
      </Form>
    </>
  );
}
