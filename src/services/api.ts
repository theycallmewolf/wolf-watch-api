import axios from 'axios';

export const weatherApi = axios.create({
  baseURL: 'https://www.metaweather.com/api',
});
