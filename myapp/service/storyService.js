/**
 * story service
 */
var storyDao=require('../dao/storyDao');

exports.getAll=function (req,res,next) {
    storyDao.find(function (err,stories) {
        console.log(stories);
        return res.json(stories);
    });
};


