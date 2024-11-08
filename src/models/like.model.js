import sequelize from "../common/sequelize/connect.sequelize.js";
import { DataTypes } from "sequelize";

const likeRes = sequelize.define(
	"like_res",
	{
		like_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		res_id: { type: DataTypes.INTEGER, allowNull: false },
		date_like: { type: "TIMESTAMP", allowNull: false },
	},
	{ timestamps: false }
);

export default likeRes;
