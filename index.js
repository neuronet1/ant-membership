var Database = require('./lib/db');
var util = require('util');
var events = require('events');

var Membership = function (dbName) {
    var self = this;
    events.EventEmitter.call(self);

    var db = new Database(dbName);

    self.sayHello = function () {
        console.log('Hola mundo 2');
    };

    return self;
};

util.inherits(Membership, events.EventEmitter);
module.exports = Membership
