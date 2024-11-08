import sequelize from "../common/sequelize/connect.sequelize.js";
import { DataTypes } from "sequelize";

const userModel = sequelize.define(
	"user",
	{
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		full_name: { type: DataTypes.STRING(255), allowNull: false },
		email: { type: DataTypes.STRING(255), allowNull: false },
		password: { type: DataTypes.STRING(255), allowNull: false },
	},
	{ timestamps: false }
);

export default userModel;
