const express = require("express");
const router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/twitter", passport.authenticate("twitter"));

module.exports = router;
