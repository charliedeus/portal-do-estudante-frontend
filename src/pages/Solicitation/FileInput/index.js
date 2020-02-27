import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

export default function FileInput() {
  const { defaultValue, registerField } = useField('documento');

  const [file, setFile] = useState(defaultValue && defaultValue.id);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'document_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);
    data.append('document_type_id', 1);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    console.log(id, url);

    setFile(id);
  }

  return (
    <>
      <Container>
        <label htmlFor="documento">
          {/* <img
            src={
              preview ||
              'https://api.adorable.io/avatars/50/charles@adorable.io.png'
            }
            alt="Documento"
          /> */}
          <input
            type="file"
            id="documento"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
        </label>
      </Container>
    </>
  );
}
