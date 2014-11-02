var Database = require('./lib/db');

var Membership = function (dbName) {
    var self = this;

    var db = new Database(dbName);

    self.sayHello = function () {
        console.log('Hola mundo');
    };

};

module.exports = Membership
