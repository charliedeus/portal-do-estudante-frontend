import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cart-ager-cad.herokuapp.com',
  // baseURL: 'http://10.71.0.62:3333',
});

export default api;
