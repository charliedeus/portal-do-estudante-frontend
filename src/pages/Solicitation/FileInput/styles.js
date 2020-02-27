import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #333;
    }

    input {
      /* display: none; */
    }
  }
`;
