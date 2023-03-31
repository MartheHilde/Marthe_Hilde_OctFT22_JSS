var express = require('express');
var router = express.Router();
const axios = require('axios');
require("dotenv").config();

router.get("/", function (req, res, next) {
  axios.get(process.env.API_URL).then((resp) => {
    const memes = resp.data.data.memes;

    if (!req.user) {
      res.render("memes", { user: null, data: memes });
    } else {
      res.render("memes", { user: req.user, data: memes });
    }
  }).catch((error) => {
    console.error(error);
    res.status(500).send('Error retrieving memes');
  });
});

module.exports = router;
