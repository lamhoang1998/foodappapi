import likeRes from "../models/like.model.js";

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
	likebyres: async (id) => {},
	likebyuser: async (req) => {},
};

export default likeService;
