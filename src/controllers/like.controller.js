import { responseSuccess } from "../common/helpers/response.helper.js";
import likeService from "../services/like.service.js";

const likeController = {
	like: async (req, res, next) => {
		try {
			console.log(req.body);
			const result = await likeService.like(req.body);

			const resData = responseSuccess(
				result,
				"successful pressed the like button"
			);

			res.status(200).json(resData);
		} catch (error) {
			console.error(error);
			next(error);
		}
	},
	unlike: async (req, res, next) => {
		try {
			const result = await likeService.unlike(req.body);
			const resData = responseSuccess(result, "successfully unliked");
			res.status(200).json(resData);
		} catch (error) {
			next(error);
		}
	},
	likebyres: async (req, res, next) => {
		try {
			const result = await likeService.likebyres(req.params.id);
			const resData = responseSuccess(
				result,
				"successfully got likes from restaurant "
			);
			res.status(200).json(resData);
		} catch (error) {
			next(error);
		}
	},
	likebyuser: async (req, res, next) => {
		try {
			const result = await likeService.likebyuser(req.params.id);
			const resData = responseSuccess(
				result,
				"successfully got likes from user "
			);
			res.status(200).json(resData);
		} catch (error) {
			next(error);
		}
	},
};

export default likeController;
