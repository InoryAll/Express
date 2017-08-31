var mongoose=require('mongoose');
var config=require('../config');

mongoose.Promise = global.Promise;
// 数据库连接
mongoose.connect(config.address,{
    useMongoClient: true
});

var connection = mongoose.connection;
connection.on('open',function () {
    console.log('connected to '+config.address);
    createData();
});
connection.on('error',function (err) {
    if (err){
        console.error('connect to %s error:',config.address);
        process.exit(1);
    }
});

// 导出models
require('./user');
require('./story');

exports.User=mongoose.model('User');
exports.Story=mongoose.model('Story');

function createData() {
    var User=require('./index').User;
    var Story=require('./index').Story;
    var ObjectId = mongoose.Types.ObjectId;

    var userIds = [new ObjectId, new ObjectId, new ObjectId];
    var storyIds = [new ObjectId, new ObjectId, new ObjectId, new ObjectId];
    var users = [];
    var stories = [];

    users.push({ _id : userIds[0], username : 'trj', password : '123456' });
    users.push({ _id : userIds[1], username : 'wrf', password : '123456' });
    users.push({ _id : userIds[2], username : 'bj', password : '123456' });
    stories.push({_id : storyIds[0], name :'i love you', author : userIds[0], content : 'trj love wrf.'});
    stories.push({_id : storyIds[1], name :'i love you', author : userIds[1], content : 'trj love wrf.'});
    stories.push({_id : storyIds[2], name :'i love you', author : userIds[2], content : 'trj love wrf.'});

    User.create(users, function(err, docs) {
        Story.create(stories, function(err, docs) {
        });
    });
}

