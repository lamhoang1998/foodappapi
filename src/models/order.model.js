import sequelize from "../common/sequelize/connect.sequelize.js";
import { DataTypes } from "sequelize";
import userModel from "./user.model.js";
import Food from "./food.model.js";

const Order = sequelize.define(
	"order",
	{
		order_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		food_id: { type: DataTypes.INTEGER, allowNull: false },
		amount: { type: DataTypes.INTEGER, allowNull: false },
		code: { type: DataTypes.STRING(255), allowNull: true },
		arr_sub_id: { type: DataTypes.STRING(255), allowNull: true },
	},
	{ timestamps: false, freezeTableName: true }
);

userModel.hasMany(Order, { foreignKey: "user_id" });
Food.hasMany(Order, { foreignKey: "food_id" });
Order.belongsTo(Food, { foreignKey: "food_id" });
Order.belongsTo(userModel, { foreignKey: "user_id" });

export default Order;
