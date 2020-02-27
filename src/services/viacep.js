import axios from 'axios';

const apiViaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws',
  // baseURL: 'http://10.71.0.62:3333',
});

export default apiViaCep;
