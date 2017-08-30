/**
 *userDao
 */

var model=require('../model');
var User=model.User;

exports.add=function (username,password,callback) {
    var user=new User({
        username:username,
        password:password
    });

    user.save(callback);
};

exports.get=function (callback) {
    User.find(callback);
};
