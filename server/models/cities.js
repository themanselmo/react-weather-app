const db = require('../database');
// allows data interaction with the database
class Cities {
    // sends query to get the citie names from the cities table in the db
    static retrieveAll (callback) {
        db.query('SELECT city_name from cities', function (err, res) {
            if (err.error)
                return callback(err);
            callback(res);
        });
    }
    // sends query to insert a city into the cities table in the db
    static insert (city, callback) {
        db.query('INSERT INTO cities (city_name) VALUES ($1)', [city], function (err, res) {
            if (err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = Cities;