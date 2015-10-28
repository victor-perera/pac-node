var express = require('express');
var router = express.Router();

var Complaint = require('../models/Complaint');

router
    .get('/', function(req, res, next) {
        Complaint.find({}, function (error, complaints) {
            if (error) {
                console.log(error);
                next();
            }
            res.send(complaints);
        });
    })
    .get('/:id', function (req, res, next) {
        Complaint.findById({ _id: req.params.id }, function (error, complaints) {
            if (error) {
                console.log(error);
                return;
            }
            res.send(complaints);
        });
    })
    .post ('/new', function (req, res) {
        var newComplaint = new Complaint ({
            description : req.body.description,
            author : req.body.author,
            image_src : req.body.image_src,
            audio_src : req.body.audio_src
        });
        newComplaint.save(function (error) {
            if (error) {
                console.log(error);
                next();
            }
        });
        Complaint.find({}, function (error, complaints) {
            if (error) {
                console.log(error);
                next();
            }
            res.send(complaints);
        });
    });

module.exports = router;