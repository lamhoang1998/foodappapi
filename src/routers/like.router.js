import express from "express";
import likeController from "../controllers/like.controller.js";

const likeRouter = express.Router();

likeRouter.get("/likes", likeController.like);

export default likeRouter;
