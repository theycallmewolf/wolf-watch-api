import { Router } from "express";
import { CityController } from '../controllers/CityController';
import { WOEIDController } from '../controllers/WOEIDController';

const router = Router();

const cityController = new CityController();
const woeIDController = new WOEIDController();

router.get('/weather/:woeid', woeIDController.execute);
router.get('/location/:city', cityController.execute);


export default router;
