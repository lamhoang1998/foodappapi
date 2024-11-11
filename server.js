import express from "express";
import cors from "cors";
import rootRouter from "./src/routers/root.router.js";
import { responseError } from "./src/common/helpers/response.helper.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(rootRouter);
app.use((err, req, res, next) => {
	console.log(err);
	const resData = responseError(err.message, err.status);
	res.status(400).json(resData);
});

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`server online at port ${PORT}`);
});
