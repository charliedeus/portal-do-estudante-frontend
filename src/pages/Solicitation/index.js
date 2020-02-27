import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, useField } from '@rocketseat/unform';
import api from '~/services/api';
import { toast } from 'react-toastify';

import { solicitationRequest } from '~/store/modules/solicitation/actions';

import { Container } from './styles';

export default function Solicitation() {
  const [documents, setDocuments] = useState([]);

  const profile = useSelector(state => state.user.profile);

  const { defaultValue, registerField } = useField('documento');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const ref = useRef();

  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(solicitationRequest({ approved: false, documents: documents }));
  }

  async function handleFile(e) {
    try {
      const data = new FormData();

      data.append('file', e.target.files[0]);
      data.append(
        'document_type_id',
        e.target.getAttribute('document_type_id')
      );

      const response = await api.post('files', data);

      const { id, url } = response.data;

      setDocuments([
        ...documents,
        {
          id,
          url,
        },
      ]);

      toast.success('Arquivo enviado com sucesso!');
    } catch (error) {
      toast.error('Encontramos problemas ao processar o arquivo.');
    }
  }

  return (
    <>
      <Container>
        <h1 className="has-text-centered">Carteira de Estudante</h1>

        <h1 className="has-text-centered">Formulário de Solicitação</h1>

        <div className="notification is-warning">
          <strong>{profile.name.split(' ').slice(0, 1)}</strong>, informe nos
          campos abaixo, os arquivos obrigatórios para formalizar a solicitação,{' '}
          <strong>de acordo com cada tipo de documento</strong>:
        </div>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="documento">
            <strong>RG do Estudante:</strong>
            <br />
            <input
              type="file"
              id="identidade"
              data-file={file}
              onChange={handleFile}
              ref={ref}
              document_type_id="1"
            />
          </label>

          <hr />

          <label htmlFor="documento">
            <strong>Comprovante de Matrícula:</strong>
            <br />
            <input
              type="file"
              id="matricula"
              data-file={file}
              onChange={handleFile}
              ref={ref}
              document_type_id="2"
            />
          </label>

          <hr />

          <label htmlFor="documento">
            <strong>Comprovante de Endereço:</strong>
            <br />
            <input
              type="file"
              id="matricula"
              data-file={file}
              onChange={handleFile}
              ref={ref}
              document_type_id="3"
            />
          </label>

          <hr />
          <button type="submit">Solicitar</button>
        </Form>
        <button type="submit">Sair</button>
      </Container>
    </>
  );
}
