import { responseSuccess } from "../common/helpers/response.helper.js";
import rateService from "../services/rate.service.js";

const rateController = {
	rating: async (req, res, next) => {
		try {
			const result = await rateService.rating(req.body);

			const resData = responseSuccess(result, "successful rated a restaurant");

			res.status(200).json(resData);
		} catch (error) {
			next(error);
		}
	},
	rateByRes: async (req, res, next) => {
		try {
			const result = await rateService.rateByRes(req.params.id);
			const resData = responseSuccess(
				result,
				"successful got rate by restaurant"
			);

			res.status(200).json(resData);
		} catch (error) {
			next(error);
		}
	},
	rateByUser: async (req, res, next) => {
		try {
			const result = await rateService.rateByUser(req.params.id);
			const resData = responseSuccess(result, "successful got rate by user");

			res.status(200).json(resData);
		} catch (error) {
			next(error);
		}
	},
};

export default rateController;
