import likeRes from "../models/like.model.js";

const likeService = {
	like: async () => {
		const like = await likeRes.findAll();

		return like;
	},
};

export default likeService;
