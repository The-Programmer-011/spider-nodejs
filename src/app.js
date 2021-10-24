import "dotenv/config";
import express from "express";
import routes from "./routes";

class App {
  
  getApp() {

    const app = express();

    app.use('', routes);
    
    return app;
  }

}

export const app = new App().getApp();