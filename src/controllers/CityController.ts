import { Request, Response} from 'express';
import { AppError } from '../errors/AppError'
import getCurrentTime from "../services/getCurrentTime";
import getLocation from "../services/getLocation";
import getWeather from "../services/getWeather";

class CityController {

  async execute (request : Request, response: Response) {
    const { city } = request.params;
    
    const location = await getLocation({city});

    if(location.length === 0) { throw new AppError('location not found') };
    
    const coordinates = location[0].latt_long.split(',');
    const latitude = coordinates[0];
    const longitude = coordinates[1];
    const { time } = await getCurrentTime({latitude, longitude});
  
    const weatherForecast = await getWeather({
      woeid: location[0].woeid,
      date: new Date(),
    });
  
    if(!weatherForecast) { throw new AppError('forecast not found') }
  
    return response.status(200).json({
      location: location[0],
      time,
      weather: weatherForecast.data[0],
    });
  }
}

export { CityController };