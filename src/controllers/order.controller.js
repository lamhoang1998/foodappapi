import { responseSuccess } from "../common/helpers/response.helper.js";
import orderService from "../services/order.service.js";

const orderController = {
	orders: async (req, res, next) => {
		try {
			const result = await orderService.orders(req.body);
			const resData = responseSuccess(result, "successful created a new order");

			res.status(200).json(resData);
		} catch (error) {
			next(error);
		}
	},
};

export default orderController;
