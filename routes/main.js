const { json } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const getJsonData = (filePath) => {
  const file = path.join(__dirname, "public", filePath);
  fs.readFile(file, "utf8", (err, data) => {
    return JSON.parse(data);
  });
};

router.get("/", (request, response, next) => {
  const publications = getJsonData("publications.json");
  response.render("pages/index", { publications: publications });
});

router.get("/about", (request, response, next) => {
  response.render("pages/about");
});

router.get("/projects", (request, response, next) => {
  response.render("pages/projects");
});

router.get("/contacts", (request, response, next) => {
  response.render("pages/contacts");
});

module.exports = router;
