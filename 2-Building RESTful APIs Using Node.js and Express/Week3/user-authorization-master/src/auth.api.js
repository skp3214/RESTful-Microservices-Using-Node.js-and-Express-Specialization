const express = require('express');
const config = require("../config");
const router = express.Router();
const oauthCtrl = require("./auth.controller");

// Redirects the login to consent authorization screen from GitHub
router.get('/login', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`);
});

router.get('/callback', (req, res) => {
        // Return the token in a cookie
        // Data should be sent either in cookie or in session storage
        try {
          oauthCtrl.oauthProcessor(req.query.code, (err, data) => {
            if (err) {
              res.status(401).send({ error: "Bad Request" });
            } else {
              res.cookie('access_token', data, { httpOnly: true });
              res.redirect('/index.html');
            }
          });
        } catch (err) {
          res.status(401).send({ error: "Unexpected error" });
        }
      });

module.exports = router;
