import express from "express";
import cors from "cors";
import rootRouter from "./src/routers/root.router.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(rootRouter);

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`server online at port ${PORT}`);
});
