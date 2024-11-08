import userModel from "../models/user.model.js";

const userService = {
	listUser: async () => {
		const userfind = await userModel.findAll({
			where: {
				full_name: "lam hoang",
			},
		});
		console.log(userfind);
		const result = await userModel.findAll();

		return result;
	},
};

export default userService;
