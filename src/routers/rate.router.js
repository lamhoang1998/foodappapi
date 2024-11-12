import express from "express";
import rateController from "../controllers/rate.controller.js";

const rateRouter = express.Router();

//send {userId , resId , amount} as request
rateRouter.post("/rating", rateController.rating);
rateRouter.get("/ratebyres/:id", rateController.rateByRes);
rateRouter.get("/ratebyuser/:id", rateController.rateByUser);

export default rateRouter;
