const User = require("../models/user");

//CRUD controllers

//get all users
exports.getUsers = (req, res, next) => {
	User.findAll()
		.then((users) => {
			res.status(200).json({ users: users });
		})
		.catch((err) => console.log(err));
};

//create user
exports.createUser = (req, res, next) => {
	const { name, email } = req.body;
	User.create({
		name,
		email,
	})
		.then((result) => {
			res.status(201).json({ message: result });
		})
		.catch((err) => console.log(err));
};
//get user by Id
exports.getUser = (req, res, next) => {
	const userId = req.params.userId;
	User.findByPk(userId)
		.then((user) => {
			if (!user) {
				res.status(404).json({ message: "User not found" });
			}
			res.status(200).json({ users: users });
		})
		.catch((err) => console.log(err));
};

//update user
exports.updateUser = (req, res, next) => {
	const userId = req.params.userId;
	const updateName = req.body.name;
	const updateEmail = req.body.email;
	User.findByPk(userId)
		.then((user) => {
			if (!user) {
				return res.status(404).json({ message: "user not found!" });
			}
			user.name = updateName;
			user.email = updateEmail;
			return user.save();
		})
		.then((result) => {
			return res.status(200).json({ message: "user updated", user: result });
		})
		.catch((err) => console.log(err));
};

//Delete user
exports.deleteUser = (req, res, next) => {
	const userId = req.params.userId;

	User.findByPk(userId)
		.then((user) => {
			if (!user) {
				return res.status(404).json({ message: "user not found!" });
			}
			user.destroy({
				where: {
					id: userId,
				},
			});
		})
		.then((result) => {
			return res.status(200).json({ message: "user delete", user: result });
		})
		.catch((err) => console.log(err));
};
