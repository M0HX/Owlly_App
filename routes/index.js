//Load Express module
const express = require('express');

//Initialize router functionally from express
const router = express.Router()
const passport = require('passport');

//Require index controller 
const indexCntrl = require("../controllers/index");


router.get("/", indexCntrl.index_get);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      // Requesting the user's profile and email
      scope: ['profile', 'email'],
      // Optionally force pick account every time
      // prompt: "select_account"
    }
  ));
  // Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/',
      failureRedirect: '/'
    }
  ));
  

  // OAuth logout route
router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/');
    });
  });
  
//Exports
module.exports = router;