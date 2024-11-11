import express from "express";
import likeController from "../controllers/like.controller.js";

const likeRouter = express.Router();

likeRouter.post("/likes", likeController.like);

likeRouter.delete("/unlike", likeController.unlike);

likeRouter.get("/likebyres/:id", likeController.likebyres);

export default likeRouter;
