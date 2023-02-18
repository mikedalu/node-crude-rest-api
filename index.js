const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const User = require("./models/user");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	next();
});

//test route
app.get("/", (req, res, next) => {
	res.send("Hello world");
});

//crude routes
app.use("/users", require("./routes/users"));

//sync database
sequelize
	.sync()
	.then((result) => {
		console.log("database connected");
		app.listen(3001);
	})
	.catch((err) => console.log(err));
