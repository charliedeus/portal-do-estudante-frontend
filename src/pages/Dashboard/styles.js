import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap');

  min-height: 90vh;
  width: 100%;

  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .aviso {
    max-width: 500px;

    h2 {
      font-size: 2rem;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.3em;
    }

    button {
      font-size: 1.5rem;
      margin-top: 30px;
      margin-bottom: 15px;
    }
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const Alert = styled.div`
  ${props =>
    props.viewAlert &&
    css`
      display: none;
    `}
`;
