import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`foodapp`, `root`, `lambmt`, {
	host: `localhost`,
	port: `3306`,
	dialect: `mysql`,
});

sequelize
	.authenticate()
	.then(() => {
		console.log("success");
	})
	.catch(() => {
		console.log("failed");
	});

export default sequelize;
