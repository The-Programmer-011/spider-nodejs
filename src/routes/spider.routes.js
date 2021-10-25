import { Router } from "express";
import SpiderController from "../controller/spider.controller";

const routes = new Router();
const spiderController = new SpiderController();
  
routes.get("/search/:search/pages/:pages", spiderController.search);

export default routes;