import { Router } from "express";
import SpiderController from "../controller/spider.controller";

const routes = new Router();
const spiderController = new SpiderController();
  
routes.get("/search/:search/limit/:limit", spiderController.search);

export default routes;