import { Router } from 'express';
import getWeather from '../services/getWeather';

const generalRouter = Router();

generalRouter.get("/weather/:woeid", async (request, response) => {
  let { woeid } = request.params;

  const weatherForecast = await getWeather({
    woeid,
    date: new Date(),
  });

  if(!weatherForecast) {
    return null;
  }

  return response.status(200).json(weatherForecast.data[0]);
});


export default generalRouter;