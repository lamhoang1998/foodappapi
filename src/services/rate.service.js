import rateRes from "../models/rate.model.js";
import resModel from "../models/res.model.js";
import userModel from "../models/user.model.js";

const rateService = {
	rating: async (req) => {
		const { userId, resId, amount } = req;

		const newRate = await rateRes.create({
			user_id: userId,
			res_id: resId,
			amount: amount,
		});

		return newRate;
	},
	rateByRes: async (id) => {
		const rateByRes = await rateRes.findAll({
			where: { res_id: +id },
			include: resModel,
		});

		return rateByRes;
	},
	rateByUser: async (id) => {
		const rateByUser = await rateRes.findAll({
			where: { user_id: +id },
			include: userModel,
		});

		return rateByUser;
	},
};

export default rateService;
