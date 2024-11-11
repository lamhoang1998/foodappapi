import sequelize from "../common/sequelize/connect.sequelize.js";
import { DataTypes } from "sequelize";

const resModel = sequelize.define("restaurant", {
	res_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	res_name: { type: DataTypes.STRING(255), allowNull: false },
	image: { type: DataTypes.STRING(255), allowNull: false },
	desc: { type: DataTypes.STRING(255), allowNull: false },
});

export default resModel;
