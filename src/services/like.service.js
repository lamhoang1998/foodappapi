import likeRes from "../models/like.model.js";
import resModel from "../models/res.model.js";
import userModel from "../models/user.model.js";

const likeService = {
	like: async (req) => {
		const { userId, resId } = req;

		const newLike = await likeRes.create({
			user_id: userId,
			res_id: resId,
		});

		return newLike;
	},
	unlike: async (req) => {
		const { userId, resId } = req;
		console.log(userId, resId);

		const unLike = await likeRes.destroy({
			where: {
				user_id: userId,
				res_id: resId,
			},
		});

		return unLike;
	},
	likebyres: async (id) => {
		const likeByRes = await likeRes.findAll({
			where: { res_id: +id },
			include: resModel,
		});

		console.log(likeByRes);
		return likeByRes;
	},
	likebyuser: async (id) => {
		const likeByUser = await likeRes.findAll({
			where: { user_id: +id },
			include: userModel,
		});
		console.log(likeByUser);
		return likeByUser;
	},
};

export default likeService;
