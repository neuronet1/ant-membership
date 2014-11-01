var assert = require('assert');

var User = function (args) {
    assert.ok(args.email, "El campo correo es requerido");

    var user = {};
    user.email = args.email;
    user.createdAt = args.createdAt || new Date();
    user.lastLogin = args.lastLogin || new Date();

    return user;
};

module.exports = User;
