var express = require('express');
var router = express.Router();

var User = require('../models/User');

router
    .get('/', function (req, res) {
        User.find({}, function (error, users) {
            if (error) {
                console.log(error);
                return;
            }
            res.send(users);
        });
    });

module.exports = router;