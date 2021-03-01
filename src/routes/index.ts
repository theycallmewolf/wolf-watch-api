import { Router } from "express";
import { CityController } from '../controllers/CityController';
import { WOEIDController } from '../controllers/WOEIDController';

const routes = Router();

const cityController = new CityController();
const woeIDController = new WOEIDController();

routes.get('/weather/:woeid', woeIDController.execute);
routes.get('/location/:city', cityController.execute);


export default routes;
