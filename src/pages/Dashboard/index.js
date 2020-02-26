import React from 'react';
import api from '~/services/api';

import { Container } from './styles';

export default function Dashboard() {
  api.get('users');

  return (
    <>
      <Container>
        <div class="container is-widescreen">
          <div class="notification">
            This container is <strong>fullwidth</strong> <em>until</em> the{' '}
            <code>$widescreen</code> breakpoint.
          </div>
        </div>
      </Container>
    </>
  );
}
