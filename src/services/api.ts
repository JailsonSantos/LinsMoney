import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://lins-money.vercel.app/api'
})
