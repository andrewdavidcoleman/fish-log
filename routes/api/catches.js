const router = require("express").Router();
const catchesController = require("../../controllers/catchesController");

// Matches with "/api/catches/players/:id"
router.route("/catches/player/:id")
  .get(catchesController.findAll)
  .post(catchesController.create)
  .put(catchesController.update)
  .delete(catchesController.remove);

module.exports = router;
