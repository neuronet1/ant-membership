var should = require('should');
var User = require('../models/user.js');

describe("User", function () {
   describe("Defaults", function () {
      var user = {};

      before(function () {
         user = new User({email:"samuelzv@gmail.com"});
      });

      it('email is samuelzv@gmail.com', function () {
         user.email.should.equal('samuelzv@gmail.com');
      });

      it('has a created date', function () {
         return user.createdAt.should.be.defined;
      });

      it('has a last login', function () {
         return user.lastLogin.should.be.defined;
      });

   }) ;

});