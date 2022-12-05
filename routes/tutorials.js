const express = require("express");
const router = express.Router()


router.get("/:id", (request, response, next) => {
  response.render("/pages/tutorial", { number: request.params.id });
});


module.exports = router