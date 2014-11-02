var mongodb = require('mongodb');
var util = require('util');
var events = require('events');


var Database = function (dbName) {
    var self = this;
    events.EventEmitter.call(self);

    var database = null;
    var mongourl = "mongodb://localhost:27017/" + dbName;

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

    return self;
};

util.inherits(Database, events.EventEmitter);
module.exports = Database;
