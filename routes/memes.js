var express = require('express');
var router = express.Router();
// const { resolve } = require('path');
const axios = require('axios');
require("dotenv").config();


//BM New API endpoint to use for the data from the meme API
axios.get(process.env.API_URL).then((resp) => {
  const memes = resp.data.data.memes;

  router.get("/", function (req, res, next) {
    if (!req.user) {
      res.render("memes", { user: null, data: memes });
    } else {
      res.render("memes", { user: req.user, data: memes });
    }
  });
});

module.exports = router;
