import express from "express";
import orderController from "../controllers/order.controller.js";

const orderRouter = express.Router();

// send {userId , foodId , amount} as request`
orderRouter.post("/orders", orderController.orders);

export default orderRouter;
