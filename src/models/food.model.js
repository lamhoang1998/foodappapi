import sequelize from "../common/sequelize/connect.sequelize.js";
import { DataTypes } from "sequelize";

const Food = sequelize.define(
	"food",
	{
		food_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		food_name: { type: DataTypes.STRING(255), allowNull: false },
		image: { type: DataTypes.STRING(255), allowNull: false },
		price: { type: DataTypes.FLOAT, allowNull: false },
		desc: { type: DataTypes.FLOAT, allowNull: false },
		type_id: { type: DataTypes.INTEGER, allowNull: false },
	},
	{ timestamps: false, freezeTableName: true }
);

const foodType = sequelize.define(
	"food_type",
	{
		type_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		type_name: { type: DataTypes.STRING(255), allowNull: false },
	},
	{ timestamps: false, freezeTableName: true }
);

foodType.hasMany(Food, { foreignKey: "type_id" });
Food.belongsTo(foodType, { foreignKey: "type_id" });

export default Food;
