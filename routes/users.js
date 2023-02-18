const controllers = require("../controllers/user");
const router = require("express").Router();

//crude routes /users
router.get("/", controllers.getUsers); // /users
router.get("/:userId", controllers.getUser); // /users/:userId
router.post("/", controllers.createUser); // /users
router.put("/:userId", controllers.deleteUser); // /user/:userId
router.put("/:userId", controllers.updateUser); // /user/:userId

module.exports = router;
