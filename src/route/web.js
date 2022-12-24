import express from "express";
import homeController from "../controler/homeController";

const router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/about", (req, res) => {
    res.send("about");
  });

  app.use("/", router);
};

export default initWebRoute;
