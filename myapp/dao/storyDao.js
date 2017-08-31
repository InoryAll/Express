/**
 * story dao
 */
var model=require('../model/index');
var Story=model.Story;

exports.find=function (callback) {
    Story
        .find({})
        .populate('author')
        .exec(callback);
};

