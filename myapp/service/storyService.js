/**
 * story service
 */
var storyDao=require('../dao/storyDao');

exports.getAll=function (res,req,next) {
    storyDao.find(function (err,storys) {
        console.log(storys);
        return res.json(storys);
    });
};


