import express from "express";
import userRouter from "./user.router.js";
import likeRouter from "./like.router.js";

const rootRouter = express.Router();

rootRouter.get(`/`, (request, response, next) => {
	response.json(`ok`);
});

rootRouter.use("/user", userRouter);
rootRouter.use("/like", likeRouter);

export default rootRouter;
