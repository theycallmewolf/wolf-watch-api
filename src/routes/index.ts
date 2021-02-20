import { Router } from "express";
import generalRouter from './general.routes'

const routes = Router();

routes.use("/", generalRouter);

export default routes;
