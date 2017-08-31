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
