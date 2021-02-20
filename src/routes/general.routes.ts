import { Router } from 'express';
import getWeather from '../services/getWeather';

const generalRouter = Router();

generalRouter.get("/weather/:woeid", async (request, response) => {
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


export default generalRouter;