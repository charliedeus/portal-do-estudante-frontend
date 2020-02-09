import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background: blue !important;

    input {
      background: rgba(137, 196, 244, 1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: blue;
      margin: 0 0 10px;

      &::placeholder {
        color: blue;
      }
    }

    span {
      color: white;
      font-weight: bold;
      margin: 0 0 10px;
      align-self: flex-start;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #369eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#369eff')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      font-weight: bold;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
