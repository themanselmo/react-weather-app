var express = require('express');
var Cities = require('../models/cities');

// handles the middleware for the cities data in the backend
var router = express.Router();

router.get('/', function (req, res) {
    Cities.retrieveAll(function (err, cities) {
        if (err)
            // nested function: if an error occurs, it is 
            // returned as json data
            return res.json(err);
        // otherwise, the cities data is returned
        return res.json(cities);
    });
});

// http method to send data to the server
router.post('/', function (req, res) {
    var city = req.body.city;

    Cities.insert(city, function (err, result) {
        if (err)
            return res.json(err);
        return res.json(result);
    });
});

module.exports = router;