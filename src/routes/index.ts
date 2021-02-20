import { Router } from "express";
import weatherRouter from './weather.routes'

const routes = Router();

routes.use("/", weatherRouter);

export default routes;
