"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var db_1 = require("../db");
var router = express.Router();
router.post('/', function (req, res) {
    var movie = req.body;
    movie._id = new mongodb.ObjectID(req.body._id);
    db_1.default.db.collection('movies').save(movie).then(function () {
        res.end();
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('movies').find().toArray(function (movies) {
        res.json(movies);
    });
});
exports.default = router;
