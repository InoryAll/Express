/**
 * userService
 */

var userDao=require('../dao').UserDao;

exports.add=function (req,res,next) {
    console.log('addUser');
    var user=req.body;
    console.log(user);
    userDao.add(user.username,user.password,function (err,message) {
        if (!err) {
            message = {code: '1', message: 'success added!'};
        }
        else{
            message={code:'0',message:'failed!'};
        }
        return res.json(message);
    })
};

exports.updateUser=function (req,res,next) {
    console.log('updateUser');
    var user=req.body;
    console.log(user);
    userDao.update(user,function (err,message) {
        if (!err) {
            message = {code: '1', message: 'success updated!'};
        }
        else{
            message={code:'0',message:'failed!'};
        }
        return res.json(message);
    })
};

exports.deleteUser=function (req,res,next) {
    console.log('deleteUser');
    var user=req.body;
    console.log(user);
    userDao.delete(user,function (err,message) {
        if (!err) {
            message = {code: '1', message: 'success deleted!'};
        }
        else{
            message={code:'0',message:'failed!'};
        }
        return res.json(message);
    });
};


exports.getAll=function (req,res,next) {
    console.log('getAllUsers');
    userDao.get(function (err,user) {
        console.log(user);
        return res.json(user);
    });
};
