import { Router } from "express";
import getWeather from '../services/getWeather';
import getLocation from '../services/getLocation';
import getCurrentTime from '../services/getCurrentTime';

const routes = Router();

routes.get('/weather/:woeid', async (request, response) => {
  const { woeid } = request.params;
  
  const weatherForecast = await getWeather({
    woeid,
    date: new Date(),
  });

  if(!weatherForecast) { 
    response.status(404).json({
      type: 'error',
      message : 'not found',
    })
  }

  return response.status(200).json(weatherForecast.data[0]);
});

routes.get('/location/:city', async (request, response) => {
  const { city } = request.params;
  
  const location = await getLocation({city});
  
  const coordinates = location[0].latt_long.split(',');
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  const { time } = await getCurrentTime({latitude, longitude});

  const weatherForecast = await getWeather({
    woeid: location[0].woeid,
    date: new Date(),
  });

  if(!weatherForecast) { 
    response.status(404).json({
      type: 'error',
      message : 'not found',
    })
  }

  return response.status(200).json({
    location: location[0],
    time,
    weather: weatherForecast.data[0],
  });
});

export default routes;
