import { Router } from 'express';
import getWeather from '../services/getWeather';
import getLocation from '../services/getLocation';

const weatherRouter = Router();

weatherRouter.get('/weather/:woeid', async (request, response) => {
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

weatherRouter.get('/location/:city', async (request, response) => {
  const { city } = request.params;
  
  const location = await getLocation({city});

  return response.status(200).json(location);
});


export default weatherRouter;