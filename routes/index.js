const router = require("express").Router();

router.get("/", function(req, res) {
  res.send({ message: "Hello World!" });
});

module.exports = router;