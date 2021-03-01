import { Request, Response } from 'express';
import getWeather from "../services/getWeather";


class WOEIDController {
   async execute(request: Request, response: Response) {
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
  }
}

export { WOEIDController };