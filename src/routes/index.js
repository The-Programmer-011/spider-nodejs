import { Router } from "express";
import spider_routes from "./spider.routes"

const routes = new Router();

routes.use("/spider", spider_routes);

export default routes;
