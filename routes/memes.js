var express = require('express');
var router = express.Router();
const axios = require('axios');
require("dotenv").config();

console.log("API_URL:", process.env.API_URL);

let cachedMemes = null;

router.get("/", function (req, res, next) {
  if (cachedMemes) {
    if (!req.user) {
      res.render("memes", { user: null, data: cachedMemes });
    } else {
      res.render("memes", { user: req.user, data: cachedMemes });
    }
  } else {
    axios.get(process.env.API_URL).then((resp) => {
      const memes = resp.data.data.memes;
      cachedMemes = memes;

      if (!req.user) {
        res.render("memes", { user: null, data: memes });
      } else {
        res.render("memes", { user: req.user, data: memes });
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error retrieving memes');
    });
  }
});

module.exports = router;
