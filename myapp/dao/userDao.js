/**
 *userDao
 */

var model=require('../model/index');
var User=model.User;

exports.add=function (username,password,callback) {
    var user=new User({
        username:username,
        password:password
    });

    user.save(callback);
};

exports.update=function (user,callback) {
    var _id = user._id;
    delete user._id;
    User.update({_id:_id},user,callback);
};

exports.delete=function (user,callback) {
    User.remove({_id:user._id},callback);
};

exports.get=function (callback) {
    User.find(callback);
};
