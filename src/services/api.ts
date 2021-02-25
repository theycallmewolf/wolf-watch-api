import axios from 'axios';

export const weatherApi = axios.create({
  baseURL: 'https://www.metaweather.com/api',
});

export const timeApi = axios.create({
  baseURL: 'http://api.geonames.org',
});
