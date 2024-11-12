import Order from "../models/order.model.js";

const orderService = {
	orders: async (req) => {
		const { userId, foodId, amount } = req;
		const newOrder = await Order.create({
			user_id: userId,
			food_id: foodId,
			amount: amount,
		});

		return newOrder;
	},
};

export default orderService;
