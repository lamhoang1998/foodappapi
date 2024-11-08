import likeService from "../services/like.service.js";

const likeController = {
	like: async (req, res, next) => {
		const result = await likeService.like();

		res.json(result);
	},
};

export default likeController;
