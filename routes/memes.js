var express = require('express');
var router = express.Router();
const axios = require('axios');
require("dotenv").config();

console.log("API_URL:", process.env.API_URL);

let cachedMemes = null;

router.get("/", function (req, res, next) {
  const viewedMemes = req.session.viewedMemes;

  if (cachedMemes) {
    if (!req.user) {
      res.render("memes", { user: null, data: cachedMemes, viewedMemes: viewedMemes });
    } else {
      res.render("memes", { user: req.user, data: cachedMemes, viewedMemes: viewedMemes });
    }
  } else {
    axios.get(process.env.API_URL).then((resp) => {
      const memes = resp.data.data.memes;
      
      cachedMemes = memes;

      if (!req.user) {
        res.render("memes", { user: null, data: memes });
      } else {
        if (viewedMemes) {
          res.render("memes", { user: req.user, data: memes, viewedMemes: viewedMemes });
        } else {
          res.render("memes", { user: req.user, data: memes, viewedMemes: {} });
        }
      }
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error retrieving memes');
    });
  }
});

module.exports = router;
