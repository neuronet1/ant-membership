var mongodb = require('mongodb');
var util = require('util');
var events = require('events');
var BluePromise = require('bluebird');


var Database = function (dbName) {
    assert.ok(dbName,'Debes proporcionar el nombre de la base de datos');

    var self = this;
    events.EventEmitter.call(self);

    var database = null;
    var mongourl = "mongodb://localhost:27017/" + dbName;

    // Obtiene el numero de elementos que tiene la coleccion usuarios
    self.getUsersCount = function (db) {
        return new BluePromise( function (resolve, reject) {
            db.users.count(function (err, count) {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(count);
               }
            });
        });
    };

    self.getDatabase2 = function () {
        return new BluePromise( function (resolve, reject) {
            if(!database) {
                // connect to database
                mongodb.MongoClient.connect(mongourl, function (err, db) {
                    if(err) {
                        reject(err);
                    }
                    else {
                        database = {
                            db: db,
                            users: db.collection('users')
                        };
                        resolve(database);
                    }
                });
            }
            else {
                resolve(database);
            }
        });
    };

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
