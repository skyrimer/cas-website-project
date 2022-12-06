const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const tutorialRouter = require("./routes/tutorials");
app.use("/tutorials", tutorialRouter);
const mainRouter = require("./routes/main");
app.use("/", mainRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port http://localhost:${port}`);
});
