import sequelize from "../common/sequelize/connect.sequelize.js";
import { DataTypes } from "sequelize";
import resModel from "./res.model.js";
import userModel from "./user.model.js";

const rateRes = sequelize.define(
	"rate_res",
	{
		res_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		res_id: { type: DataTypes.INTEGER, allowNull: false },
		amount: { type: DataTypes.INTEGER, allowNull: false },
		date_rate: { type: "TIMESTAMP", allowNull: true },
	},
	{ timestamps: false }
);

resModel.hasMany(rateRes, { foreignKey: "res_id" });
userModel.hasMany(rateRes, { foreignKey: "user_id" });
rateRes.belongsTo(resModel, { foreignKey: "res_id" });
rateRes.belongsTo(userModel, { foreignKey: "user_id" });

export default rateRes;
