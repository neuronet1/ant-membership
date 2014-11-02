var mongodb = require('mongodb');


var Database = function (dbName) {
    var self = this;
    var mongourl = "mongodb://localhost:27017/" + dbName;
    var database = null;

    self.getDatabase = function (next) {
        if(!database) {
            // connect to database
            mongodb.MongoClient.connect(mongourl, function (err, db) {
                if(err) {
                    next(err, null);
                }
                else {
                    database = {
                        db: db,
                        users: db.collection('users')
                    };
                    next(null, database);
                }
            });
        }
        else {
            next(null, database);
        }
    };
};

module.exports = Database;
