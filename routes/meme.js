var express = require("express");
var router = express.Router();
// const { resolve } = require('path');
const axios = require("axios");

router.get("/:id", function (req, res, next) {
  if (!req.user) {
    res.render("login", { user: null, data: null });
  } else {
    res.render("meme", { user: req.user, data: memeDetails });
  }
});

router.post("/", (req, res, next) => {
  memeDetails = req.body;
  res.status(200).json(memeDetails);
});

module.exports = router;