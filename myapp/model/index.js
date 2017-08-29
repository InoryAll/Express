var mongoose=require('mongoose');
var config=require('../config');

// 数据库连接
mongoose.connect(config.address,{
    useMongoClient: true
});

var connection = mongoose.connection;
connection.on('error',function (err) {
    if (err){
        console.error('connect to %s error:',config.address);
        process.exit(1);
    }
});

// 导出models
require('./user');

exports.User=mongoose.model('User');

