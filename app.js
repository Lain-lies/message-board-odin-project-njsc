const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 8080;

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server running on PORT ${PORT}`);
});
