import express from "express";
import userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/userlist", userController.listUser);

export default userRouter;
