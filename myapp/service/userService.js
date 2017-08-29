/**
 * userService
 */

var userDao=require('../dao').UserDao;

exports.add=function (req,res,next) {
    var user=req.body;
    userDao.add(user.username,user.password,function (err,comment) {
        return res.json(comment);
    })
};

exports.getAll=function (req,res,next) {
    userDao.get(function (users) {
        return res.json(users);
    });
};
