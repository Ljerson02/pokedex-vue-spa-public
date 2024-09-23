import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 6000,
  headers: { 'Content-Type': 'application/json' },
});

export default Axios;
