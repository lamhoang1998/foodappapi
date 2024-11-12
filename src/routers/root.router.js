import express from "express";
import userRouter from "./user.router.js";
import likeRouter from "./like.router.js";
import rateRouter from "./rate.router.js";
import orderRouter from "./order.router.js";

const rootRouter = express.Router();

rootRouter.get(`/`, (request, response, next) => {
	response.json(`ok`);
});

rootRouter.use("/user", userRouter);
rootRouter.use("/like", likeRouter);
rootRouter.use("/rate", rateRouter);
rootRouter.use("/order", orderRouter);

export default rootRouter;
