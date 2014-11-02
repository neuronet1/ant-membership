var Database = require('./lib/db');
var SeedData = require('./lib/seedData');
var util = require('util');
var events = require('events');

var Membership = function (dbName) {
    var self = this;
    events.EventEmitter.call(self);

    var database = new Database(dbName);

    self.sayHello = function () {
        console.log('Hola mundo 2');
    };

    // Si las colecciones no existen o estan vacias
    // las llena con los valores iniciales
    self.seedDatabase = function () {
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
                                console.log(item);
                            });
                        }
                    }

                });
            }

        });
    };


    return self;
};

util.inherits(Membership, events.EventEmitter);
module.exports = Membership;
