var express = require('express');
var router = express.Router();

var User = require('../models/User');

router
    .post('/', function (req, res) {
        var newUser = new User({
            email : req.body.email,
            name : req.body.name,
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            password_enc : req.body.password_enc
        });
        newUser.save(function (error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log("User created");
        });
});

module.exports = router;