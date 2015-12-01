'use strict';

var express = require('express');
var router = express.Router();
var jwt = require('jwt-simple');

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

// USERS

router.get('/me', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user){
    res.send({
      displayName: user.displayName,
      picture: user.picture
    });
  })
});

router.get('/all', ensureAuthenticated, function (req, res){
  User.find({}, function (err, users){
    if (err) return console.log(err)
    res.send(users);
  })
})

router.post('/message', ensureAuthenticated, function (req, res){

})

module.exports = router;
