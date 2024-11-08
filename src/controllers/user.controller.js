import userService from "../services/user.service.js";

const userController = {
	listUser: async (req, res, next) => {
		const result = await userService.listUser();

		res.json(result);
	},
};

export default userController;
