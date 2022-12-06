const express = require("express");
const router = express.Router();

router.get("/", (request, response, next) => {
  response.render("pages/index");
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
