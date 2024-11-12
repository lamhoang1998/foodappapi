import sequelize from "../common/sequelize/connect.sequelize.js";
import { DataTypes } from "sequelize";
import resModel from "./res.model.js";
import userModel from "./user.model.js";

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
		res_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		date_like: { type: "TIMESTAMP", allowNull: false },
	},
	{ timestamps: false }
);

userModel.hasMany(likeRes, { foreignKey: "user_id" });
resModel.hasMany(likeRes, { foreignKey: "res_id" });
likeRes.belongsTo(resModel, { foreignKey: "res_id" });
likeRes.belongsTo(userModel, { foreignKey: "user_id" });

export default likeRes;
