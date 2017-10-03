const router = require("express").Router();
const nytController = require("../../controllers/nytController");

// Matches with "/api/nyt"
router.route("/:query")
  .get(nytController.search);

module.exports = router;