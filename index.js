const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use("/scripts", express.static(__dirname + "/node_modules/"))
app.set("view engine", "ejs");

// app.use(express.json())

const tutorialRouter = require("./routes/tutorials");
app.use("/tutorials", tutorialRouter);
const mainRouter = require("./routes/main");
app.use("/", mainRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
