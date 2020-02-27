import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    /* background: rgba(34, 49, 63, 1); */
    /* color: rgba(228, 241, 254, 0.8); /** Cor de todas as fontes */
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    /* background: rgba(34, 49, 63, 1); */
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    /* background: transparent; /* Para definir que o fundo é transparent */
  }

  body, input, button {
    /* font: 14px 'Roboto', sans-serif; */
  }

  a {
    text-decoration: none;
    background: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  /* .Toastify__toast-body {
    background: none;
  } */
`;
