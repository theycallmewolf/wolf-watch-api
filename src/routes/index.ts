import { Router } from "express";
import getWeather from '../services/getWeather';
import { CityController } from '../controllers/CityController';

const routes = Router();

const cityController = new CityController();

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

routes.get('/location/:city', cityController.execute);

export default routes;
