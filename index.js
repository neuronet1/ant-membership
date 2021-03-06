var Database = require('./lib/db');
var SeedData = require('./lib/seedData');
var util = require('util');
var events = require('events');
var BluePromise = require('bluebird');

var Membership = function (dbName) {
    var self = this;
    events.EventEmitter.call(self);

    var database = new Database(dbName);

    var getUsersCount = function (database) {
        console.log(database.tag);
    };

    self.sayHello = function () {
        console.log('Hola mundo 2');
    };

    // Si las colecciones no existen o estan vacias
    // las llena con los valores iniciales
    self.seedDatabase = function () {

        database.getDatabase().
            then(getUsersCount)

        /*
        database.getDatabase(function (err, db) {
            if(err) {
                console.log('Error al iniciar los valores iniciales de la base:' + err);
            }
            else {
                // checamos si hay datos
                db.users.count(function (err, count) {
                    if(err) {
                       console.log('Error al obtener el numero de registros en usuarios');
                    }
                    else {
                        if(count === 0) {
                            SeedData.initialUsers.forEach(function (item) {
                                db.users.insert(item, function (err) {
                                    if(err) {
                                        console.log('Error al crear el usuario');
                                    }
                                    else {
                                        console.log(item);
                                    }
                                });
                            });
                        }
                        else {
                            console.log('No inserte porque la coleccion tiene datos');
                        }
                    }

                });
            }

        });
        */

    };


    return self;
};

util.inherits(Membership, events.EventEmitter);
module.exports = Membership;
