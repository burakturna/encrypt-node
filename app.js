var password = "your_password";
console.log(password);

var bcrypt = require('bcrypt');
var colors = require('colors')
var saltRounds = 10;

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        console.log(hash.green);
    });
});