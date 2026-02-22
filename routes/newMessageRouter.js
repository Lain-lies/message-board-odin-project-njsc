const express = require("express");
const { messages } = require("./indexRouter");
const newMessageRouter = express.Router();

newMessageRouter.use(express.urlencoded({ extended: true }));

newMessageRouter.post("/", (req, res) => {
	const text = req.body.text;
	const user = req.body.user;
	messages.push({ text, user, added: new Date() });
	res.redirect("/");
});

module.exports = newMessageRouter;
