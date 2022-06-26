const express = require("express");
const list = require("../controllers");

const router = express.Router();
router.get("/:artist", list);

module.exports = router;
