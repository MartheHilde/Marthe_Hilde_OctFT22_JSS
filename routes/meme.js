const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/:id", function (req, res, next) {
  if (!req.user) {
    res.render("login", { user: null, data: null });
  } else {
    const id = req.params.id;
    axios
      .get(`https://api.imgflip.com/get_memes`)
      .then((resp) => {
        const meme = resp.data.data.memes.find((meme) => meme.id === id);

        if (meme) {
          res.render("meme", { user: req.user, meme: meme });
        } else {
          res.status(404).send("Meme not found");
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error retrieving meme");
      });
  }
});

module.exports = router;
